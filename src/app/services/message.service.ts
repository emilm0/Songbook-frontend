import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message = '';
  messageSubject = new Subject<string>;

  constructor() { }

  addMessage(message: string) {
    this.message = message;
    this.messageSubject.next(this.message);
  }

  clear() {
    this.message = '';
    this.messageSubject.next(this.message);
  }

  getMessageSubject(): Observable<string> {
    return this.messageSubject.asObservable();
  }

  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead

          // TODO: better job of transforming error for user consumption
      this.addMessage(`${operation} failed: ${error.error ? error.error : ''}`);
  
      if(error.status === 401){
        this.addMessage(this.message + `You don't have access`)
      }

      // Let the app keep running by returning an empty result
      return of(result as T);
    };
  }
}
