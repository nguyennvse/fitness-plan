import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthenticationStore } from '@authentication/store/authentication.store';
import { ShoppingCartState } from '@cart/store/shopping-cart.store';

@Component({
  selector: 'app-nav-bar',
  imports: [MatIconModule, RouterModule, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  readonly store = inject(ShoppingCartState);
  isShowMenu = signal(false);
  navigationMenus = [
    { name: 'Home', url: '/home' },
    { name: 'Foods', url: '/foods' },
    { name: 'Classes', url: '/classes' },
    { name: 'Equipments', url: '/workout' },
    { name: 'Our Team', url: '/user/profile' },
  ];
  authenticationStore = inject(AuthenticationStore);
  constructor(private router: Router) {}

  ngOnInit(): void {
    const media = window.matchMedia('(min-width: 768px)');
    media.addEventListener('change', (e) => {
      if (e.matches) {
        this.isShowMenu.set(false);
      }
    });
  }

  goToLogin(): void {
    this.router.navigate(['/authentication']);
  }

  goToPersonal(): void {
    this.router.navigate(['/user/profile']);
  }

  logoClick(): void {
    this.router.navigate(['/home']);
  }

  toggleMenu(): void {
    this.isShowMenu.update((s) => !s);
  }
}
