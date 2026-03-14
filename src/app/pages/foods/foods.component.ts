import { Component, signal } from '@angular/core';
import { FoodCardComponent } from '../food-card/food-card.component';
import { FoodApiService } from '../../core/services/food/Food.service';
import { FoodDtoModel, FoodViewModel } from '../../model/Food.model';
import { MatIconModule } from '@angular/material/icon';
import { SliderComponent } from '../../common/components/slider/slider.component';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-foods',
  imports: [FoodCardComponent, MatIconModule, SliderComponent],
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.css',
  providers: [FoodApiService],
})
export class FoodsComponent {
  constructor(
    private foodApiService: FoodApiService,
    private fb: FormBuilder,
  ) {}
  originalFood: FoodViewModel[] = [];
  foodFilterGroup!: FormGroup;
  foods = signal<FoodViewModel[]>([]);
  filters = [
    {
      title: 'Type',
      listCheckbox: ['Breakfast', 'Lunch', 'Dinner', 'Snack'],
    },
    {
      title: 'Tags',
      listCheckbox: ['Eatclean', 'High protein', 'Low fat', 'Low carb'],
    },
    {
      title: 'Calories',
      isSlider: true,
    },
    {
      title: 'Protein',
      isSlider: true,
    },
  ].map((f, i) => ({ ...f, index: i }));
  ngOnInit(): void {
    this.foodFilterGroup = this.fb.group({
      type: [''],
      tag: [''],
      calories: [0],
      protein: [0],
    });
    this.foodApiService.getMockFood().subscribe((foodList) => {
      this.originalFood = foodList;

      this.foods.set(this.originalFood.slice(0, 9));
    });
  }
}
