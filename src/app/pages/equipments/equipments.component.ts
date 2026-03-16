import { Component, inject, signal } from '@angular/core';
import { EquipmentCardComponent } from '../equipment-card/equipment-card.component';
import { EquipmentService } from '../../core/services/equipment/equipment.service.service';
import { EquipmentDto } from '../../model/Equipment.model';
import { ShoppingCartState } from '../../store/shopping-cart.store';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormConfigType } from '../../model/FormConfig.model';
import {
  debounceTime,
  distinctUntilChanged,
  Subject,
  take,
  takeUntil,
} from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { CheckboxComponent } from '../../common/components/checkbox/checkbox.component';
import { SliderComponent } from '../../common/components/slider/slider.component';
import { InfiniteScrollDirective } from '../../common/directive/infinite-scroll.directive';

@Component({
  selector: 'app-equipments',
  imports: [
    EquipmentCardComponent,
    ɵInternalFormsSharedModule,
    ReactiveFormsModule,
    MatIconModule,
    SliderComponent,
    CheckboxComponent,
    InfiniteScrollDirective,
  ],
  templateUrl: './equipments.component.html',
  styleUrl: './equipments.component.css',
  providers: [EquipmentService],
})
export class EquipmentsComponent {
  readonly store = inject(ShoppingCartState);

  equipments = signal<EquipmentDto[]>([]);
  filterGroup!: FormGroup;
  filterGroupConfig!: FormConfigType[];
  searchControl: FormControl = new FormControl('');
  originalEquipments: EquipmentDto[] = [];
  unsubscribeSubject = new Subject<void>();
  pageCount = 0;
  isLoadingMore = false;
  isShowLoadingScroll = signal(false);
  constructor(
    private equipmentService: EquipmentService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.filterGroup = this.fb.group({
      category: [''],
      muscleGroup: [''],
      level: [''],
      price: [0],
    });
    this.filterGroupConfig = [
      {
        title: 'category',
        control: 'category',
        class: '',
        type: 'checkbox',
        checkboxOptions: ['accessory', 'strength', 'cardio'],
      },
      {
        title: 'Muscle Group',
        control: 'muscleGroup',
        class: '',
        type: 'checkbox',
        checkboxOptions: [
          'legs',
          'arms',
          'core',
          'fullbody',
          'back',
          'shoulders',
          'calves',
          'chest',
        ],
      },
      {
        title: 'Level',
        control: 'level',
        class: '',
        type: 'checkbox',
        checkboxOptions: ['beginner', 'intermediate', 'advanced'],
      },
      {
        title: 'Price',
        control: 'level',
        class: '',
        type: 'slider',
        sliderRange: {
          min: 0,
          max: 100000000,
        },
      },
    ];

    this.equipmentService.getEquipment().subscribe((equipmentList) => {
      this.originalEquipments = equipmentList;
      this.equipments.set(equipmentList.slice(0, 9));
    });

    this.searchControl.valueChanges
      .pipe(
        takeUntil(this.unsubscribeSubject),
        distinctUntilChanged(),
        debounceTime(200),
      )
      .subscribe((value: any) => {
        if (value) {
          const cloneFood = [...this.originalEquipments];
          const filterList = cloneFood.filter((food) =>
            food.name.toLowerCase().includes(value.toLowerCase()),
          );
          this.equipments.set(filterList);
        } else {
          this.pageCount = 0;
          this.equipments.set(this.originalEquipments);
        }
      });

    this.filterGroup
      .get('category')
      ?.valueChanges.pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((value) => {
        if (value.length > 0) {
          const cloneEquipment = [...this.originalEquipments];
          const filterList = cloneEquipment.filter((food) =>
            value.some((val: string) =>
              food.category.includes(val.toLowerCase()),
            ),
          );
          this.equipments.set(filterList);
        } else {
          this.pageCount = 0;
          this.equipments.set(this.originalEquipments.slice(0, 9));
        }
      });

    this.filterGroup
      .get('muscleGroup')
      ?.valueChanges.pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((value) => {
        if (value.length > 0) {
          const cloneEquipment = [...this.originalEquipments];
          const filterList = cloneEquipment.filter((equipnment) =>
            value.some((val: string) =>
              equipnment.muscle_group.includes(val.toLowerCase()),
            ),
          );
          this.equipments.set(filterList);
        } else {
          this.pageCount = 0;
          this.equipments.set(this.originalEquipments.slice(0, 9));
        }
      });

    this.filterGroup
      .get('level')
      ?.valueChanges.pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((value) => {
        if (value.length > 0) {
          const cloneEquipment = [...this.originalEquipments];
          const filterList = cloneEquipment.filter((equipnment) =>
            value.some((val: string) =>
              equipnment.level.includes(val.toLowerCase()),
            ),
          );
          this.equipments.set(filterList);
        } else {
          this.pageCount = 0;
          this.equipments.set(this.originalEquipments.slice(0, 9));
        }
      });

    this.filterGroup
      .get('price')
      ?.valueChanges.pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((value) => {
        if (value > 0) {
          const cloneEquipment = [...this.originalEquipments];
          const filterFood = cloneEquipment.filter(
            (equipment) => equipment.price > value,
          );
          this.equipments.set(filterFood);
        } else {
          this.pageCount = 0;
          this.equipments.set(this.originalEquipments.slice(0, 9));
        }
      });

    this.searchControl.valueChanges
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((value) => {
        if (value) {
          const cloneEquipment = [...this.originalEquipments];
          const filterList = cloneEquipment.filter((equipment) =>
            equipment.name.toLowerCase().includes(value.toLowerCase()),
          );
          this.equipments.set(filterList);
        } else {
          this.pageCount = 0;
          this.equipments.set(this.originalEquipments.slice(0, 9));
        }
      });
  }

  onSliderChange(event: Event) {
    this.applyFilters();
  }

  applyFilters() {
    console.log(this.filterGroup.value);
  }

  onSrollToBottom() {
    if (
      this.isLoadingMore ||
      this.pageCount * 9 > this.originalEquipments.length
    )
      return;

    this.isShowLoadingScroll.set(true);
    this.isLoadingMore = true;

    setTimeout(() => {
      const cloneFood = [...this.originalEquipments];
      const moreFood = cloneFood.slice(
        this.pageCount * 9,
        (this.pageCount + 1) * 9,
      );
      this.pageCount++;
      this.equipments.update((equipments) => [...equipments, ...moreFood]);
      this.isLoadingMore = false;

      this.isShowLoadingScroll.set(false);
    }, 1000);
  }
}
