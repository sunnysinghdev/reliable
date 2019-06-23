import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Strip2Component } from './strip2.component';

describe('Strip2Component', () => {
  let component: Strip2Component;
  let fixture: ComponentFixture<Strip2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Strip2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Strip2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
