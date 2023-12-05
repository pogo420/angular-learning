import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonBirthday } from '../../models/person-birthday/person-birthday';
import { BirthdayLocalDataService } from '../../services/birthday-local-data.service';

@Component({
  selector: 'app-add-birthday',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-birthday.component.html',
  styleUrl: './add-birthday.component.css'
})
export class AddBirthdayComponent {
  
  personName!: string
  personDob!: Date
  
  constructor(private birthdayService: BirthdayLocalDataService){
  }
  
  onSubmit(){
    const pdb:PersonBirthday = {
      name: this.personName, dateOfBirth: this.personDob
    };
    this.birthdayService.addBirthday(pdb)
    console.log(this.birthdayService.showBirthdays())
  }
}
