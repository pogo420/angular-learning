import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-angular-query-params',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-query-params.component.html',
  styleUrl: './angular-query-params.component.css'
})
export class AngularQueryParamsComponent implements OnInit {

  constructor(private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(param =>{
        console.log(param);
    });
  }



}
