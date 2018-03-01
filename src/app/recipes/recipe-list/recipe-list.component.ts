import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test.', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/12/20/0/FNM_010113-Smores-Cake-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371611980872.jpeg'),
    new Recipe('A Test Recipe 2', 'This is something else.', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/12/20/0/FNM_010113-Smores-Cake-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371611980872.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
