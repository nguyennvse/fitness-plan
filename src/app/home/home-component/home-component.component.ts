import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ClassCardComponent } from '../../class-card/class-card.component';
import { FooterComponent } from '../../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [MatIconModule, ClassCardComponent, FooterComponent,RouterModule],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css',
})
export class HomePageComponent {
  

  classCard = [
    {
      image: 'https://themewagon.github.io/gymlife/img/classes/class-1.jpg',
      title: 'STRENGTH',
      description: 'Weightlifting',
    },
    {
      image: 'https://themewagon.github.io/gymlife/img/classes/class-2.jpg',
      title: 'Cardio',
      description: 'Indoor cycling',
    },
    {
      image: 'https://themewagon.github.io/gymlife/img/classes/class-3.jpg',
      title: 'STRENGTH',
      description: 'Kettlebell power',
    },
  ].map((card, index) => ({ index, ...card }));

  classCard2 = [
    {
      image: 'https://themewagon.github.io/gymlife/img/classes/class-4.jpg',
      title: 'Cardio',
      description: 'Indoor cycling',
    },
    {
      image: 'https://themewagon.github.io/gymlife/img/classes/class-5.jpg',
      title: 'Training',
      description: 'Boxing',
    },
  ].map((card, index) => ({ index, ...card }));

  plans = [
    {
      title: 'Class drop-in',
      price: 39,
      classes: [
        'Free riding',
        'Unlimited equipments',
        'Personal trainer',
        'Weight losing classes',
        'Month to mouth',
        'No time restriction',
      ],
    },
    {
      title: '12 Month unlimited',
      price: 99.0,
      classes: [
        'Free riding',
        'Unlimited equipments',
        'Personal trainer',
        'Weight losing classes',
        'Month to mouth',
        'No time restriction',
      ],
    },
    {
      title: '6 Month unlimited',
      price: 59.0,
      classes: [
        'Free riding',
        'Unlimited equipments',
        'Personal trainer',
        'Weight losing classes',
        'Month to mouth',
        'No time restriction',
      ],
    },
  ].map((card, index) => ({ index, ...card }));;

  constructor() {}
}
