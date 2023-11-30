import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  onSubmit(){
    console.log(this.personName, this.personDob);
  }
}
