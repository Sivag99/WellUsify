import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      "userName": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "passWord": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),      
    })
  }

  get username(){ return this.loginForm.get("userName")}
  get password(){ return this.loginForm.get("passWord") }

  logiData(){
    console.log(this.loginForm.value);
    if(this.loginForm.valid){
      alert(`Welcome ${this.loginForm.value.userName}`);
      this.router.navigate(['/locations']); 
      this.loginForm.reset();
    }
  }
}
