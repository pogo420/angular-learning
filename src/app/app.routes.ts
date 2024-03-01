import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddBirthdayComponent } from './components/add-birthday/add-birthday.component';
import {ShowBirthdaysComponent} from './components/show-birthdays/show-birthdays.component'
import { AddConceptsComponent } from './components/add-concepts/add-concepts.component';
import { MaterialLearningComponent } from './components/material-learning/material-learning.component';
import { AngularParamsComponent } from './components/angular-params/angular-params.component';
import { AngularQueryParamsComponent } from './components/angular-query-params/angular-query-params.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'addBirthday', component: AddBirthdayComponent},
    {path: 'showBirthdays', component: ShowBirthdaysComponent},
    {path: 'addConcepts', component: AddConceptsComponent},
    {path: 'material', component: MaterialLearningComponent},
    {path: 'angularParams/:testName/status/:status', component: AngularParamsComponent},
    {path: 'angularQueryParams', component: AngularQueryParamsComponent},
];
