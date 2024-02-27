import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialLearningComponent } from './material-learning.component';

describe('MaterialLearningComponent', () => {
  let component: MaterialLearningComponent;
  let fixture: ComponentFixture<MaterialLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialLearningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
