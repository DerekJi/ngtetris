import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldTopGameoverComponent } from './field-top-gameover.component';

describe('FieldTopGameoverComponent', () => {
  let component: FieldTopGameoverComponent;
  let fixture: ComponentFixture<FieldTopGameoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldTopGameoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldTopGameoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
