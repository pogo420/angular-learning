import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBirthdaysComponent } from './show-birthdays.component';

describe('ShowBirthdaysComponent', () => {
  let component: ShowBirthdaysComponent;
  let fixture: ComponentFixture<ShowBirthdaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowBirthdaysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowBirthdaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
