import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-serviceprovide',
  templateUrl: './serviceprovide.component.html',
  styleUrls: ['./serviceprovide.component.css']
})
export class ServiceprovideComponent implements OnInit {

  constructor() { }

  signup = new FormGroup({
    email: new FormControl(null, Validators.required),
    image: new FormControl(null, Validators.required)
    });
  ngOnInit(): void {
  }

}
