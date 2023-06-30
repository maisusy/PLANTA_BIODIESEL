/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AbmEquiposComponent } from './abm-equipos.component';

describe('AbmEquiposComponent', () => {
  let component: AbmEquiposComponent;
  let fixture: ComponentFixture<AbmEquiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmEquiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
