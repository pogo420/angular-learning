import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public testName!: string;
  public status!: string;


  constructor(private route: Router){

  }
  public handleRoute(){
    // this.route.navigate(['/angularParams', 'dummy_test','status', 'pass'])
    this.route.navigate(['/angularQueryParams'], {
      queryParams: {name: 'puglu', id: 48}
    })
  }

}
