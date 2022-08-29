import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';
import { SongResponse } from '../models/responses/SongResponse';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private songsUrl = 'https://localhost:7014/api/Songs';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

    /** GET songs from the server  */
    getSongs(): Observable<SongResponse[]> {
      return this.http.get<SongResponse[]>(this.songsUrl)
      .pipe(
        tap(_ => this.messageService.addMessage('fetched songs')),
        catchError(this.messageService.handleError('getSongs', []))
      );
    }
  
    /** GET song by id. Will 404 if id not found */
    getSong(id: string): Observable<SongResponse> {
      const url = `${this.songsUrl}/${id}`;
      return this.http.get<SongResponse>(url)
      .pipe(
        tap(_ => this.messageService.addMessage(`fetched song id=${id}`)),
        catchError(this.messageService.handleError<SongResponse>(`getSong id =${id}`))
      );
    }
}
