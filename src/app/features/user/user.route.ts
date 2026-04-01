import { Route } from '@angular/router';

export const UserRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@user/pages/personal-information/personal-information.component').then(
        (c) => c.PersonalInformationComponent,
      ),
    children: [
      {
        path: 'profile',
        loadComponent: () =>
          import('@user/pages/personal-profile/personal-profile.component').then(
            (c) => c.PersonalProfileComponent,
          ),
      },
      {
        path: 'subscription',
        loadComponent: () =>
          import('@user/pages/personal-subscription/personal-subscription.component').then(
            (c) => c.PersonalSubscriptionComponent,
          ),
      },
      {
        path: 'progression',
        loadComponent: () =>
          import('@user/pages/personal-progression/personal-progression.component').then(
            (c) => c.PersonalProgressionComponent,
          ),
      },
      {
        path: 'history',
        loadComponent: () =>
          import('@user/pages/personal-history/personal-history.component').then(
            (c) => c.PersonalHistoryComponent,
          ),
      },
      {
        path: 'setting',
        loadComponent: () =>
          import('@user/pages/personal-setting/personal-setting.component').then(
            (c) => c.PersonalSettingComponent,
          ),
      },
    ],
  },

  //   {
  //     path: 'subscription',
  //     loadComponent: () =>
  //       import('@user/pages/personal-subscription/personal-subscription.component').then(
  //         (c) => c.PersonalSubscriptionComponent,
  //       ),
  //   },
  //   {
  //     path: 'progression',
  //     loadComponent: () =>
  //       import('@user/pages/personal-progression/personal-progression.component').then(
  //         (c) => c.PersonalProgressionComponent,
  //       ),
  //   },
  //   {
  //     path: 'history',
  //     loadComponent: () =>
  //       import('@user/pages/personal-history/personal-history.component').then(
  //         (c) => c.PersonalHistoryComponent,
  //       ),
  //   },
  //   {
  //     path: 'setting',
  //     loadComponent: () =>
  //       import('@user/pages/personal-setting/personal-setting.component').then(
  //         (c) => c.PersonalSettingComponent,
  //       ),
  //   },
];
