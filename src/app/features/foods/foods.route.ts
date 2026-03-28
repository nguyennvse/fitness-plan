import { Route } from '@angular/router';

export const FoodsRoute: Route[] = [
  {
    path: 'foods',
    loadComponent: () =>
      import('@foods/pages/foods/foods.component').then(
        (m) => m.FoodsComponent,
      ),
  },
];
