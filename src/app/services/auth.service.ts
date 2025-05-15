import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, map, BehaviorSubject } from 'rxjs';
import { TokenResponse } from '../pages/models/login.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private accessToken: string | null = null;
    private loggedIn$ = new BehaviorSubject<boolean>(false);

    constructor(private http: HttpClient) {
        const storedToken = typeof window !== 'undefined'
            ? localStorage.getItem('refreshToken')
            : null;

        if (storedToken) {
            this.refreshToken().subscribe({
                next: () => this.loggedIn$.next(true),
                error: () => this.loggedIn$.next(false)
            });
        }
    }


    login(username: string, password: string): Observable<void> {
        return this.http.post<TokenResponse>('https://localhost:7071/api/Auth/login', {
            username,
            password
        }, { withCredentials: true }).pipe(
            tap(res => {
                this.accessToken = res.accessToken;
                localStorage.setItem('refreshToken', res.refreshToken);
                this.loggedIn$.next(true); // ✅ ต้องมี
            }),
            map(() => void 0)
        );
    }

    refreshToken(): Observable<string> {
        const refreshToken = localStorage.getItem('refreshToken');

        if (!refreshToken) {
            return new Observable(observer => {
                observer.error('No refresh token found');
                observer.complete();
            });
        }

        return this.http.post<TokenResponse>('https://localhost:7071/api/Auth/refresh', {
            accessToken: this.getAccessToken(),
            refreshToken: refreshToken
        }, {
            withCredentials: true
        }).pipe(
            tap(res => {
                this.accessToken = res.accessToken;
                localStorage.setItem('refreshToken', res.refreshToken); // อัปเดตใหม่ถ้ามี
            }),
            map(res => res.accessToken)
        );
    }


    logout(): void {
        this.accessToken = null;
        this.loggedIn$.next(false);
        this.http.post('https://localhost:7071/api/Auth/logout', {}, { withCredentials: true }).subscribe();
    }

    getAccessToken(): string | null {
        return this.accessToken;
    }

    isLoggedIn$(): Observable<boolean> {
        return this.loggedIn$.asObservable();
    }

    isLoggedIn(): boolean {
        return this.loggedIn$.value;
    }
}
