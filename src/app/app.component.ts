import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    @ViewChild('f',{static: false}) signForm:NgForm;
    defaultQuestion = 'pet';
    answer = ' ';

    constructor(){}

    ngOnInit(): void {
     
    }

    user = {
      username:'',
      email: '',
      secret:'',
      questionAnswer: ''
    };
    submitted = false;
  
  suggestUserName() {
    const suggestedName = 'Daniel';
    this.signForm.form.patchValue({
      userData:{
        username:suggestedName
      }
    
    })
  }


  

  default(){
    this.signForm.setValue({
      userData:{
        username:'Simce',
        email:'Daniel@gmail.com'
      }, 
      secret:'pet',
      questionAnswer:' Lionel Messi'
    });
  }

  onSubmit(){
    this.submitted = true;

    this.user.username = this.signForm.value.userData.username;
    this.user.email= this.signForm.value.userData.email;
    this.user.secret = this.signForm.value.secret;
    this.user.questionAnswer = this.signForm.value.questionAnswer;
    this.signForm.reset();

  }

}
