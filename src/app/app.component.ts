import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { AuthenticationService } from './core/services/auth/authentication.service';
import { FoodApiService } from './core/services/food/Food.service';
import { ShoppingCartState } from './store/shopping-cart.store';
import { AuthenticationStore } from './store/authentication.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule, RouterModule, RouterLink],
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
    { name: 'Our Team', url: '/personal_info' },
  ];
  authenticationStore = inject(AuthenticationStore);
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private mockapiService: FoodApiService,
  ) {}

  ngOnInit(): void {
    this.mockapiService.getMockFood().subscribe(console.log);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  goToPersonal(): void {
    this.router.navigate(['/personal_info']);
  }

  logoClick(): void {
    this.router.navigate(['/home']);
  }
}
