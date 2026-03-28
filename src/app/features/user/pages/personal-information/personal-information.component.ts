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
      path: ['/personal_info/profile'],
      icon: '',
    },
    {
      title: 'Subscription',
      path: ['/personal_info/subscription'],
      icon: '',
    },
    {
      title: 'Book Personal Trainer',
      path: ['/personal_info/book_pt'],
      icon: '',
    },
    {
      title: 'Progression',
      path: ['/personal_info/progression'],
      icon: '',
    },
    {
      title: 'History',
      path: ['/personal_info/history'],
      icon: '',
    },
    {
      title: 'Setting',
      path: ['/personal_info/setting'],
      icon: '',
    },
  ];
}
