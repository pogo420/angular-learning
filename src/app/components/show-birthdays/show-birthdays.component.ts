import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonBirthday} from '../../models/person-birthday/person-birthday'
import { BirthdayLocalDataService } from '../../services/birthday-local-data.service';
import { ApiManagerService } from '../../services/api-manager.service';

@Component({
  selector: 'app-show-birthdays',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-birthdays.component.html',
  styleUrl: './show-birthdays.component.css'
})
export class ShowBirthdaysComponent {

  birthdays: PersonBirthday[]

  constructor(private birthdayService: BirthdayLocalDataService, private apiSevice: ApiManagerService){
    this.birthdays = birthdayService.showBirthdays()
    this.apiSevice = apiSevice
  }

  addToDb(){
    console.log("Sending data to json-server..")
    this.apiSevice.sendData(this.birthdays).subscribe(data=> console.log(data))
  }
}
