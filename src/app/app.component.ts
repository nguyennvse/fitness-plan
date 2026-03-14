import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthenticationService } from './core/services/auth/authentication.service';
import { FoodApiService } from './core/services/food/Food.service';
import { ShoppingCartState } from './store/shopping-cart.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AuthenticationService, FoodApiService],
})
export class AppComponent implements OnInit {
  title = 'your-fitness-plan';
  readonly store = inject(ShoppingCartState);
  navigationMenus = [
    { name: 'Home', url: '/home' },
    { name: 'Foods', url: '/foods' },
    { name: 'Classes', url: '/classes' },
    { name: 'Equipments', url: '/equipments' },
    { name: 'Our Team', url: '/ourteam' },
  ].map((menu, index) => ({ index, ...menu }));

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private mockapiService: FoodApiService,
  ) {}

  ngOnInit(): void {
    this.mockapiService.getMockFood().subscribe(console.log);
  }

  goToLogin(): void {
    this.router.navigate(
      this.authenticationService.isAuthenticated() ? ['/home'] : ['/login'],
    );
  }

  logoClick(): void {
    this.router.navigate(['/home']);
  }
}
