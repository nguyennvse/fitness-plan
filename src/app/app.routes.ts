import { Routes } from '@angular/router';
import { HomePageComponent } from './core/layouts/home-component/home-component.component';
import { PersonalSubscriptionComponent } from './features/user/pages/personal-subscription/personal-subscription.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  // {
  //   path: 'foods',
  //   loadComponent: () =>
  //     import('./features/foods/pages/foods/foods.component').then(
  //       (m) => m.FoodsComponent,
  //     ),
  // },
  {
    path: 'foods',
    loadChildren: () => import('@foods/foods.route').then((m) => m.FoodsRoute),
  },
  {
    path: 'classes',
    loadComponent: () =>
      import('./core/layouts/classes/classes.component').then(
        (m) => m.ClassesComponent,
      ),
  },
  {
    path: 'equipments',
    loadComponent: () =>
      import('./features/workout/pages/equipments/equipments.component').then(
        (m) => m.EquipmentsComponent,
      ),
  },
  {
    path: 'shopping_cart',
    loadComponent: () =>
      import('./features/cart/pages/shopping-cart/shopping-cart.component').then(
        (m) => m.ShoppingCartComponent,
      ),
  },
  {
    path: 'sign_up',
    loadComponent: () =>
      import('./features/authentication/pages/sign-up/sign-up.component').then(
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
      import('./features/authentication/pages/login/login.component').then(
        (m) => m.LoginComponent,
      ),
  },
  {
    path: 'email_verify',
    loadComponent: () =>
      import('./features/authentication/pages/email-verify/email-verify.component').then(
        (m) => m.EmailVerifyComponent,
      ),
  },
  {
    path: 'personal_info',
    loadComponent: () =>
      import('./features/user/pages/personal-information/personal-information.component').then(
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
          import('./features/user/pages/personal-profile/personal-profile.component').then(
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
          import('./features/user/pages/personal-progression/personal-progression.component').then(
            (m) => m.PersonalProgressionComponent,
          ),
      },
      {
        path: 'history',
        loadComponent: () =>
          import('./features/user/pages/personal-history/personal-history.component').then(
            (m) => m.PersonalHistoryComponent,
          ),
      },
      {
        path: 'setting',
        loadComponent: () =>
          import('./features/user/pages/personal-setting/personal-setting.component').then(
            (m) => m.PersonalSettingComponent,
          ),
      },
    ],
  },
  { path: '**', component: HomePageComponent },
];
