import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Newpage2Component } from './newpage2.component';

describe('Newpage2Component', () => {
  let component: Newpage2Component;
  let fixture: ComponentFixture<Newpage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newpage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
