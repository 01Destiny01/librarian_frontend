import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { BookCatalog } from './components/book-catalog/book-catalog';
import { Profile } from './components/profile/profile';
import { Login } from './core/auth/pages/login/login';

export const routes: Routes = [
  {
    path: '',
    component: Login,
  },
  {
    path: 'catalog',
    component: BookCatalog,
  },
  {
    path: 'notification',
    component: BookCatalog,
  },
  {
    path: 'profile',
    component: Profile,
  },

];
