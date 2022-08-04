import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { LoginRequest } from './Requests/LoginRequest';
import { AuthenticatedUser } from './Response/AuthenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private readonly authUrl = 'https://localhost:7014/api/auth';
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  public message = '';

  constructor(private http: HttpClient) {  }

  login(loginRequest: LoginRequest) {
    return this.http.post(this.authUrl + '/login', loginRequest, {withCredentials: true})
                    .subscribe((res: any) => {
                        this.authenticateUser(res)
                      });
  }

  authenticateUser(authenticatedUser: AuthenticatedUser){
    AuthInterceptor.accessToken = authenticatedUser.accessToken;
    AuthInterceptor.refreshToken = authenticatedUser.refreshToken;
  }

  getUsers() {
    this.http.get(this.authUrl + '/Users')
        .subscribe(
          (res: any) => {
            this.message = `Hi ${res.userName}`;
            console.log(this.message)
          }
        )
  }
  
}
