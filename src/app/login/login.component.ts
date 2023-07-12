import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Jwt} from 'jsonwebtoken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm! : FormGroup
  loginData : any[]=[]
  constructor(private fb: FormBuilder) {}



  ngOnInit(): void {
    this.login();
  }

  login() {
    this.loginForm=this.fb.group({
      email : ['',[Validators.required]],
      password : ['',[Validators.required]]

    })

  }


  submit(){
    if(this.loginForm.valid){
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value


      localStorage.setItem('token',this.loginForm.value.token)


    }
    else{
    this.loginData.push(this.loginForm.value)
    console.log(this.loginForm.value)
    }
  }


  generateToken(loginData : any){
    // const key = 'token'
    // const token= Jwt.login(loginData,key)
    // return token
  }
}
