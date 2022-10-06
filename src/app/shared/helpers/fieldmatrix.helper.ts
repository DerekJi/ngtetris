import { PieceDirection } from "../models/piece-direction.enum";
import { PieceShape } from "../models/piece-shape.enum";
import { PieceModel } from "../models/piece.model";
import { Position } from "../models/position.model";
import { getPieceBottom, getPieceMatrix } from "./piece.helper";

function clone(field: number[][]): number[][] {
  var cloned: number[][] = [];
  for (var i = 0; i < field.length; i++)
    cloned[i] = [...field[i]];
  return cloned;
}

function mergeCurrentPiece(field: number[][], currentPiece: PieceModel): number[][] {
  var merged: number[][] = clone(field);

  var piece = getPieceMatrix(currentPiece.shape, currentPiece.direction);
  for (var row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      var occupied = piece[col][row] > 0;
      if (occupied) {
        var X = row + currentPiece.left;
        var Y = col + currentPiece.top;
        var isEmptyInField = X >= 0 && Y >= 0 && field[Y][X] === 0;
        if (isEmptyInField) {
          merged[Y][X] = 1;
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
function isFullRow(row: number[]): boolean {
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
function removeFullRows(field: number[][]): number[][] {
  var updated: number[][] = [];

  var pushed = 0;
  for (let i = field.length - 1; i >= 0; i--) {
    var row = [ ... field[i]];
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
 * @param field 
 * @returns 
 */
function countFullRows(field: number[][]): number {
  var count = 0;
  for (let i = field.length - 1; i >= 0; i--) {
    var row = [ ... field[i]];
    count += isFullRow(row) ? 1 : 0;
  }
  return count;
}

/**
 * 
 * @param size 
 * @returns 
 */
function getEmptyRow(size: number, initialValue: number = 0): number[] {
  var row: number[] = [];
  for (let r = 0; r < size; r++) {
    row.push(initialValue);      
  }
  return row;
}

/**
 * 
 * @param width 
 * @param height 
 * @param initialValue 
 */
function initField(width: number, height: number, initialValue: number = 0): number[][] {
  var field: number[][] = [];
  for (var i = 0; i < height; i++) {
    field.push(getEmptyRow(width, initialValue));
  }
  return field;
}

/**
 * 
 * @param field 
 * @param positions 
 */
function setFieldOccupiedBy(field: number[][], positions: Position[]): void {
  const fieldHight = field.length;
  const fieldWidth = field[0].length;

  for (let pos of positions) {
    if (pos.x >= 0 && pos.x < fieldWidth && pos.y >= 0 && pos.y < fieldHight) {
      field[pos.y][pos.x] = 1;
    }
  }
}

/**
 * Ensure the lowest block top is 0
 * @param shape 
 * @param direction 
 */
function initialPieceTop(shape: PieceShape, direction: PieceDirection) {
  var matrix = getPieceMatrix(shape, direction);
  var bottom = getPieceBottom(matrix);
  return -1 * bottom;
}

export const fieldHellper = {
  initialize: initField,

  initialPieceTop,

  clone,

  setFieldOccupiedBy,

  getEmptyRow,

  countFullRows,

  removeFullRows,

  isFullRow,

  mergeCurrentPiece,
}