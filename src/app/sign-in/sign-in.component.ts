import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(){

  }
  class_name=""
  fn_in=()=>{
    this.class_name="right-panel-active"
    
    
  }
  fn_up=()=>{
    this.class_name=""
  }
  email_in:string=""
  password_in:string=""
  email_up:string=""
  password_up:string=""
  name_up:string=""
  onSubmit_up=()=>{
    console.log(this.email_up,this.name_up);
    
  }
}
