import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddBirthdayComponent } from './components/add-birthday/add-birthday.component';
import {ShowBirthdaysComponent} from './components/show-birthdays/show-birthdays.component'

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'addBirthday', component: AddBirthdayComponent},
    {path: 'showBirthdays', component: ShowBirthdaysComponent}
];
