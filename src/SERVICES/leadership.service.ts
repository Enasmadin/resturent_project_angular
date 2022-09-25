import { Injectable } from '@angular/core';
import { Leader } from 'shared/leader';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'shared/baseurl';
import { catchError, map, Observable } from 'rxjs';
import { Component, OnInit, Inject } from '@angular/core';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class LeadershipService {
 leaders:Leader[]= [];
  constructor( private http: HttpClient,private processHTTPMsgService: ProcessHTTPMsgService)
  {
    // this.leaders =
    // [
    //   { name:'gorg cef',desc_jop:'techic_office' ,image:"/assets/images/alberto.png",desc:"my gops is front end and can use boat strap"},
    //   { name:'enas' ,desc_jop:'front_end' ,image:"/assets/images/alberto.png",desc:"my gops is front end and can use boat strap"},
    //   { name:'amira' ,desc_jop:'back_end' ,image:"/assets/images/alberto.png",desc:"my gops is front end and can use boat strap"},

    // ]

   }
   getallleader(): Observable <Leader[]>
  {
      // return  Promise.resolve(this.leaders);
      return this.http.get<[Leader]>(baseURL + 'leadership').pipe(catchError(this.processHTTPMsgService.handleError));

  }
  getFeaturedDish(): Observable<Leader> {

      return this.http.get<Leader[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0])).pipe(catchError(this.processHTTPMsgService.handleError));

  }
  }


