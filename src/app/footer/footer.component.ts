import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

@ViewChild("toolbar") toolbar: MatToolbar;
@ViewChild("main") main: ElementRef;
@ViewChild("footer") footer: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

}
