import { Route } from '@angular/router';

export const CartRoute: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@cart/pages/shopping-cart/shopping-cart.component').then(
        (c) => c.ShoppingCartComponent,
      ),
  },
];
