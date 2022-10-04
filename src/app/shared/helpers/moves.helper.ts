import { PieceDirection } from "../models/piece-direction.enum";
import { PieceModel } from "../models/piece.model";
import { immutable } from "./immutable.helper";

export function getMoveLeftModel(current: PieceModel): PieceModel {
  return immutable.map(current, {
    left: current.left - 1
  });
}

export function getMoveRightModel(current: PieceModel): PieceModel {
  return immutable.map(current, {
    left: current.left + 1
  });
}

export function getMoveDownModel(current: PieceModel): PieceModel {
  return immutable.map(current, {
    top: current.top + 1
  });
}

export function getRotateClockwiseModel(current: PieceModel): PieceModel {
  var direction: PieceDirection = ((current.direction ?? 0) + 1) % 4;
  return immutable.map(current, {
    direction
  });
}

export function getRotateAntiClockwiseModel(current: PieceModel): PieceModel {
  var direction: PieceDirection = ((current.direction ?? 0) === 0) ? 3 : (current.direction ?? 0) - 1;
  return immutable.map(current, {
    direction
  });
}