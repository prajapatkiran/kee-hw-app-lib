/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HwAppComponent } from './hw-app.component';

describe('HwAppComponent', () => {
  let component: HwAppComponent;
  let fixture: ComponentFixture<HwAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HwAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HwAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
