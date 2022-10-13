import { PieceDirection } from "../models/piece-direction.enum";
import { PieceShape } from "../models/piece-shape.enum";
import { PieceModel } from "../models/piece.model";
import { getMoveDownModel, getMoveLeftModel, getMoveRightModel, getRotateAntiClockwiseModel, getRotateClockwiseModel } from "./moves.helper";

describe('collision-detection.helper => collided', () => {
  let piece: PieceModel;

  beforeEach(() => {
    piece = {
      left: 3,
      top: 5,
      direction: PieceDirection.UP,
      shape: PieceShape.I,
    };
  });

  it('getMoveLeftModel() should get correct left', () => {
    var moved = getMoveLeftModel(piece);

    // expect: left decreased by 1
    expect(moved).toBeTruthy();
    expect(moved.left).toBe(piece.left - 1);

    // expect: all others are untouched
    expect(moved.top).toBe(piece.top);
    expect(moved.direction).toBe(piece.direction);
    expect(moved.shape).toBe(piece.shape);
  });

  it('getMoveRightModel() should get correct left', () => {
    var moved = getMoveRightModel(piece);

    // expect: left increased by 1
    expect(moved).toBeTruthy();
    expect(moved.left).toBe(piece.left + 1);

    // all others are untouched
    expect(moved.top).toBe(piece.top);
    expect(moved.direction).toBe(piece.direction);
    expect(moved.shape).toBe(piece.shape);
  });

  it('getMoveDownModel() should get correct top', () => {
    var moved = getMoveDownModel(piece);

    // expect: top increased by 1
    expect(moved).toBeTruthy();
    expect(moved.top).toBe(piece.top + 1);

    // all others are untouched
    expect(moved.left).toBe(piece.left);
    expect(moved.direction).toBe(piece.direction);
    expect(moved.shape).toBe(piece.shape);
  });

  it('getRotateClockwiseModel() should turn UP to RIGHT', () => {
    var moved = getRotateClockwiseModel(piece);

    // expect: top increased by 1
    expect(moved).toBeTruthy();
    expect(moved.direction).toBe(PieceDirection.RIGHT);
    
    // all others are untouched
    expect(moved.top).toBe(piece.top);
    expect(moved.left).toBe(piece.left);
    expect(moved.shape).toBe(piece.shape);
  });

  it('getRotateClockwiseModel() should turn LEFT to UP', () => {
    piece.direction = PieceDirection.LEFT;
    var moved = getRotateClockwiseModel(piece);

    // expect: top increased by 1
    expect(moved).toBeTruthy();
    expect(moved.direction).toBe(PieceDirection.UP);
    
    // all others are untouched
    expect(moved.top).toBe(piece.top);
    expect(moved.left).toBe(piece.left);
    expect(moved.shape).toBe(piece.shape);
  });

  it('getRotateAntiClockwiseModel() should turn UP to LEFT', () => {
    var moved = getRotateAntiClockwiseModel(piece);

    // expect: top descreased by 1
    expect(moved).toBeTruthy();
    expect(moved.direction).toBe(PieceDirection.LEFT);
    
    // all others are untouched
    expect(moved.top).toBe(piece.top);
    expect(moved.left).toBe(piece.left);
    expect(moved.shape).toBe(piece.shape);
  });

  it('getRotateAntiClockwiseModel() should turn LEFT to DOWN', () => {
    piece.direction = PieceDirection.LEFT;
    var moved = getRotateAntiClockwiseModel(piece);

    // expect: top descreased by 1
    expect(moved).toBeTruthy();
    expect(moved.direction).toBe(PieceDirection.DOWN);
    
    // all others are untouched
    expect(moved.top).toBe(piece.top);
    expect(moved.left).toBe(piece.left);
    expect(moved.shape).toBe(piece.shape);
  });
});
