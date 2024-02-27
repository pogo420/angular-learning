import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConceptsComponent } from './add-concepts.component';

describe('AddConceptsComponent', () => {
  let component: AddConceptsComponent;
  let fixture: ComponentFixture<AddConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddConceptsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
