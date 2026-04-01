import { Route } from '@angular/router';

export const AuthenticationRoute: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@authentication/pages/login/login.component').then(
        (c) => c.LoginComponent,
      ),
  },
  {
    path: 'sign-up',
    loadComponent: () =>
      import('@authentication/pages/sign-up/sign-up.component').then(
        (c) => c.SignUpComponent,
      ),
  },
  {
    path: 'sign-up',
    loadComponent: () =>
      import('@authentication/pages/sign-up/sign-up.component').then(
        (c) => c.SignUpComponent,
      ),
  },
];
