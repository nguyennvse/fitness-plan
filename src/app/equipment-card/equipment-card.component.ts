import { Component, input } from '@angular/core';

@Component({
  selector: 'app-equipment-card',
  imports: [],
  templateUrl: './equipment-card.component.html',
  styleUrl: './equipment-card.component.css'
})
export class EquipmentCardComponent {

  name = input<string>()
  description = input<string>();
  imageUrl = input<string>();
  price = input<number>();
  constructor(){}
  addToCart(){
    alert('Add to cart')
  }
}
