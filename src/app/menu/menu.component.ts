import { Component, OnInit } from '@angular/core';
import { Dish } from 'shared/dish';
import { Inject } from '@angular/core';
import { DishesService } from 'src/SERVICES/dishes.service';
import { expand, flyInOut } from 'shared/app.animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]

})
export class MenuComponent implements OnInit {
  dishes:Dish [] | any;
  errMess:string;
  // flyInOut:'enter';
  // dishes: Dish[] = [
  //   {
  //     id: '0',
  //     name: 'Uthappizza',
  //     image: '/assets/images/uthappizza.png',
  //     category: 'mains',
  //     featured: true,
  //     label: 'Hot',
  //     price: '4.99',
  //     // tslint:disable-next-line:max-line-length
  //     description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
  //   },
  //   {
  //     id: '1',
  //     name: 'Zucchipakoda',
  //     image: '/assets/images/zucchipakoda.png',
  //     category: 'appetizer',
  //     featured: false,
  //     label: '',
  //     price: '1.99',
  //     description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
  //   },
  //   {
  //     id: '2',
  //     name: 'Vadonut',
  //     image: '/assets/images/vadonut.png',
  //     category: 'appetizer',
  //     featured: false,
  //     label: 'New',
  //     price: '1.99',
  //     description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
  //   },
  //   {
  //     id: '3',
  //     name: 'ElaiCheese Cake',
  //     image: '/assets/images/elaicheesecake.png',
  //     category: 'dessert',
  //     featured: false,
  //     label: '',
  //     price: '2.99',
  //     description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
  //   }
  //  ];


  constructor(private dishserve:DishesService) {

   }

  ngOnInit(): void
  {
    this.dishserve.getalldishes().subscribe(dishes => this.dishes= dishes,errmess => this.errMess = <any>errmess);
  }

}
