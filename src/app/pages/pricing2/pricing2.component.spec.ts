import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pricing2Component } from './pricing2.component';

describe('Pricing2Component', () => {
  let component: Pricing2Component;
  let fixture: ComponentFixture<Pricing2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pricing2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pricing2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
