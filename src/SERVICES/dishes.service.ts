import { Injectable } from '@angular/core';
import { Dishs } from 'shared/dishs';
import { Observable, of } from 'rxjs';
import { delay, find } from 'rxjs/operators';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  dishes:Dishs[] ;


  constructor( private http: HttpClient,private processHTTPMsgService: ProcessHTTPMsgService) {
    // this.dishes=[
    //     {
    //         id: '0',
    //         name: 'Uthappizza',
    //         image: '/assets/images/uthappizza.png',
    //         category: 'mains',
    //         featured: true,
    //         label: 'Hot',
    //         price: '4.99',
    //         // tslint:disable-next-line:max-line-length
    //         description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
    //         comments: [
    //             {
    //                 rating: 5,
    //                 comment: 'Imagine all the eatables, living in conFusion!',
    //                 author: 'John Lemon',
    //                 date: '2012-10-16T17:57:28.556094Z'
    //             },
    //             {
    //                 rating: 4,
    //                 comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
    //                 author: 'Paul McVites',
    //                 date: '2014-09-05T17:57:28.556094Z'
    //             },
    //             {
    //                 rating: 3,
    //                 comment: 'Eat it, just eat it!',
    //                 author: 'Michael Jaikishan',
    //                 date: '2015-02-13T17:57:28.556094Z'
    //             },
    //             {
    //                 rating: 4,
    //                 comment: 'Ultimate, Reaching for the stars!',
    //                 author: 'Ringo Starry',
    //                 date: '2013-12-02T17:57:28.556094Z'
    //             },
    //             {
    //                 rating: 2,
    //                 comment: 'It\'s your birthday, we\'re gonna party!',
    //                 author: '25 Cent',
    //                 date: '2011-12-02T17:57:28.556094Z'
    //             }
    //         ]
    //     },
    //     {
    //         id: '1',
    //         name: 'Zucchipakoda',
    //         image: '/assets/images/zucchipakoda.png',
    //         category: 'appetizer',
    //         featured: false,
    //         label: '',
    //         price: '1.99',
    //         description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
    //         comments: [
    //             {
    //                 rating: 5,
    //                 comment: 'Imagine all the eatables, living in conFusion!',
    //                 author: 'John Lemon',
    //                 date: '2012-10-16T17:57:28.556094Z'
    //             },
    //             {
    //                 rating: 4,
    //                 comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
    //                 author: 'Paul McVites',
    //                 date: '2014-09-05T17:57:28.556094Z'
    //             },
    //             {
    //                 rating: 3,
    //                 comment: 'Eat it, just eat it!',
    //                 author: 'Michael Jaikishan',
    //                 date: '2015-02-13T17:57:28.556094Z'
    //             },
    //             {
    //                 rating: 4,
    //                 comment: 'Ultimate, Reaching for the stars!',
    //                 author: 'Ringo Starry',
    //                 date: '2013-12-02T17:57:28.556094Z'
    //             },
    //             {
    //                 rating: 2,
    //                 comment: 'It\'s your birthday, we\'re gonna party!',
    //                 author: '25 Cent',
    //                 date: '2011-12-02T17:57:28.556094Z'
    //             }
    //         ]
    //     },
    //     {
    //         id: '2',
    //         name: 'Vadonut',
    //         image: '/assets/images/vadonut.png',
    //         category: 'appetizer',
    //         featured: false,
    //         label: 'New',
    //         price: '1.99',
    //         description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
    //         comments: [
    //             {
    //                 rating: 5,
    //                 comment: 'Imagine all the eatables, living in conFusion!',
    //                 author: 'John Lemon',
    //                 date: '2012-10-16T17:57:28.556094Z'
    //             },
    //             {
    //                 rating: 4,
    //                 comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
    //                 author: 'Paul McVites',
    //                 date: '2014-09-05T17:57:28.556094Z'
    //             },
    //             {
    //                 rating: 3,
    //                 comment: 'Eat it, just eat it!',
    //                 author: 'Michael Jaikishan',
    //                 date: '2015-02-13T17:57:28.556094Z'
    //             },
    //             {
    //                 rating: 4,
    //                 comment: 'Ultimate, Reaching for the stars!',
    //                 author: 'Ringo Starry',
    //                 date: '2013-12-02T17:57:28.556094Z'
    //             },
    //             {
    //                 rating: 2,
    //                 comment: 'It\'s your birthday, we\'re gonna party!',
    //                 author: '25 Cent',
    //                 date: '2011-12-02T17:57:28.556094Z'
    //             }
    //         ]
    //     },
    //     {
    //         id: '3',
    //         name: 'ElaiCheese Cake',
    //         image: '/assets/images/elaicheesecake.png',
    //         category: 'dessert',
    //         featured: false,
    //         label: '',
    //         price: '2.99',
    //         description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
    //         comments: [
    //             {
    //                 rating: 5,
    //                 comment: 'Imagine all the eatables, living in conFusion!',
    //                 author: 'John Lemon',
    //                 date: '2012-10-16T17:57:28.556094Z'
    //             },
    //             {
    //                 rating: 4,
    //                 comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
    //                 author: 'Paul McVites',
    //                 date: '2014-09-05T17:57:28.556094Z'
    //             },
    //             {
    //                 rating: 3,
    //                 comment: 'Eat it, just eat it!',
    //                 author: 'Michael Jaikishan',
    //                 date: '2015-02-13T17:57:28.556094Z'
    //             },
    //             {
    //                 rating: 4,
    //                 comment: 'Ultimate, Reaching for the stars!',
    //                 author: 'Ringo Starry',
    //                 date: '2013-12-02T17:57:28.556094Z'
    //             },
    //             {
    //                 rating: 2,
    //                 comment: 'It\'s your birthday, we\'re gonna party!',
    //                 author: '25 Cent',
    //                 date: '2011-12-02T17:57:28.556094Z'
    //             }
    //         ]
    //     }
    // ];


  }
  getalldishes(): Observable<Dishs[]>
  {
    // return  Promise.resolve (this.dishes);
    // return new Promise(resolve=> {
    //   // Simulate server latency with 2 second delay
    //     setTimeout(() => resolve(this.dishes));
    // });
    // return of(this.dishes).pipe(delay(2000)).toPromise();
    // return of(this.dishes).pipe(delay(2000));
    return this.http.get<[Dishs]>(baseURL + 'dishes').pipe(catchError(this.processHTTPMsgService.handleError));;
  }
  getproductbyid(id :string): Observable<Dishs> | null
  {



    //  let foundbyid = this.dishes.find( prd => prd.id==pid) ;
    //  return  foundbyid?  foundbyid : null ;

    //  return Promise.resolve(this.dishes.filter((dish) => (dish.id === pid))[0]);


    // return new Promise(resolve=> {
    //   // Simulate server latency with 2 second delay
    //     setTimeout(() => resolve(this.dishes.filter((dish) => (dish.id === pid))[0]), 2000);

    // });
    return this.http.get<Dishs>(baseURL + 'dishes/' + id).pipe(catchError(this.processHTTPMsgService.handleError));;

  }
  getPrdIDs(): Observable<string[] | any>
  {
    // let prdIDs: string[]=this.dishes.map(prd=>prd.id);
    // return Promise.resolve(prdIDs)
    // return prdIDs;
    // return new Promise(resolve=> {

    //     // let prdIDs: string[]=this.dishes.map(prd=>prd.id);
    //     setTimeout(() => resolve(this.dishes.map((dish) => dish.id)), 2000);

    // });
    // return of(this.dishes.map(dish => dish.id ));
    return this. getalldishes().pipe(map(dishe => dishe.map(dish => dish.id)));


  }

  getFeaturedDish(): Observable<Dishs> {
    return this.http.get<Dishs>(baseURL + 'dishes?featured=false');
  }
}

