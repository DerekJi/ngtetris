import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectSoundsOn } from 'src/app/shared/store/audio.selectors';
import { initialTetrisState } from 'src/app/shared/store/initial-state';

import { SoundIndicatorComponent } from './sound-indicator.component';

describe('SoundIndicatorComponent', () => {
  let component: SoundIndicatorComponent;
  let fixture: ComponentFixture<SoundIndicatorComponent>;
  let mockStore: MockStore<{}>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundIndicatorComponent ],
      providers: [
        provideMockStore({ initialState: initialTetrisState }),
      ],
    })
    .compileComponents();
    mockStore = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(SoundIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  afterEach(() => {
    mockStore?.resetSelectors();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  function verifySoundStatus(status: boolean, expectedStatus: 'on' | 'off'): void {
    mockStore.overrideSelector(selectSoundsOn, status);
    component.status$.subscribe((actualStatus) => {
      expect(actualStatus).toBe(expectedStatus);
    });
  }

  it('should be "off" when soundsOn = false', () => {    
    verifySoundStatus(false, 'off');
  });

  it('should be "on" when soundsOn = true', () => {    
    verifySoundStatus(true, 'on');
  });

});
