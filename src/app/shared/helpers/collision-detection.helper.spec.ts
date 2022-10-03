import { Constants } from "../consts";
import { PieceDirection } from "../models/piece-direction.enum";
import { PieceShape } from "../models/piece-shape.enum";
import { PieceModel } from "../models/piece.model";
import { Position } from "../models/position.model";
import { collided } from "./collision-detection.helper";
import { getEmptyRow, initField, setFieldOccupiedBy } from "./fieldmatrix.helper";

describe('collision-detection.helper => collided', () => {
  const fieldHight: number = 6;
  const fieldWidth: number = Constants.PlayfieldWidth;
  let field: number[][] = [];
  let tUp: PieceModel;
  let tRight: PieceModel;
  let zUp: PieceModel;
  let zRight: PieceModel;
  let iUp: PieceModel;
  let iRight: PieceModel;  

  beforeEach(() => {
    field = initField(fieldWidth, fieldHight, 0);

    tUp = new PieceModel(8, 1, PieceShape.T, PieceDirection.UP);
    tRight = new PieceModel(8, 1, PieceShape.T, PieceDirection.RIGHT);
    zUp = new PieceModel(8, 1, PieceShape.Z, PieceDirection.UP);
    zRight = new PieceModel(7, 1, PieceShape.Z, PieceDirection.RIGHT);
    iUp = new PieceModel(8, 1, PieceShape.I, PieceDirection.UP);
    iRight = new PieceModel(7, 1, PieceShape.I, PieceDirection.RIGHT);
  });

  function predefineOccupied() {
    /**
     * ◻◻◻◻◻◻◻◻◻◻
     * ◻◻◻◻▣◻◻◻◻◻
     * ◻◻◻◻▣▣◻◻◻◻
     * ◻◻◻◻▣◻◻◻◻◻
     * ◻◻◻▣▣▣◻◻▣▣
     * ◻◻◻◻◻▣◻▣▣◻
     */
    setFieldOccupiedBy(field, [
      new Position(3, 4),
      new Position(4, 1),
      new Position(4, 2),
      new Position(4, 3),
      new Position(5, 2),
      new Position(5, 4),
      new Position(5, 5),
      new Position(7, 5),
      new Position(8, 4),
      new Position(8, 5),
      new Position(9, 5),
    ]);
  }

  /**
   * ◻◻◻◻◻◻◻◻◻◻
   * ◻◻◻◻◻◻▣◻◻◻
   * ◻◻◻◻◻▣▣▣◻◻
   * ◻◻◻◻◻◻◻◻◻◻
   * ◻◻◻◻◻◻◻◻◻◻
   * ◻◻◻◻◻◻◻◻◻◻
   */
  it('should return true as t.UP() collids occupied blocks', () => {
    // Arrange
    predefineOccupied();
    var piece: PieceModel = new PieceModel(5, 1, PieceShape.T, PieceDirection.UP);
    // Act
    var collisionsDetected = collided(field, piece);
    // Assert
    expect(collisionsDetected).toBeTrue();
  });
  
  /**
   * ◻◻◻◻◻◻◻◻◻◻
   * ◻◻◻◻◻◻◻◻◻◻
   * ◻◻◻◻◻◻◻◻◻◻
   * ◻◻▣◻◻◻◻◻◻◻
   * ◻◻▣▣◻◻◻◻◻◻
   * ◻◻▣◻◻◻◻◻◻◻
   */
   it('should return true as t.RIGHT() collids occupied blocks', () => {
    // Arrange
    predefineOccupied();
    var piece: PieceModel = new PieceModel(2, 3, PieceShape.T, PieceDirection.RIGHT);
    // Act
    var collisionsDetected = collided(field, piece);
    // Assert
    expect(collisionsDetected).toBeTrue();
  });

    
  /**
   * ◻◻◻◻◻◻◻◻◻◻
   * ◻◻◻◻◻◻◻◻◻◻
   * ◻◻◻◻◻◻◻◻◻◻
   * ◻◻▣◻◻◻◻◻◻◻
   * ◻▣▣◻◻◻◻◻◻◻
   * ◻◻▣◻◻◻◻◻◻◻
   */
   it('should return false as t.LEFT() has no collisions', () => {
    // Arrange
    predefineOccupied();
    var piece: PieceModel = new PieceModel(1, 3, PieceShape.T, PieceDirection.LEFT);
    // Act
    var collisionsDetected = collided(field, piece);
    // Assert
    expect(collisionsDetected).toBeFalse();
  });

  /**
   * ◻◻◻◻◻◻◻◻◻◻
   * ◻◻◻◻◻◻◻◻◻◻
   * ◻◻◻◻◻◻▣◻◻◻
   * ◻◻◻◻◻▣▣▣◻◻
   * ◻◻◻◻◻◻◻◻◻◻
   * ◻◻◻◻◻◻◻◻◻◻
   */
   it('should return false as t.UP() has no collisions', () => {
    // Arrange
    predefineOccupied();
    var piece: PieceModel = new PieceModel(5, 2, PieceShape.T, PieceDirection.UP);
    // Act
    var collisionsDetected = collided(field, piece);
    // Assert
    expect(collisionsDetected).toBeFalse();
  });

  /**
   * ◻◻◻◻◻◻◻◻◻◻
   * ◻◻◻◻◻◻◻◻◻◻
   * ◻◻◻◻◻◻◻▣◻◻
   * ◻◻◻◻◻◻◻▣▣◻
   * ◻◻◻◻◻◻◻▣◻◻
   * ◻◻◻◻◻◻◻◻◻◻
   */
   it('should return false as t.RIGHT() has no collisions', () => {
    // Arrange
    predefineOccupied();
    var piece: PieceModel = new PieceModel(7, 2, PieceShape.T, PieceDirection.RIGHT);
    // Act
    var collisionsDetected = collided(field, piece);
    // Assert
    expect(collisionsDetected).toBeFalse();
  });

  it('should return true as pieces collided to the right side', () => {
    // Arrange
    zRight.left = 8;
    
    // Act & Assert
    for (let piece of [tUp, zRight, iRight]) {
      var collisionsDetected = collided(field, piece);
      expect(collisionsDetected).toBeTrue();
    }
  });
  
  it('should return true as pieces collided to the left side', () => {
    // Act & Assert
    for (let piece of [tUp, zUp, iRight]) {
      piece.left = -1;
      var collisionsDetected = collided(field, piece);
      expect(collisionsDetected).toBeTrue();
    }
  });
  
  it('should return false as no collisions expected', () => {
    // Act & Assert
    for (let piece of [tUp, tRight, zUp, zRight, iUp]) {
      piece.left--;
      var collisionsDetected = collided(field, piece);
      expect(collisionsDetected).toBeFalse();
    }
  });  
  
  it('should return true as pieces collided to the bottom', () => {
    // Arrange
    iUp.top = fieldHight - 3;
    tRight.top = fieldHight - 2;
    zUp.top = fieldHight - 2;
    
    // Act & Assert
    for (let piece of [tRight, iUp, zUp]) {
      var collisionsDetected = collided(field, piece);      
      expect(collisionsDetected).toBeTrue();
    }
  });
});
