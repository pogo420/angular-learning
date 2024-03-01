import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularParamsComponent } from './angular-params.component';

describe('AngularParamsComponent', () => {
  let component: AngularParamsComponent;
  let fixture: ComponentFixture<AngularParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularParamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
