import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css']
})
export class ShoopingListComponent implements OnInit {
  data: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  addRecord(name, amount) {
    this.data.push({
      Iname: name,
      Iamount: amount
    });
    console.log(this.data);
  }
}
