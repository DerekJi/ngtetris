import { PieceModel } from "../models/piece.model";
import { getPieceMatrix } from "./piece.helper";

export function mergeCurrentPiece(field: number[][], currentPiece: PieceModel): number[][] {
  var merged = Object.assign([], field);
  var piece = getPieceMatrix(currentPiece.shape, currentPiece.direction);
  for (var row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      var occupied = piece[col][row] > 0;
      if (occupied) {
        var X = row + currentPiece.left;
        var Y = col + currentPiece.top;
        var isEmptyInField = field[Y][X] === 0;
        if (isEmptyInField) {
          field[Y][X] = 1;
        }
      }
    }
  }

  return merged;
}

/**
 * Indicates if all blocks in the row are occupied (value = 1)
 * @param row 
 * @returns true/false
 */
export function isFullRow(row: number[]): boolean {
  var result = true;
  for (const value of row) {
    if (value < 1) {
      result = false;
      break;
    }
  }
  return result;
}

/**
 * 
 * @param field 
 * @returns 
 */
export function removeFullRows(field: number[][]): number[][] {
  var updated: number[][] = [];

  var pushed = 0;
  for (let i = field.length - 1; i >= 0; i--) {
    var row = Object.assign([], field[i]);
    if (!isFullRow(row)) {
      updated.push(row);
      pushed++;
    }
  }
  for (let i = 0; i < field.length - pushed; i++) {
    updated.push(getEmptyRow(field[0].length));
  }
  return updated.reverse();
}

/**
 * 
 * @param size 
 * @returns 
 */
export function getEmptyRow(size: number, initialValue: number = 0): number[] {
  var row: number[] = [];
  for (let r = 0; r < size; r++) {
    row.push(initialValue);      
  }
  return row;
}