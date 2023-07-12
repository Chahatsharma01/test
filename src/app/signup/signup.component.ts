import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {JsonWebTokenError, Jwt } from 'jsonwebtoken';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm! : FormGroup
  signUpData : any[]=[]

  constructor( private fb : FormBuilder){

  }

  ngOnInit(): void {
    this.signUp()
  }

  signUp(){
    this.signUpForm=this.fb.group({
      first_name:['',[Validators.required]],
      last_name:['',[Validators.required]],
      phone:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }


  submit(){
    if(this.signUpForm.valid){
      const first_name = this.signUpForm.get('first_name')?.value;
      const last_name = this.signUpForm.get('last_name')?.value
      const email = this.signUpForm.get('email')?.value
      const phone = this.signUpForm.get('phone')?.value
      const password = this.signUpForm.get('password')?.value


      localStorage.setItem('token',this.signUpForm.value.token)


    }
    this.signUpData.push(this.signUpForm.value)
    console.log(this.signUpForm.value)

  }
  generateToken(signUpData : any){
    // const key = 'token'
    // const token= Jwt.signUp(signUpData,key)
    // return token
  }



}
