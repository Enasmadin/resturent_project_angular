import {  inject, InjectionToken, Input, ViewChild } from '@angular/core';
import { Dish } from 'shared/dish';
import { DishesService } from 'src/SERVICES/dishes.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
// import {  Inject,Optional, } from '@angular/core';

import {  switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Dishs } from 'shared/dishs';
import { Iuser } from 'shared/iuser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Feedback } from 'shared/feedback';
// import { baseURL } from 'shared/baseurl';
import { Component, OnInit, Inject } from '@angular/core';

import { visibility,expand } from 'shared/app.animation';



// export const BaseURL = new InjectionToken<string>('BaseURL');

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css'],
  animations: [
   visibility(),
   expand()
  ]

})

export class DishdetailComponent implements OnInit {


  //  private baseURL: string;
  prddet!: Dishs | null;
  errMess: string;

 feedbackForm: FormGroup;
 dishIds: string[]=[];
  feedback: Feedback;
  visibility = 'shown';


  prev: string;
  next: string;
  @ViewChild('fform') feedbackFormDirective: { resetForm: () => void; };



  constructor( private staticPrdService :DishesService ,    private location :Location , private router:Router, private fb: FormBuilder, private activateroute:ActivatedRoute) {




    //  this.baseURL = baseURL ? baseURL : "";
    this.createForm();
   }

  ngOnInit( ): void
   {


    this.staticPrdService.getPrdIDs().subscribe(dishIds => this.dishIds = dishIds,errmess => this.errMess = <any>errmess);;
    this.activateroute.params.pipe(switchMap((params: Params) => {this.visibility = 'hidden'; return this.staticPrdService.getproductbyid(params['id'])}) )
    .subscribe(dish => { this.prddet = dish; this.setPrevNext(dish.id);});
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      Name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      comment : ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      rate : ['', [Validators.required, Validators.minLength(2), Validators.maxLength(5)] ],

    });
    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();

  }
  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {

        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }


  goback ()
   {
    this. location.back();
   }


  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }
  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      Name: '',
      comment: '',
      rate:'',

    });
    this.feedbackFormDirective.resetForm();
  }
  formErrors :any= {
    'Name': '',
    'comment': '',
    'rate' : '',

  };

  validationMessages :any= {
    'Name': {
      'required':      ' Name is required.',
      'minlength':     ' Name must be at least 2 characters long.',
      'maxlength':     'Name cannot be more than 25 characters long.'
    },
    'comment': {
      'required':      'comment  is required.',
      'minlength':     'comment  must be at least 2 characters long.',
      'maxlength':     'comment cannot be more than 25 characters long.'
    },
    'rate': {
      'required':      'rate  is required.',
      'minlength':     'rate  must be at least 2 characters long.',
      'maxlength':     'rate cannot be more than 25 characters long.'
    },

  };
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }



}
