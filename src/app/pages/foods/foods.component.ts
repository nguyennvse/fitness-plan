import { Component, signal } from '@angular/core';
import { FoodCardComponent } from '../food-card/food-card.component';
import { FoodApiService } from '../../core/services/food/Food.service';
import { FoodDtoModel, FoodViewModel } from '../../model/Food.model';
import { MatIconModule } from '@angular/material/icon';
import { SliderComponent } from '../../common/components/slider/slider.component';
import {
  FormBuilder,
  FormGroup,
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormConfigType } from '../../model/FormConfig.model';
import { CheckboxComponent } from '../../common/components/checkbox/checkbox.component';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-foods',
  imports: [
    FoodCardComponent,
    MatIconModule,
    SliderComponent,
    CheckboxComponent,
    ɵInternalFormsSharedModule,
    ReactiveFormsModule,
  ],
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
  filters!: FormConfigType[];
  unsubscribeSubject = new Subject<void>();
  pageCount: number = 0;
  ngOnInit(): void {
    this.foodFilterGroup = this.fb.group({
      type: [''],
      tag: [''],
      calories: [0],
      protein: [0],
    });
    this.filters = [
      {
        title: 'Meal Type',
        control: 'type',
        class: '',
        type: 'checkbox',
        checkboxOptions: ['Breakfast', 'Lunch', 'Dinner', 'Snack'],
      },
      {
        title: 'Tags',
        control: 'tag',
        class: '',
        type: 'checkbox',
        checkboxOptions: ['Eatclean', 'High protein', 'Low fat', 'Low carb'],
      },
      {
        title: 'Calories',
        control: 'calories',
        class: '',
        type: 'slider',
        sliderRange: {
          min: 0,
          max: 1000,
        },
      },
      {
        title: 'Protein',
        control: 'protein',
        class: '',
        type: 'slider',
        sliderRange: {
          min: 0,
          max: 50,
        },
      },
    ];

    this.foodApiService.getMockFood().subscribe((foodList) => {
      this.originalFood = foodList;
      this.foods.set(this.originalFood.slice(0, 9));
    });

    this.foodFilterGroup
      .get('type')
      ?.valueChanges.pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((value: string[]) => {
        if (value.length > 0) {
          const cloneFood = [...this.originalFood];
          const filterList = cloneFood.filter((food) =>
            value.some((val) => food.meal.includes(val.toLowerCase())),
          );
          this.foods.set(filterList);
        } else {
          this.foods.set(this.originalFood);
        }
      });

    this.foodFilterGroup
      .get('tag')
      ?.valueChanges.pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((value) => {
        if (value.length > 0) {
          const cloneFood = [...this.originalFood];
          const filterList = cloneFood.filter((food) =>
            value.some((val: string) => food.tags.includes(val.toLowerCase())),
          );
          this.foods.set(filterList);
        } else {
          this.foods.set(this.originalFood);
        }
      });

    this.foodFilterGroup
      .get('calories')
      ?.valueChanges.pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((value) => {
        if (value > 0) {
          const cloneFood = [...this.originalFood];
          const filterFood = cloneFood.filter((food) => food.calories > value);
          this.foods.set(filterFood);
        } else {
          this.foods.set(this.originalFood);
        }
      });

    this.foodFilterGroup
      .get('protein')
      ?.valueChanges.pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((value) => {
        if (value > 0) {
          const cloneFood = [...this.originalFood];
          const filterFood = cloneFood.filter((food) => food.protein > value);
          this.foods.set(filterFood);
        } else {
          this.foods.set(this.originalFood);
        }
      });
  }

  onSliderChange(event: Event) {
    console.log('event', event);
    this.applyFilters();
  }

  applyFilters() {
    console.log(this.foodFilterGroup.value);
  }
}
