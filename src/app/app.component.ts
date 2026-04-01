import { Component, inject, OnInit } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { ShoppingCartState } from './features/cart/store/shopping-cart.store';
import { MatIconModule } from '@angular/material/icon';
import { NavBarComponent } from '@core/layouts/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule, RouterModule, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'your-fitness-plan';
  readonly store = inject(ShoppingCartState);
  constructor(private router: Router) {}

  goToLogin(): void {
    this.router.navigate(['/authentication']);
  }

  goToPersonal(): void {
    this.router.navigate(['/user/profile']);
  }

  logoClick(): void {
    this.router.navigate(['/home']);
  }
}
