import { Routes } from '@angular/router';
import { HomePageComponent } from './core/layouts/home-component/home-component.component';
import { PersonalSubscriptionComponent } from './features/user/pages/personal-subscription/personal-subscription.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  {
    path: 'foods',
    loadChildren: () => import('@foods/foods.route').then((m) => m.FoodsRoute),
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('@authentication/authentication.route').then(
        (m) => m.AuthenticationRoute,
      ),
  },
  {
    path: 'workout',
    loadChildren: () =>
      import('@workout/workout.route').then((m) => m.WorkoutRoute),
  },
  {
    path: 'classes',
    loadComponent: () =>
      import('./core/layouts/classes/classes.component').then(
        (m) => m.ClassesComponent,
      ),
  },
  {
    path: 'cart',
    loadChildren: () => import('@cart/cart.route').then((r) => r.CartRoute),
  },
  {
    path: 'user',
    loadChildren: () => import('@user/user.route').then((r) => r.UserRoutes),
  },
  { path: '**', component: HomePageComponent },
];
