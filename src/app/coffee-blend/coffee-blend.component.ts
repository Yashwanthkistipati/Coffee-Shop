import { Component } from '@angular/core';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-coffee-blend',
  templateUrl: './coffee-blend.component.html',
  styleUrls: ['./coffee-blend.component.css']
})
export class CoffeeBlendComponent {
  selectedIngredients: Ingredient[] = [];

  addIngredient(ingredient: Ingredient) {
    const existingIngredient = this.selectedIngredients.find(i => i.name === ingredient.name);
    if (existingIngredient) {
      existingIngredient.quantity += ingredient.quantity;
    } else {
      this.selectedIngredients.push(ingredient);
    }
  }
}
