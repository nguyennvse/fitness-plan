import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  Signal,
  signal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ShoppingCartState } from '../../store/shopping-cart.store';

@Component({
  selector: 'app-shopping-cart',
  imports: [MatIconModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartComponent {
  readonly store = inject(ShoppingCartState);
  totalItem = signal<number>(0);
  shippingPrice = signal<number>(5);
}
