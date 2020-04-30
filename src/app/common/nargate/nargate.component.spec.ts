/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NargateComponent } from './nargate.component';

describe('NargateComponent', () => {
  let component: NargateComponent;
  let fixture: ComponentFixture<NargateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NargateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NargateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
