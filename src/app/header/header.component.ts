import { Component, OnInit } from '@angular/core';
import { faThumbsUp, faThumbtack, faHashtag ,faHouse,faInfo,faList,faSdCard,faAddressCard} from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faThumbsUp = faThumbsUp;
  faThumbtack = faThumbtack;
  faHashtag = faHashtag;
  house=faHouse;
  fainfo=faInfo;
  falist=faList;
  facard=faAddressCard;



  constructor(public dialog: MatDialog  ) { }

  ngOnInit(): void {
  }
  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }

}
