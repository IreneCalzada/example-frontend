import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsPhoneComponent } from './inputs-phone.component';

describe('InputsPhoneComponent', () => {
  let component: InputsPhoneComponent;
  let fixture: ComponentFixture<InputsPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputsPhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputsPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
