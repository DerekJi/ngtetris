import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberPanelComponent } from './number-panel.component';

describe('NumberPanelComponent', () => {
  let component: NumberPanelComponent;
  let fixture: ComponentFixture<NumberPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
