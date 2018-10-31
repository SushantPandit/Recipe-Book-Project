import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.css']
})
export class RecipeItemsComponent implements OnInit {
  @Input() abcd:string;
  constructor() { }

  ngOnInit() {
  }

}
