import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  
  constructor(private router: Router, private formBuilder: FormBuilder, private fileInput: ElementRef) { }
  
  registerForm:any;
  websiteList: any = ['ItSolutionStuff.com', 'HDTuto.com', 'Nicesnippets.com']
  
  
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "firstName": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "lastName": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "email": new FormControl(null,[Validators.required,Validators.email]),
      "mobilNumber": new FormControl(null,[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      "categary": new FormControl('',[Validators.required]),
      "subject": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "description" : new FormControl('',[Validators.required, Validators.maxLength(400), Validators.minLength(5)]),
      "fileAttr": new FormControl('',[Validators.required]),
      "check": new FormControl('',[Validators.required])
    })
  }  
  
  get firstname(){ return this.registerForm.get("firstName")}
  get lastname(){ return this.registerForm.get("lastName") }
  get emailid(){ return this.registerForm.get("email") }
  get mobilnumber(){ return this.registerForm.get("mobilNumber") }
  get categary1(){  return this.registerForm.get("categary")}
  get subject(){ return this.registerForm.get("subject") }
  get fileAttred(){ return this.registerForm.get("fileAttr") }
  get messaged1(){ return this.registerForm.get("description").markAsTouched() }
  get checked(){ return this.registerForm.get("check") }
  
  
  

  submitData(){
    console.log(this.registerForm.value);
    if(this.registerForm.valid){
      alert(`Thank You ${this.registerForm.value.firstName}`);
      this.router.navigate(['/login']); 
      this.registerForm.reset();
    }
  }  
  
}
