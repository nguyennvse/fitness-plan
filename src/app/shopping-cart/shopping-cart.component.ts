import { Component, computed, inject, Signal, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ShoppingCartState } from '../store/shopping-cart.store';

@Component({
  selector: 'app-shopping-cart',
  imports: [MatIconModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  readonly store = inject(ShoppingCartState);
  
  myTempCart = signal([
    {name:'day khang luc', quantity:1, price:100,imageUrl:'./ao.webp'},
    {name:'ta don', quantity:1, price:200,imageUrl:'./ao.webp'},
    {name:'ao',quantity:1,price:300,imageUrl:'./ao.webp'}
  ].map((i,index) => ({...i,index})))

  totalPrice: Signal<number> = computed(() => this.myTempCart().map(item => item.price * item.quantity).reduce((accumulator,currentValue) => accumulator+currentValue,0));
  totalItem= signal<number>(0);
  shippingPrice = signal<number>(5)


}
