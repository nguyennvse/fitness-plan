import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  Route,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { AuthenticationStore } from '../../../authentication/store/authentication.store';

@Component({
  selector: 'app-personal-information',
  imports: [RouterOutlet, MatIconModule, RouterModule, RouterLink],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  // standalone: true,
})
export class PersonalInformationComponent {
  authenStore = inject(AuthenticationStore);
  constructor(private router: Router) {}
  sideMenu = [
    {
      title: 'Profile',
      path: ['/user/profile'],
      icon: '',
    },
    {
      title: 'Subscription',
      path: ['/user/subscription'],
      icon: '',
    },
    {
      title: 'Book Personal Trainer',
      path: ['/user/book_pt'],
      icon: '',
    },
    {
      title: 'Progression',
      path: ['/user/progression'],
      icon: '',
    },
    {
      title: 'History',
      path: ['/user/history'],
      icon: '',
    },
    {
      title: 'Setting',
      path: ['/user/setting'],
      icon: '',
    },
  ];
}
