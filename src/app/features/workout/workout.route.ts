import { Route } from '@angular/router';

export const WorkoutRoute: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@workout/pages/equipments/equipments.component').then(
        (c) => c.EquipmentsComponent,
      ),
  },
  {
    path: 'exercise',
    loadComponent: () =>
      import('@workout/pages/exercises/exercises.component').then(
        (c) => c.ExercisesComponent,
      ),
  },
];
