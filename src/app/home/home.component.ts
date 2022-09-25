// import { Component, OnInit } from '@angular/core';
import { Dishs } from 'shared/dishs';
import { Leader } from 'shared/leader';
import { DishesService } from 'src/SERVICES/dishes.service';
import { LeadershipService } from 'src/SERVICES/leadership.service';
import {  Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { animation } from '@angular/animations';
import { expand, flyInOut } from 'shared/app.animation';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    expand(),
    flyInOut()

   ]

})
export class HomeComponent implements OnInit {
  dishers:Dishs[] | any;
  leaders:Leader[] | any;
  lederMess: string;
  errMess:string;

  constructor( private dishservice:DishesService ,private leaderservice:LeadershipService) {

   }

  ngOnInit(): void {
  this.dishservice.getFeaturedDish().subscribe(dishes => this.dishers= dishes,errmess => this.errMess = <any>errmess);
  this.leaderservice.getFeaturedDish() .subscribe(dishes =>this.leaders = dishes,errmess => this.lederMess = <any>errmess);

  }

}
