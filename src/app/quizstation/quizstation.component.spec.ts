import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizstationComponent } from './quizstation.component';

describe('QuizstationComponent', () => {
  let component: QuizstationComponent;
  let fixture: ComponentFixture<QuizstationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizstationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
