import { Component, OnInit } from '@angular/core';
import {faContactBook, faLightbulb} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
   fac=faLightbulb;
  constructor() { }

  ngOnInit(): void {
  }

}
