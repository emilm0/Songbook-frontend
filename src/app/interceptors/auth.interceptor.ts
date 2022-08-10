import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  } from '@angular/common/http';
import { catchError, Observable, throwError, mergeMap } from 'rxjs';
import { AuthService } from '../logger/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.authService.accessToken === '') {
      return next.handle(request); 
    }

    var req = this.setAuthorizationHeader(request, this.authService.accessToken);

    return next.handle(req).pipe(catchError((err: HttpErrorResponse) => {
      if(err.status === 401) {

        if(this.authService.accessToken === '') {
          return throwError(() => err );
        }

        return this.authService.renewAccessToken(this.authService.refreshToken).pipe(
          mergeMap((response: any) => {
            this.authService.accessToken = response.accessToken;
            this.authService.refreshToken = response.refreshToken;
            var req = this.setAuthorizationHeader(request, this.authService.accessToken);

            return next.handle(req);            
          })
        )
      }
            
      return throwError(() => err);
    }));  
  }

  setAuthorizationHeader(request: HttpRequest<unknown>, token: string): HttpRequest<unknown> {
    var req = request.clone({
      setHeaders: {
        Authorization: `bearer ${token}`
      }
    });

    return req;
  }
}
