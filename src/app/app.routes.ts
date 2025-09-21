import { Routes } from '@angular/router';
import { Hero } from './pages/hero/hero';

export const routes: Routes = [
    {
        path:'', redirectTo:'hero',pathMatch:'full'
    },
    {path:'hero', component:Hero}
];
