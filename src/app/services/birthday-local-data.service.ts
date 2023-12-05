import { Injectable } from '@angular/core';
import { PersonBirthday } from '../models/person-birthday/person-birthday';

@Injectable({
  providedIn: 'root'
})
export class BirthdayLocalDataService {

  birthdays: PersonBirthday[]

  constructor() { 
    this.birthdays = []
  }

  addBirthday(birthday: PersonBirthday){
    this.birthdays.push(birthday);
  }

  showBirthdays(){
    return this.birthdays
  }
}
