import { Component, input } from '@angular/core';

@Component({
  selector: 'app-class-card',
  imports: [],
  templateUrl: './class-card.component.html',
  styleUrl: './class-card.component.css'
})
export class ClassCardComponent {
  imageSrc = input<string>();
  title = input<string>();
  description = input<string>();
  constructor(){

  }
}
