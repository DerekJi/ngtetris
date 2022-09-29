import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundIndicatorComponent } from './sound-indicator.component';

describe('SoundIndicatorComponent', () => {
  let component: SoundIndicatorComponent;
  let fixture: ComponentFixture<SoundIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundIndicatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoundIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
