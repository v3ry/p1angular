import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/Recipe';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipeList!: Recipe[];
  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {
    this.recipeService
      .getRecipeList()
      .subscribe((recipeList) => (this.recipeList = recipeList));

    console.table(this.recipeList);
  }
}
