import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularQueryParamsComponent } from './angular-query-params.component';

describe('AngularQueryParamsComponent', () => {
  let component: AngularQueryParamsComponent;
  let fixture: ComponentFixture<AngularQueryParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularQueryParamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularQueryParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
