import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe (
    'Test Recipe', 
    'This is a test',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ricotta-goat-cheese-stuffed-zucchini-recipe-1558036677.jpg?resize=*:2166' ),
    new Recipe ('poo', 'this is poo','./local-images/poopemoji.jpg')
  
  ];

  constructor() { }

  ngOnInit() {
  }

}
