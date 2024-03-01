import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-angular-params',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-params.component.html',
  styleUrl: './angular-params.component.css'
})
export class AngularParamsComponent implements OnInit {

  constructor(private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) =>{
      console.log(params);
    })
  }

}
