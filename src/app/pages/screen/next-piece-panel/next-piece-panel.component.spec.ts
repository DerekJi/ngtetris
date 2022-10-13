import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { getPieceMatrix } from 'src/app/shared/helpers/piece.helper';
import { BlockStatusColor } from 'src/app/shared/models/block-status.enum';
import { PieceDirection } from 'src/app/shared/models/piece-direction.enum';
import { PieceShape } from 'src/app/shared/models/piece-shape.enum';
import { initialTetrisState } from 'src/app/shared/store/initial-state';
import { selectNextPieceMatrix } from 'src/app/shared/store/tetris.selectors';
import { NextPiecePanelComponent } from './next-piece-panel.component';

describe('NextPiecePanelComponent', () => {
  let component: NextPiecePanelComponent;
  let fixture: ComponentFixture<NextPiecePanelComponent>;  
  let mockStore: MockStore<{}>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextPiecePanelComponent ],
      providers: [
        provideMockStore({ initialState: initialTetrisState }),
      ],
    })
    .compileComponents();
    mockStore = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(NextPiecePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  afterEach(() => {
    mockStore?.resetSelectors();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get matrix of next piece', () => {
    // Arrange
    var shape = PieceShape.T;
    var direction = PieceDirection.LEFT;
    var expectedMatrix = getPieceMatrix(shape, direction);

    // Act
    mockStore.overrideSelector(selectNextPieceMatrix, expectedMatrix);

    // Assert
    component.next$.subscribe((actualMatrix) => {
      expect(actualMatrix).toEqual(expectedMatrix);
    });
  });

  it('block status should be Empty as the value is 0', () => {
    var result = component.blockStatus(0);
    expect(result).toBe(BlockStatusColor.Empty);
  })

  it('block status should be Covered as the value is positive', () => {
    var result = component.blockStatus(1);
    expect(result).toBe(BlockStatusColor.Covered);
  })
});
