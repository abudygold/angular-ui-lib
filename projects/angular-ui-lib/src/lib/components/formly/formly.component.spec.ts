import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyComponent } from './formly.component';

describe('FormlyComponent', () => {
  let component: FormlyComponent;
  let fixture: ComponentFixture<FormlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
