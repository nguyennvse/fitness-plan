import { Routes } from '@angular/router';
import { HomePageComponent } from './core/layouts/home-component/home-component.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  {
    path: 'foods',
    loadComponent: () =>
      import('./pages/foods/foods.component').then((m) => m.FoodsComponent),
  },
  {
    path: 'classes',
    loadComponent: () =>
      import('./pages/classes/classes.component').then(
        (m) => m.ClassesComponent,
      ),
  },
  {
    path: 'equipments',
    loadComponent: () =>
      import('./pages/equipments/equipments.component').then(
        (m) => m.EquipmentsComponent,
      ),
  },
  {
    path: 'shopping_cart',
    loadComponent: () =>
      import('./pages/shopping-cart/shopping-cart.component').then(
        (m) => m.ShoppingCartComponent,
      ),
  },
  {
    path: 'sign_up',
    loadComponent: () =>
      import('./pages/sign-up/sign-up.component').then(
        (m) => m.SignUpComponent,
      ),
  },
  // {
  //   path: 'forget_password',
  //   loadComponent: () =>
  //     import('./pages/forget-password/forget-password.component').then(
  //       (m) => m.ForgetPasswordComponent,
  //     ),
  // },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'email_verify',
    loadComponent: () =>
      import('./pages/email-verify/email-verify.component').then(
        (m) => m.EmailVerifyComponent,
      ),
  },
  { path: '**', component: HomePageComponent },
];
