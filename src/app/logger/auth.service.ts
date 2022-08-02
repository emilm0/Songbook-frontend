import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, map } from 'rxjs';
import { LoggedUser } from './LoggedUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private readonly auhtUrl = 'https://localhost:7081/api/auth';
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  public loggedUser = new LoggedUser('','');

  constructor(private http: HttpClient) {  }

  login(email: string, password: string) {
    return this.http.post(this.auhtUrl + '/login', {"email": email, "password": password})
              .pipe(
                map((res: any) => { return this.loggedUser = res;})
              ).subscribe(() => {
                 this.storeToken(this.loggedUser.jwtToken);
                });
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private storeToken(token: string){
     localStorage.setItem(this.JWT_TOKEN, token);
  }
  
}
