import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextPiecePanelComponent } from './next-piece-panel.component';

describe('NextPiecePanelComponent', () => {
  let component: NextPiecePanelComponent;
  let fixture: ComponentFixture<NextPiecePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextPiecePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextPiecePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
