import { Constants } from "../consts";
import { PieceModel } from "../models/piece.model";
import { getMoveDownModel, getMoveLeftModel, getMoveRightModel, getRotateAntiClockwiseModel, getRotateClockwiseModel } from "./moves.helper";
import { getPieceMatrix } from "./piece.helper";

export function canMoveLeft(field: number[][], currentPiece: PieceModel): boolean {
  var pieceMoved = getMoveLeftModel(currentPiece);
  return collided(field, pieceMoved);
}

export function canMoveRight(field: number[][], currentPiece: PieceModel): boolean {
  var pieceMoved = getMoveRightModel(currentPiece);
  return collided(field, pieceMoved);
}

export function canMoveDown(field: number[][], currentPiece: PieceModel): boolean {
  var pieceMoved = getMoveDownModel(currentPiece);
  return collided(field, pieceMoved);
}

export function canRotateClockwise(field: number[][], currentPiece: PieceModel): boolean {
  var pieceMoved = getRotateClockwiseModel(currentPiece);
  return collided(field, pieceMoved);
}

export function canRotateAntiClockwise(field: number[][], currentPiece: PieceModel): boolean {
  var pieceMoved = getRotateAntiClockwiseModel(currentPiece);
  return collided(field, pieceMoved);
}

/**
 * Indicates if the current piece collides to field walls or occupied blocks in the playfield
 * See `docs/piece-move.md` for more explanations
 * 
 * @param field playfield
 * @param currentPiece the current piece
 * @returns true/false
 */
export function collided(field: number[][], currentPiece: PieceModel)
: boolean {
  var pieceMatrix = getPieceMatrix(currentPiece.shape, currentPiece.direction);
  for (let y = 0; y < pieceMatrix.length; y++) {
    var row = pieceMatrix[y];
    for (let x = 0; x < row.length; x++) {
      var occupied = pieceMatrix[x][y] === 1;
      if (occupied) {
        var X = currentPiece.left + x,
            Y = currentPiece.top + y;
        var leftOk = X >= 0;
        var rightOk = X < Constants.PlayfieldWidth;
        var bottomOk = Y < Constants.PlayfieldHeight;
        var noOverlapping = field[X][Y] !== 1;

        var ok = leftOk && rightOk && bottomOk && noOverlapping;
        if (!ok) {
          return false;
        }
      }
    }
  }
  return true;
}