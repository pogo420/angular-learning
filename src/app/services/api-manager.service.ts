import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonBirthday } from '../models/person-birthday/person-birthday';

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {

  url="http://localhost:3000" 
  constructor(private http:HttpClient) {
    
   }

   sendData(birthdays: PersonBirthday[]){
      return this.http.post(this.url+"/addBirthdays", {birthdays});
   }
}
