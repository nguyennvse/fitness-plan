import { Component, input } from '@angular/core';

@Component({
  selector: 'app-food-card',
  imports: [],
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.css'
})
export class FoodCardComponent {
  name = input<string>();
  calories = input<number>();
  imageUrl = input<string>('bap.jpeg');
  fat = input<number>();
  carb = input<number>();
  protein = input<number>();
  constructor(){
    console.log(this.imageUrl())
  }
}
