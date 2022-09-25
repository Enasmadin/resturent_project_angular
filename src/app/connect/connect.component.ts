import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Connect, ContactType ,} from  'shared/connect';
import { FeedbackService } from 'src/SERVICES/feedback.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        display: 'none',
      })),
      state('closed', style({
        display: 'block',
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class ConnectComponent implements OnInit {
  feedbackForm: FormGroup;
  feedbackrs: Connect;
  contactType = ContactType;
  model :Connect;
  isOpen = true;


  constructor(private fb: FormBuilder,private feadbackservice:FeedbackService) {
    this.createForm();
   }

  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      telnum: ['', Validators.required ],
      email: ['', Validators.required ,Validators.email],
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }
  onSubmit() {
    // this.feedback = this.feedbackForm.value;
   this. model =
    {
      firstname: this.feedbackForm.value.firstname,
      lastname: this.feedbackForm.value.lastname,
      telnum: this.feedbackForm.value.telnum,
      email: this.feedbackForm.value.email,
      agree: this.feedbackForm.value.agree,
      contacttype: this.feedbackForm.value.contacttype,
      message: this.feedbackForm.value.message,
      push: undefined
    }
    this.feadbackservice.addHero(this.model).subscribe(model => this.feedbackrs.push(model));
    // console.log(model.firstname);
    // console.log(model.lastname);
    // console.log(model.email);







    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });

  }

  ngOnInit(): void {
  }


  toggle() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }


}

