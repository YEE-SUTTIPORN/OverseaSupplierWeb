import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.auth.getAccessToken();

        if (token) {
            const authReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`),
                withCredentials: true // ส่ง cookie ด้วย
            });
            return next.handle(authReq);
        }

        return next.handle(req.clone({ withCredentials: true }));
    }
}
