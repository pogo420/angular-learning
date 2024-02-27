import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { TestPipePipe } from '../../pipes/test-pipe.pipe';
import { PersonBirthday } from '../../models/person-birthday/person-birthday';
import { FilterTablePipe } from '../../pipes/filter-table.pipe';
import { PagingPipe } from '../../pipes/paging.pipe';
import { min } from 'rxjs';


@Component({
  selector: 'app-add-concepts',
  standalone: true,
  imports: [CommonModule, FormsModule, TestPipePipe, FilterTablePipe, PagingPipe],
  templateUrl: './add-concepts.component.html',
  styleUrl: './add-concepts.component.css'
})
export class AddConceptsComponent implements OnInit {


  public page_size = 5;
  public direction!: number;
  public windows!: any;
  public current_range = 0

  public showPrev = false;
  public persons: PersonBirthday[];
  public tableSearch!: string;

  

  public age!: number;

  public items: string[] = ["sam", "puglu", "gablu"]
  public isStike: boolean = false;


  public name: string = "Ola"
  public data: number = 28893.45
  public dob: string = "2008-15-09"


  public buttonCheck!: number;
  constructor(){
    this.age = 0;

    this.persons = [
      {name: 'Puglu',dateOfBirth: new Date('2024-02-04')},
      {name: 'Gublu',dateOfBirth: new Date('2024-02-07')},
      {name: 'Gablu',dateOfBirth: new Date('2024-02-09')},
      {name: 'Sam',dateOfBirth: new Date('2024-02-09')},
      {name: 'Pam',dateOfBirth: new Date('2024-02-19')},
      {name: 'Gam',dateOfBirth: new Date('2024-03-29')},
      {name: 'olo',dateOfBirth: new Date('2024-03-04')},
      {name: 'lolo',dateOfBirth: new Date('2024-02-04')},
      {name: 'jss',dateOfBirth: new Date('2024-02-07')},
      {name: 'JJ',dateOfBirth: new Date('2024-02-09')},
      {name: 'Eva',dateOfBirth: new Date('2024-02-09')},
      {name: 'Pama',dateOfBirth: new Date('2024-02-19')},
      {name: 'Golu',dateOfBirth: new Date('2024-03-29')},
      {name: 'Motu',dateOfBirth: new Date('2024-03-04')},
    ];

  }
  ngOnInit(): void {
    this.generateWinRanges()
  }

  public onKeyup(value: string): void{
    console.log(value);
  }

  public onKeyupAge(): void{
    console.log(this.age);
  }

  public onClick(i: number){
    this.buttonCheck = i;
  }

  public iniStrike(){
    console.log("change strike", !this.isStike)
    this.isStike =  !this.isStike
  }

  public onSubmit(f: NgForm){
    console.log(f.value)
  }

  public onChangeEmail(email: NgModel){
    console.log(email)
  }

  public generateWinRanges(){

    const arrayLength = this.persons.length
    const window = this.page_size

    let i = 0
    let data = []
    while(i*window < arrayLength) {
      data.push({start: i*window, end: Math.min(window*(i+1), arrayLength)})
      i +=1
    }
    this.windows = data;
    console.log(data)
  }

  public recalculateWindow(){
    this.current_range = 0
    this.generateWinRanges()
  }

  public paginatorElementHandler(direction: number){
    
    if (direction < 0 && this.current_range>0 ){
      this.current_range--;
    }
    else if (direction > 0 && this.current_range<this.persons.length ){
      this.current_range++;
    }
  }


}
/*
 [0 min(w, len(arr))
 [w min(2w, len(arr))
 [2w min(3w, len(arr))
*/


