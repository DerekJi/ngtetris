import { PieceDirection } from '../models/piece-direction.enum';
import { PieceShape } from '../models/piece-shape.enum';
import { getPieceBottom, getPieceLeft, getPieceMatrix, getPieceRight } from './piece.helper';

fdescribe('piecematrix.helper', () => {
  function verify(shape: PieceShape, direction: PieceDirection, 
                  expectedLeft: number,
                  expectedRight: number,
                  expectedBottom: number) {
    // arrange
    var matrix = getPieceMatrix(shape, direction);
  
    // act
    var actualLeft = getPieceLeft(matrix);
    var actualRight = getPieceRight(matrix);
    var actualBottom = getPieceBottom(matrix);
  
    // assert
    expect(actualLeft).toBe(expectedLeft);
    expect(actualRight).toBe(expectedRight);
    expect(actualBottom).toBe(expectedBottom);
  }

  it('should get LEFT, RIGHT, TOP, BOTTOM correctly', () => {
    verify(PieceShape.I, PieceDirection.UP, 1, 1, 3);
    verify(PieceShape.I, PieceDirection.LEFT, 0, 3, 1);
    verify(PieceShape.T, PieceDirection.LEFT, 0, 1, 2);
    verify(PieceShape.T, PieceDirection.UP, 0, 2, 1);
    verify(PieceShape.J, PieceDirection.UP, 0, 1, 2);
  });
});

