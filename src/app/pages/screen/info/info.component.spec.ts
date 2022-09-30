import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from 'src/app/shared/store/initial-state';
import { selectScore, selectSpeedLevel } from 'src/app/shared/store/tetris.selectors';

import { InfoComponent } from './info.component';

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;
  let mockStore: MockStore<{}>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoComponent ],
      providers: [
        provideMockStore({ initialState }),
      ],
    })
    .compileComponents();
    mockStore = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('score should be correct', () => {
    const score = 13;
    mockStore.overrideSelector(selectScore, score);
    component.score$.subscribe((actual) => {
      expect(actual).toBe(score);
    });
  });
  
  it('speed level should be correct', () => {
    const speed = 13;
    mockStore.overrideSelector(selectSpeedLevel, speed);
    component.speedLevel$.subscribe((actual) => {
      expect(actual).toBe(speed);
    });
  });  
});
