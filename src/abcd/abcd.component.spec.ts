/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AbcdComponent } from './abcd.component';

describe('AbcdComponent', () => {
  let component: AbcdComponent;
  let fixture: ComponentFixture<AbcdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
