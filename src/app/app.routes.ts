import { Routes } from '@angular/router';
import { HomePageComponent } from './core/layouts/home-component/home-component.component';
import { PersonalSubscriptionComponent } from './pages/personal-subscription/personal-subscription.component';

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
  {
    path: 'personal_info',
    loadComponent: () =>
      import('./pages/personal-information/personal-information.component').then(
        (m) => m.PersonalInformationComponent,
      ),
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/personal-profile/personal-profile.component').then(
            (m) => m.PersonalProfileComponent,
          ),
      },
      {
        path: 'subscription',
        // loadComponent: () =>
        //   import('./pages/personal-subscription/personal-subscription.component').then(
        //     (m) => m.PersonalSubscriptionComponent,
        //   ),
        component: PersonalSubscriptionComponent,
      },
      {
        path: 'progression',
        loadComponent: () =>
          import('./pages/personal-progression/personal-progression.component').then(
            (m) => m.PersonalProgressionComponent,
          ),
      },
      {
        path: 'history',
        loadComponent: () =>
          import('./pages/personal-history/personal-history.component').then(
            (m) => m.PersonalHistoryComponent,
          ),
      },
      {
        path: 'setting',
        loadComponent: () =>
          import('./pages/personal-setting/personal-setting.component').then(
            (m) => m.PersonalSettingComponent,
          ),
      },
    ],
  },
  { path: '**', component: HomePageComponent },
];
