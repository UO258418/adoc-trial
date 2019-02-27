import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidLoginComponent } from './solid-login.component';

describe('SolidLoginComponent', () => {
  let component: SolidLoginComponent;
  let fixture: ComponentFixture<SolidLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolidLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
