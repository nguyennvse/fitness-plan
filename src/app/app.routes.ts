import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home-component/home-component.component';
import { ClassesComponent } from './classes/classes.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { FoodsComponent } from './foods/foods.component';

export const routes: Routes = [
    {path: 'home', component: HomePageComponent},
    {path: 'foods', component: FoodsComponent},
    {path: 'classes', component: ClassesComponent},
    {path: 'equipments', component: EquipmentsComponent}
];
