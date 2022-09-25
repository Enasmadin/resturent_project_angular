import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { baseURL } from 'shared/baseurl';

import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import { ColorDirective } from './dishdetail/directive/color.directive';
import { ConnectComponent } from './connect/connect.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    ColorDirective,
    ConnectComponent,



  ],
  imports: [

    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    FontAwesomeModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,










  ],

  exports: [
    MatDialogModule,
  ],
  providers: [

  {provide:'BaseURL', useValue: baseURL}
  ],
  entryComponents:[ LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
