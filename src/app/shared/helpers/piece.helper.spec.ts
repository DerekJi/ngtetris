import { Constants } from '../consts';
import { PieceDirection } from '../models/piece-direction.enum';
import { PieceShape } from '../models/piece-shape.enum';
import { initialTetrisState } from '../store/initial-state';
import { immutable } from './immutable.helper';
import { getCurrentPiece, getPieceBottom, getPieceLeft, getPieceMatrix, getPieceRight, getPieceTop, randomPieceDirection, randomPieceShape } from './piece.helper';

describe('piecematrix.helper', () => {
  function verify(shape: PieceShape, direction: PieceDirection, 
                  expectedLeft: number,
                  expectedRight: number,
                  expectedBottom: number,
                  expectedTop: number) {
    // arrange
    var matrix = getPieceMatrix(shape, direction);
  
    // act
    var actualLeft = getPieceLeft(matrix);
    var actualRight = getPieceRight(matrix);
    var actualBottom = getPieceBottom(matrix);
    var actualTop = getPieceTop(matrix);
  
    // assert
    expect(actualLeft).toBe(expectedLeft);
    expect(actualRight).toBe(expectedRight);
    expect(actualBottom).toBe(expectedBottom);
    expect(actualTop).toBe(expectedTop);
  }

  it('should get LEFT, RIGHT, TOP, BOTTOM correctly', () => {
    verify(PieceShape.I, PieceDirection.UP, 1, 1, 3, 0);
    verify(PieceShape.I, PieceDirection.LEFT, 0, 3, 1, 1);
    verify(PieceShape.T, PieceDirection.LEFT, 0, 1, 2, 0);
    verify(PieceShape.T, PieceDirection.UP, 0, 2, 1, 0);
    verify(PieceShape.J, PieceDirection.UP, 0, 1, 2, 0);
  });

  it('randomPieceShape() should generate all possible piece shapes within 100 times', () => {
    // act
    var shapes: PieceShape[] = [];
    for (let i = 0; i < 100; i++) {
      var shape = randomPieceShape();
      if (!shapes.includes(shape)) {
        shapes.push(shape);
      }
    }

    // assert
    expect(shapes.length).toBe(Constants.PieceShapesNumber);
  });

  it('randomPieceDirection() should generate all possible piece directions within 100 times', () => {
    // act
    var directions: PieceDirection[] = [];
    for (let i = 0; i < 100; i++) {
      var direction = randomPieceDirection();
      if (!directions.includes(direction)) {
        directions.push(direction);
      }
    }

    // assert
    expect(directions.length).toBe(Constants.PieceDirectionNUmber);
  });

  it('getPieceMatrix() should return T.Up matrix', () => {
    // Act
    var matrix = getPieceMatrix(PieceShape.T, PieceDirection.UP);

    // Assert - height & width
    expect(matrix.length).toBe(4);
    expect(matrix[0].length).toBe(4);

    expect(matrix[0][1]).toBe(1);
    expect(matrix[1][0]).toBe(1);
    expect(matrix[1][1]).toBe(1);
    expect(matrix[1][2]).toBe(1);
  });

  it('getCurrentPiece() should build correct model', () => {
    // Arrange
    var state = immutable.map(initialTetrisState, {
      currentLeft: 3,
      currentTop: 13,
      currentPieceShape: PieceShape.S,
      currentPieceDirection: PieceDirection.RIGHT, 
    });

    // Act
    var piece = getCurrentPiece(state);

    // Assert - height & width
    expect(piece.left).toBe(state.currentLeft);
    expect(piece.top).toBe(state.currentTop);
    expect(piece.shape).toBe(state.currentPieceShape);
    expect(piece.direction).toBe(state.currentPieceDirection);;
  });
});

