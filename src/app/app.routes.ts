import { Routes } from '@angular/router';
import { HomePageComponent } from './core/layouts/home-component/home-component.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { FoodsComponent } from './pages/foods/foods.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { LoginComponent } from './pages/login/login.component';
import { EquipmentsComponent } from './pages/equipments/equipments.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { EmailVerifyComponent } from './pages/email-verify/email-verify.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'foods', component: FoodsComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'equipments', component: EquipmentsComponent },
  { path: 'shopping_cart', component: ShoppingCartComponent },
  { path: 'sign_up', component: SignUpComponent },
  { path: 'forget_password', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'email_verify', component: EmailVerifyComponent },
  { path: '**', component: HomePageComponent },
];
