import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthenticationService } from './core/auth/authentication.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatIconModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AuthenticationService]
})
export class AppComponent {
  title = 'your-fitness-plan';
  navigationMenus = [
    {name:'Home',url:'/home'},
    {name:'Foods',url:'/foods'},
    {name:'Classes',url:'/classes'},
    {name:'Equipments',url:'/equipments'},
    {name:'Our Team',url:'/ourteam'},
  ].map((menu, index) => ({ index, ...menu }));

  constructor(private authenticationService:AuthenticationService, private router: Router){
    
  }

  goToLogin(){
      this.router.navigate( this.authenticationService.isAuthenticated() ? ['/home'] : ['/login'])
  }
}
