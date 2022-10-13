import { PieceModel } from "../models/piece.model";
import { getMoveDownModel } from "./moves.helper";
import { getPieceMatrix } from "./piece.helper";

export function canMoveDown(field: number[][], currentPiece: PieceModel): boolean {
  var pieceMoved = getMoveDownModel(currentPiece);
  return !collided(field, pieceMoved);
}

/**
 * Indicates if the current piece collides to field walls or occupied blocks in the playfield
 * See `docs/piece-move.md` for more explanations
 * 
 * @param field playfield
 * @param currentPiece the current piece
 * @returns true: collisions detected / false: no collisions
 */
export function collided(field: number[][], currentPiece: PieceModel)
: boolean {
  const height = field.length;
  const width = field[0].length; 
  var pieceMatrix = getPieceMatrix(currentPiece.shape, currentPiece.direction);
  for (let y = 0; y < pieceMatrix.length; y++) {
    var row = pieceMatrix[y];
    for (let x = 0; x < row.length; x++) {
      var occupied = row[x] === 1;
      if (occupied) {
        var X = currentPiece.left + x,
            Y = currentPiece.top + y;
        var leftOk = X >= 0;
        var rightOk = X < width;
        var bottomOk = Y < height;
        var inScope = leftOk && rightOk && bottomOk;
        if (!inScope) {
          return true;
        }

        var noOverlapping = Y < 0 || field[Y][X] !== 1;
        if (!noOverlapping) {
          return true;
        }
      }
    }
  }
  return false;
}