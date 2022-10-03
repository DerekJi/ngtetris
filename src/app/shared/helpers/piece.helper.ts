import { hexToMatrix } from "./functions";
import { ShapeMatrixDefinitions } from "../matrix-definitions/shapes-matrix.index";
import { PieceDirection } from "../models/piece-direction.enum";
import { PieceShape } from "../models/piece-shape.enum";
import { TetrisModel } from "../models/tetris.model";
import { PieceModel } from "../models/piece.model";
import { getEmptyRow } from "./fieldmatrix.helper";

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export function randomPieceShape(): PieceShape {
  var index = getRandomInt(1, 7);
  return index as PieceShape;
}

export function randomPieceDirection(): PieceDirection {
  var index = getRandomInt(0, 3);
  return index as PieceDirection;
}

export function getPieceMatrix(shape?: PieceShape, direction?: PieceDirection): number[][] {
  if (shape !== undefined && direction !== undefined) {
    var def = ShapeMatrixDefinitions.find(x => x.shape === shape && x.direction === direction);
    return hexToMatrix(def?.value);
  }

  var matrix: number[][] = [];
  for (let col = 0; col < 4; col++) {
    var row = getEmptyRow(4);
    matrix.push(row);
  }
  return matrix;
}

export function getCurrentPiece(tetris: TetrisModel): PieceModel {
  return new PieceModel(tetris.currentLeft, tetris.currentTop, tetris.currentPieceShape, tetris.currentPieceDirection);
}

export function getPieceLeft(pieceMatrix: number[][]): number {
  for (let col = 0; col < 4; col++) {
    for (let row = 0; row < 4; row++) {
      if (pieceMatrix[row][col] > 0) {
        return col;
      }
    }    
  }
  return -1;
}

export function getPieceRight(pieceMatrix: number[][]): number {
  for (let col = 3; col >=0; col--) {
    for (let row = 0; row < 4; row++) {
      if (pieceMatrix[row][col] > 0) {
        return col;
      }
    }    
  }
  return -1;
}

export function getPieceBottom(pieceMatrix: number[][]): number {
  for (let row = 3; row >=0; row--) {
    for (let col = 0; col < 4; col++) {
      if (pieceMatrix[row][col] > 0) {
        return row;
      }
    }    
  }
  return -1;
}