import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';

export const routes: Routes = [
    {path:'', redirectTo: 'main-page', pathMatch:'full'},
    {path: 'main-page', component: MainPage}
];
