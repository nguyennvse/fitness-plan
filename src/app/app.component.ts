import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatIconModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
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
}
