import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTry1Component } from './c-try1.component';

describe('CTry1Component', () => {
  let component: CTry1Component;
  let fixture: ComponentFixture<CTry1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTry1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTry1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
