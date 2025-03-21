import { Component } from '@angular/core';
import { FoodCardComponent } from '../food-card/food-card.component';

@Component({
  selector: 'app-foods',
  imports: [FoodCardComponent],
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.css'
})
export class FoodsComponent {
 foods =[
  {
    name:'Bap',
    image:'',
    calories:196,
    carb:39.6,
    protein:4.1,
    fat:2.3,
    serving_g: 100
  },
  {
    name:'banh my',
    image:'',
    calories:249,
    carb:52.6,
    protein:7.9,
    fat:0.8,
    serving_g: 100
  },
  {
    name:'bun',
    image: '',
    calories:249,
    carb:52.6,
    protein:7.9,
    fat:0.8,
    serving_g: 100
  },
  {
    name:'my soi',
    image: '',
    calories: 349,
    carb: 72.6,
    protein: 11,
    fat: 0.9,
    serving_g: 100
  },
  {
    name:'Khoai tay',
    image: '',
    calories: 75,
    carb: 20.9,
    protein: 2,
    fat: 0.1,
    serving_g: 100
  }
 ].map((f,index) => ({...f,index}))
}
