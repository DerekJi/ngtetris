import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldTopReadyComponent } from './field-top-ready.component';

describe('FieldTopReadyComponent', () => {
  let component: FieldTopReadyComponent;
  let fixture: ComponentFixture<FieldTopReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldTopReadyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldTopReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
