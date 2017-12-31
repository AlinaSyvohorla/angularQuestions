import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YesNoAnswerComponent } from './yes-no-answer.component';

describe('YesNoAnswerComponent', () => {
  let component: YesNoAnswerComponent;
  let fixture: ComponentFixture<YesNoAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YesNoAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesNoAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
