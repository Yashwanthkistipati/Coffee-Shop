import { Component } from '@angular/core';
import { Ingredient } from './ingredient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '-𝔹𝕣𝕖𝕨𝕖𝕕 𝕛𝕦𝕤𝕥 𝕥𝕙𝕖 𝕨𝕒𝕪 𝕪𝕠𝕦 𝕝𝕚𝕜𝕖 𝕚𝕥.';
  selectedIngredients: { name: string, quantity: number }[] = [];

  onIngredientSelected(ingredient: { name: string, quantity: number }) {
    this.selectedIngredients.push(ingredient);
  }

  onBlendRequested() {
    console.log('Blend Requested!');
  }

  removeIngredient(index: number) {
    this.selectedIngredients.splice(index, 1); // Remove from selected ingredients list
  }
}
