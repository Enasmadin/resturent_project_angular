import { Component, OnInit } from '@angular/core';
import { expand, flyInOut } from 'shared/app.animation';
import { Leader } from 'shared/leader';
import { LeadershipService } from 'src/SERVICES/leadership.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },

  animations: [
    flyInOut(),
    expand()
  ]

})
export class AboutComponent implements OnInit {
  leaders: Leader[] | undefined;
  lederMess:string;
  constructor( private leaderships :LeadershipService)
  {

  }

  ngOnInit(): void {
    // this.leaders = this.leaderships.getallleader();
    // this.leaderships.getallleader().subscribe(leader=> this.leaders==leader);
    this.leaderships.getallleader() .subscribe(dishes =>this.leaders = dishes,errmess => this.lederMess = <any>errmess);
  }

}
