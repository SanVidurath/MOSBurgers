import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemsComponent } from './pages/items/items.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'items',
    component: ItemsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];
