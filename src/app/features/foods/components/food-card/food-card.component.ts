import { Component, input } from '@angular/core';
import { FoodViewModel } from '../../model/Food.model';

@Component({
  selector: 'app-food-card',
  imports: [],
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.css',
})
export class FoodCardComponent {
  imageUrl = input<string>('bap.jpeg');
  foodInfo = input<FoodViewModel>();
  constructor() {
    console.log(this.imageUrl());
    
  }
  
  viewDetail(): void {

  }

  addFoodToDiary(): void {

  }
}
