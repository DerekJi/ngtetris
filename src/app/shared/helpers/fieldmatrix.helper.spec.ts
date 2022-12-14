import { PieceDirection } from '../models/piece-direction.enum';
import { PieceShape } from '../models/piece-shape.enum';
import { PieceModel } from '../models/piece.model';
import { Position } from '../models/position.model';
import { fieldHellper as helper } from './fieldmatrix.helper';

describe('fieldmatrix.helper => mergeCurrentPiece()', () => {
  var _field: number[][] = [];
  var _maxCol: number = 12;
  var _maxRow: number = 10;

  function verifyMerged(field: number[][], expected: Position[]): void {
    expected.forEach((pos) => {
      expect(field[pos.y][pos.x]).toBe(1, `M[${pos.y}][${pos.x}] should be 1`);
    })
  }  
  
  beforeEach(() => {
    for (let j = 0; j < _maxCol; j++) {
      var emptyRow = [];
      for (let i = 0; i < _maxRow; i++) {
        emptyRow.push(0);      
      }
      _field.push(emptyRow);
    }
  });

  it('should merge piece', () => {
    // Arrange 1
    var piece = new PieceModel(1, 1, PieceShape.I, PieceDirection.UP);
    var expected: Position[] = [
      new Position(2, 1),
      new Position(2, 2),
      new Position(2, 3),
      new Position(2, 4),
    ];

    // Act 1
    var merged = helper.mergeCurrentPiece(_field, piece);

    // Assert 1
    verifyMerged(merged, expected);

    // Arrange 2
    piece = new PieceModel(2, 6, PieceShape.T, PieceDirection.LEFT);
    expected.push(new Position(3, 6));
    expected.push(new Position(2, 7));
    expected.push(new Position(3, 7));
    expected.push(new Position(3, 8));

    // Act 2
    merged = helper.mergeCurrentPiece(merged, piece);

    // Assert 2
    verifyMerged(merged, expected);
  });
});

describe('fieldmatrix.helper => isFullRow()', () => {
  it('should know it is a full row', () => {
    var row: number[] = [1, 1, 1, 1, 1, 1, 1];
    var isFull = helper.isFullRow(row);
    expect(isFull).toBeTrue();
  });

  it('should know the row is not full', () => {
    var row: number[] = [0, 1, 1, 1, 1, 1, 1];
    var isFull = helper.isFullRow(row);
    expect(isFull).toBeFalse();
  });

  it('should know the row is not full', () => {
    var row: number[] = [1, 1, 1, 1, 1, 1, 0];
    var isFull = helper.isFullRow(row);
    expect(isFull).toBeFalse();
  });

  it('should know the row is not full', () => {
    var row: number[] = [1, 1, 0, 1, 1, 1, 1];
    var isFull = helper.isFullRow(row);
    expect(isFull).toBeFalse();
  });
});

describe('fieldmatrix.helper => removeFullLines()', () => {
  it('should remove the full line in the bottom', () => {
    // Arrange
    var field: number[][] = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 1], // FULL
    ];

    // Act
    var updated = helper.removeFullRows(field);

    // Assert
    expect(updated.length).toBe(field.length);
    expect(updated[0].length).toBe(field[0].length);
    expect(updated[0]).toEqual(field[0]);
    expect(updated[1]).toEqual(field[0]);
    expect(updated[2]).toEqual(field[1]);
    expect(updated[3]).toEqual(field[2]);
    expect(updated[4]).toEqual(field[3]);
  });

  it('should remove the full lines in the row', () => {
    // Arrange
    var field: number[][] = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1], // FULL
      [1, 1, 1, 1, 1, 1, 1], // FULL
    ];

    // Act
    var updated = helper.removeFullRows(field);

    // Assert
    expect(updated.length).toBe(field.length);
    expect(updated[0].length).toBe(field[0].length);
    expect(updated[0]).toEqual(field[0]); // new empty row
    expect(updated[1]).toEqual(field[0]); // new empty row
    expect(updated[2]).toEqual(field[0]);
    expect(updated[3]).toEqual(field[1]);
    expect(updated[4]).toEqual(field[2]);
  });

  it('should remove the full lines', () => {
    // Arrange
    var field: number[][] = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1], // FULL
      [1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1], // FULL
    ];

    // Act
    var updated = helper.removeFullRows(field);

    // Assert
    expect(updated.length).toBe(field.length);
    expect(updated[0].length).toBe(field[0].length);
    expect(updated[0]).toEqual(field[0]); // new empty row
    expect(updated[1]).toEqual(field[0]); // new empty row
    expect(updated[2]).toEqual(field[0]);
    expect(updated[3]).toEqual(field[1]);
    expect(updated[4]).toEqual(field[3]);
  });

});

describe('fieldmatrix.helper => countFullRows()', () => {
  it('should count the number of full rows as 1', () => {
    // Arrange
    var field: number[][] = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 1], // FULL
    ];

    // Act
    var count = helper.countFullRows(field);

    // Assert
    expect(count).toBe(1);
  });

  it('should count the number of full rows (#3 & #4) as 2', () => {
    // Arrange
    var field: number[][] = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1], // FULL
      [1, 1, 1, 1, 1, 1, 1], // FULL
    ];

    // Act
    var count = helper.countFullRows(field);

    // Assert
    expect(count).toBe(2);
  });

  it('should count the number of full rows (#2 & #4) as 2', () => {
    // Arrange
    var field: number[][] = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1], // FULL
      [1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1], // FULL
    ];

    // Act
    var count = helper.countFullRows(field);

    // Assert
    expect(count).toBe(2);
  });
});

describe('fieldmatrix.helper => getEmptyRow()', () => {
  it('should create an array with all 0', () => {
    const size = 6;
    var row = helper.getEmptyRow(size);

    expect(row.length).toBe(size);
    row.forEach((v) => expect(v).toBe(0));
  });

  it('should create an empty array with nagative value of size', () => {
    const size = -2;
    var row = helper.getEmptyRow(size);

    expect(row.length).toBe(0);
  });
});