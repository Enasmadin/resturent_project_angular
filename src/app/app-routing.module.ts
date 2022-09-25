import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConnectComponent } from './connect/connect.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  { path: 'Menu/:id', component: DishdetailComponent },
   { path: 'About', component:AboutComponent  },
   {path:"home" , component:HomeComponent},
   {path:"menu" ,component:MenuComponent},
   {path:"contact",component:ConnectComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
