import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent {
  ingredients: string[] = ['Coffee Beans', 'Sugar', 'Vanilla', 'Chocolate', 'Milk'];
  selectedIngredients: { name: string, quantity: number }[] = [];
  selectedIngredient: string = '';
  quantity: number = 0;

  @Output() ingredientSelected = new EventEmitter<{ name: string, quantity: number }>();
  @Output() blendRequested = new EventEmitter<void>(); 

  selectIngredient(ingredient: string) {
    this.selectedIngredient = ingredient;
  }

  confirmIngredient() {
    if (this.selectedIngredient && this.quantity > 0) {
      const ingredientData = { name: this.selectedIngredient, quantity: this.quantity };
      this.selectedIngredients.push(ingredientData);
      this.ingredientSelected.emit(ingredientData);
      this.selectedIngredient = '';
      this.quantity = 0;
    }
  }


  blendNow() {
    if (this.selectedIngredients.length > 0) {
      this.blendRequested.emit(); 
    }
  }
}
