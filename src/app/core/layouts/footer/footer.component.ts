import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  contacts = [
    {icon:'location_on',des:'333 Middle Winchendon Rd, Rindge,NH 03461'},
    {icon:'smartphone',des:'125-711-811 125-668-886'},
    {icon: 'mail', des:'Support.gymcenter@gmail.com'}
  ].map((item,index) => ({...item,index}))
  constructor(){}
}
