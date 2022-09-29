import { PieceDirection } from "../models/piece-direction.enum";
import { PieceModel } from "../models/piece.model";

export function getMoveLeftModel(current: PieceModel): PieceModel {
  return  Object.assign({}, current, {
    left: current.left - 1
  });
}

export function getMoveRightModel(current: PieceModel): PieceModel {
  return  Object.assign({}, current, {
    left: current.left + 1
  });
}

export function getMoveDownModel(current: PieceModel): PieceModel {
  return Object.assign({}, current, {
    top: current.top + 1
  });
}

export function getRotateClockwiseModel(current: PieceModel): PieceModel {
  var direction: PieceDirection = (current.direction + 1) % 4;
  return Object.assign({}, current, {
    direction
  });
}

export function getRotateAntiClockwiseModel(current: PieceModel): PieceModel {
  var direction: PieceDirection = current.direction === 0 ? 3 : current.direction - 1;
  return Object.assign({}, current, {
    direction
  });
}