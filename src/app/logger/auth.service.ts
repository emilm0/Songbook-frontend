import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from './Requests/LoginRequest';
import { AuthenticatedUser } from './Response/AuthenticatedUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private readonly authUrl = 'https://localhost:7014/api/auth';
  private readonly JWT_TOKEN = 'JWT_TOKEN';

  public accessToken = '';
  public refreshToken = '';
  public username = 'aaaa';

  constructor(private http: HttpClient) {  }  

  login(loginRequest: LoginRequest) {
    return this.http.post(this.authUrl + '/login', loginRequest, {withCredentials: true})
                    .subscribe((res: any) => {
                        this.authenticateUser(res)
                      });
  }

  isLoginUser(): boolean {
    return this.accessToken === '' ? false : true;
  }

  authenticateUser(authenticatedUser: AuthenticatedUser){
    this.accessToken = authenticatedUser.accessToken;
    this.refreshToken = authenticatedUser.refreshToken;
    this.username = authenticatedUser.username;
    console.log('accessToken - ' + this.accessToken);
    console.log('refreshToken - ' + this.refreshToken);
    console.log('username  - ' + this.username);
  }

  renewAccessToken(refreshTokenRequest: string): Observable<unknown> {
   return this.http.post(this.authUrl + '/refresh',
                  {'refreshToken': refreshTokenRequest },
                  {withCredentials: true})
  }

  logout() {
    this.http.delete(this.authUrl + '/logout' ).subscribe();
    this.accessToken = '';
    this.refreshToken = '';
  }

  getUsers() {
    this.http.get(this.authUrl + '/Users')
        .subscribe()
  }
  
}
