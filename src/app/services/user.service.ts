import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../pages/models/login.model';
import { ApiEndpoints } from '../constants/api-endpoints';
import { ResponseMessage } from '../pages/models/response-message.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { }

  login(pObj: LoginModel): Observable<ResponseMessage> {
    return this.http.post<ResponseMessage>(ApiEndpoints.users.login, pObj)
  }
}