import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initField, setFieldOccupiedBy } from 'src/app/shared/helpers/fieldmatrix.helper';
import { Position } from 'src/app/shared/models/position.model';
import { initialState } from 'src/app/shared/store/initial-state';
import { selectFildeView } from 'src/app/shared/store/tetris.selectors';

import { PlayfieldComponent } from './playfield.component';

function verifyOccupied(field: number[][], expected: Position[]): void {
  expected.forEach((pos) => {
    expect(field[pos.y][pos.x]).toBe(1, `M[${pos.y}][${pos.x}] should be 1`);
  })
}

describe('PlayfieldComponent', () => {
  let component: PlayfieldComponent;
  let fixture: ComponentFixture<PlayfieldComponent>;
  let mockStore: MockStore<{}>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayfieldComponent ],
      providers: [
        provideMockStore({ initialState }),
      ],
    })
    .compileComponents();
    mockStore = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(PlayfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be correct view', () => {
    // Arrange
    const height: number = 6, width = 9;
    var field: number[][] = initField(width, height, 0);
    /**
     * ◻◻◻◻◻◻◻◻◻◻
     * ◻◻◻◻▣◻◻◻◻◻
     * ◻◻◻◻▣▣◻◻◻◻
     * ◻◻◻◻▣◻◻◻◻◻
     * ◻◻◻▣▣▣◻◻▣▣
     * ◻◻◻◻◻▣◻▣▣◻
     */
    var occupied = [
      new Position(3, 4),
      new Position(4, 1),
      new Position(4, 2),
      new Position(4, 3),
      new Position(5, 2),
      new Position(5, 4),
      new Position(5, 5),
      new Position(7, 5),
    ];
    setFieldOccupiedBy(field, occupied);
    mockStore.overrideSelector(selectFildeView, field);

    // Act & Assert
    component.view$.subscribe((actual) => {
      verifyOccupied(actual, occupied);

      expect(component.width).toBe(width);
      expect(component.height).toBe(height);
    });
  });
});
