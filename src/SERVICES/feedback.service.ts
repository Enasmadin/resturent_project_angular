import { Injectable } from '@angular/core';
import { Connect } from 'shared/connect';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor( private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }
  addHero(hero: Connect): Observable<Connect> {

    return this.http.post<Connect>(baseURL + 'feedback/',hero)

    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
