import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/Recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe!: Recipe;

  ngOnInit(): void {
    // this.recipe = new Recipe();
  }
}
