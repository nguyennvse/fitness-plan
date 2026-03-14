import { Component, inject, input } from '@angular/core';
import { ShoppingCartState } from '../../store/shopping-cart.store';

@Component({
  selector: 'app-equipment-card',
  imports: [],
  templateUrl: './equipment-card.component.html',
  styleUrl: './equipment-card.component.css',
})
export class EquipmentCardComponent {
  readonly store = inject(ShoppingCartState);
  name = input<string>();
  description = input<string>();
  imageUrl = input<string>();
  price = input<number>();
  constructor() {}
  addToCart() {
    this.store.addToCart({
      name: this.name() || '',
      price: this.price() || 0,
      quantity: 1,
      imageUrl: this.imageUrl() || '',
    });
  }
}
