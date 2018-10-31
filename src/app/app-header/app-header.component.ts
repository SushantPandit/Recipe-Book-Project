import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  visiablity: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  recipiDisplay(){
    this.visiablity= true;
  }
  shopping(){
    this.visiablity= false;
  }


}
