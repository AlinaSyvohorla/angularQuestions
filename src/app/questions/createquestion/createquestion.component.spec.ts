import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatequestionComponent } from './createquestion.component';

describe('CreatequestionComponent', () => {
  let component: CreatequestionComponent;
  let fixture: ComponentFixture<CreatequestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatequestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatequestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
