import { Route } from '@angular/router';

export const FoodsRoute: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@foods/pages/foods/foods.component').then(
        (m) => m.FoodsComponent,
      ),
  },
];
