import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  FormBuilder,
  FormGroup,
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { CheckboxComponent } from '@shared/components/checkbox/checkbox.component';
import { InfiniteScrollDirective } from '@shared/directive/infinite-scroll.directive';
import { FormConfigType } from 'src/app/model/FormConfig.model';
import { FoodCardComponent } from '@foods/components/food-card/food-card.component';
import { SliderComponent } from '@shared/components/slider/slider.component';
import { FoodApiService } from '@core/services/food/Food.service';
import { FoodViewModel } from '@foods/model/Food.model';
@Component({
  selector: 'app-foods',
  imports: [
    FoodCardComponent,
    MatIconModule,
    SliderComponent,
    CheckboxComponent,
    ɵInternalFormsSharedModule,
    ReactiveFormsModule,
    InfiniteScrollDirective,
  ],
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.css',
  providers: [FoodApiService],
  // changeDetection: ChangeDetectionStrategy.OnPush,
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
  pageCount: number = 1;
  scrollThreshHold = window.innerHeight;
  searchControl: FormControl = new FormControl('');
  isShowLoadingScroll = signal(false);
  isLoadingMore = false;
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
      console.log('foodList', foodList);
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
          this.pageCount = 0;
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
          this.pageCount = 0;
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
          this.pageCount = 0;
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
          this.pageCount = 0;
          this.foods.set(this.originalFood);
        }
      });

    this.searchControl.valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject),
        distinctUntilChanged(),
        debounceTime(200),
      )
      .subscribe((value: any) => {
        if (value) {
          const cloneFood = [...this.originalFood];
          const filterList = cloneFood.filter((food) =>
            food.name.toLowerCase().includes(value.toLowerCase()),
          );
          this.foods.set(filterList);
        } else {
          this.pageCount = 0;
          this.foods.set(this.originalFood);
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }

  onSliderChange(event: Event) {
    console.log('event', event);
    this.applyFilters();
  }

  applyFilters() {
    console.log(this.foodFilterGroup.value);
  }

  onSrollToBottom() {
    if (this.isLoadingMore || this.pageCount * 9 > this.originalFood.length)
      return;

    this.isShowLoadingScroll.set(true);
    this.isLoadingMore = true;

    setTimeout(() => {
      const cloneFood = [...this.originalFood];
      const moreFood = cloneFood.slice(
        this.pageCount * 9,
        (this.pageCount + 1) * 9,
      );
      this.pageCount++;
      this.foods.set([...this.foods(), ...moreFood]);

      this.isLoadingMore = false;

      this.isShowLoadingScroll.set(false);
    }, 1000);
  }
}
