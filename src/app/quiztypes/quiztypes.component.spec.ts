import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiztypesComponent } from './quiztypes.component';

describe('QuiztypesComponent', () => {
  let component: QuiztypesComponent;
  let fixture: ComponentFixture<QuiztypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuiztypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiztypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
