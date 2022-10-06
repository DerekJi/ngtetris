import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TetrisFsmState } from 'src/app/shared/models/tetris-fsm-state.enum';
import { initialState } from 'src/app/shared/store/initial-state';
import { selectStatus } from 'src/app/shared/store/tetris.selectors';

import { StatusIndicatorComponent } from './status-indicator.component';

describe('StatusIndicatorComponent', () => {
  let component: StatusIndicatorComponent;
  let fixture: ComponentFixture<StatusIndicatorComponent>;
  let mockStore: MockStore<{}>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusIndicatorComponent ],
      providers: [
        provideMockStore({ initialState }),
      ],
    })
    .compileComponents();

    mockStore = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(StatusIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    mockStore?.resetSelectors();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  function verifyPaused(status: TetrisFsmState, expectedPaused: 'on' | 'off'): void {
    mockStore.overrideSelector(selectStatus, status);
    component.paused$.subscribe((actualPausedStatus) => {
      expect(actualPausedStatus).toBe(expectedPaused);
    });
  }

  it('should be "off" when GameStarted', () => {    
    verifyPaused(TetrisFsmState.GameStarted, 'off');
  });

  it('should be "off" when NotStarted', () => {    
    verifyPaused(TetrisFsmState.PoweredOn, 'off');
  });

  it('should be "off" when GameCompleted', () => {    
    verifyPaused(TetrisFsmState.GameOver, 'off');
  });

  it('should be "on" when Paused', () => {    
    verifyPaused(TetrisFsmState.Paused, 'on');
  });
});
