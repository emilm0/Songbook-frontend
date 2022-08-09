import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from './Requests/LoginRequest';
import { AuthenticatedUser } from './Response/AuthenticatedUser';
import { catchError, map, Observable, tap } from 'rxjs';
import { MessageService } from '../services/message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private readonly authUrl = 'https://localhost:7014/api/auth';

  public accessToken = '';
  public refreshToken = '';
  public username = '';

  constructor(private http: HttpClient, private messageService: MessageService) {  }  

  login(loginRequest: LoginRequest) {
    return this.http.post(this.authUrl + '/login', loginRequest, {withCredentials: true})
                    .pipe( 
                      tap((res: any) => {this.authenticateUser(res) }),
                      catchError(this.messageService.handleError('Login'))
                    );
  }

  isLoginUser(): boolean {
    return this.accessToken === '' ? false : true;
  }

  authenticateUser(authenticatedUser: AuthenticatedUser){
    this.accessToken = authenticatedUser.accessToken;
    this.refreshToken = authenticatedUser.refreshToken;
    this.username = authenticatedUser.username;
  }

  renewAccessToken(refreshTokenRequest: string): Observable<any> {
   return this.http.post(this.authUrl + '/refresh',
                  {'refreshToken': refreshTokenRequest },
                  {withCredentials: true}).pipe(
                    catchError(this.messageService.handleError('Refresh token'))
                    )
  }

  logout() {
    return this.http.delete(this.authUrl + '/logout' ).pipe(
      catchError(this.messageService.handleError('Logout'))
    );
  }

  getUsers() {
    return this.http.get(this.authUrl + '/Users').pipe(
      catchError(this.messageService.handleError('Get users'))
    )  
  }
  
}
