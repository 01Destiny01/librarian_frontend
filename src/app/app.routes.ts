import { Routes } from '@angular/router';
import { BookCatalog } from './components/book-catalog/book-catalog';
import { Profile } from './components/profile/profile';
import { Login } from './core/auth/pages/login/login';
import { Library } from './components/library/library';
import { Notification } from './components/notification/notification';

export const routes: Routes = [
  {
    path: '',
    component: Login,
  },
   {
    path: 'profile',
    component: Profile,
  },
   {
    path: 'library',
    component: Library,
  },
   {
    path: 'notification',
    component: Notification,
  },
  {
    path: 'catalog',
    component: BookCatalog,
  },
 

];
