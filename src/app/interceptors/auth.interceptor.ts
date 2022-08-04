import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpClient,
  } from '@angular/common/http';
import { catchError, Observable, throwError, switchMap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private readonly authUrl = 'https://localhost:7014/api/auth';
  static accessToken = '';
  static refreshToken = '';

  constructor(private http: HttpClient) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone({
      setHeaders: {
        Authorization: `Bearer ${AuthInterceptor.accessToken}`
      }
    });

    return next.handle(req).pipe(catchError((err: HttpErrorResponse) => {
      if(err.status === 401) {

        console.log('*****Interceptor refresh token*****');

        this.http.post(this.authUrl + '/refresh', {"refreshToken": AuthInterceptor.refreshToken}, {withCredentials: true})
                 .subscribe((res: any) => {
                  
                  console.log('new access token - ' + res.accessToken)
                  
                  AuthInterceptor.accessToken = res.accessToken;
                  
                  return next.handle(request.clone({
                    setHeaders: {
                      Authorization: `Bearer ${AuthInterceptor.accessToken}`
                    }
                  }))
                })
        }
        console.log('*****Interceptor token is valid*****');

        return throwError(() => err);
    }));  
        // pipe(
        //   switchMap((res: any) => {
        //     console.log('new access token - ' + res.accessToken)
        //     AuthInterceptor.accessToken = res.accessToken;
        //     return next.handle(request.clone({
        //       setHeaders: {
        //         Authorization: `Bearer ${AuthInterceptor.accessToken}`
        //       }
        //     }))
        //   }));
      
  }
}
