import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipeItems: any = [{ name: 'biryani', img: 'http://www.jolpani.com/wp-content/uploads/2018/02/biryani.png', verity: 'test:testy', origin: 'India' }, { name: 'pasta', img: 'https://i0.wp.com/blessedbeyondcrazy.com/wp-content/uploads/2017/01/49201061_s.jpg?fit=450%2C300&ssl=1', verity: '5', origin: 'France' }, { name: 'Pizza', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuaWFrbqkT_zoh-OK0OIdoaTGo8uOxto_n_8EqaJPsJwzULR34', verity: 'test:testy', origin: 'France' }];
  itemitems: string;
  value:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  onclickofitems(item) {
    this.itemitems = item;
  }

  showDisplayDiv() {
    this.value=true;
  }
}
