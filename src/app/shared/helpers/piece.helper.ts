import { hexToMatrix } from "./functions";
import { ShapeMatrixDefinitions } from "../matrix-definitions/shapes-matrix.index";
import { PieceDirection } from "../models/piece-direction.enum";
import { PieceShape } from "../models/piece-shape.enum";
import { TetrisModel } from "../models/tetris.model";
import { PieceModel } from "../models/piece.model";
import { fieldHellper } from "./fieldmatrix.helper";
import { Constants } from "../consts";

/**
 * Generate random value between min and max, saing, value ∈ [min, max]
 * @param min minimum value, inclusive
 * @param max maximum value, inclusive
 * @returns 
 */
function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max + 1);
  return Math.floor(Math.random() * (max - min) + min);
}

export function randomPieceShape(): PieceShape {
  var index = getRandomInt(1, Constants.PieceShapesNumber);
  return index as PieceShape;
}

export function randomPieceDirection(): PieceDirection {
  var index = getRandomInt(0, Constants.PieceDirectionNUmber - 1);
  return index as PieceDirection;
}

export function getPieceMatrix(shape?: PieceShape, direction?: PieceDirection): number[][] {
  if (shape !== undefined && direction !== undefined) {
    var def = ShapeMatrixDefinitions.find(x => x.shape === shape && x.direction === direction);
    return hexToMatrix(def?.value);
  }

  var matrix: number[][] = fieldHellper.initialize(4, 4, 0);
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

export function getPieceTop(pieceMatrix: number[][]): number {
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      if (pieceMatrix[row][col] > 0) {
        return row;
      }
    }    
  }
  return -1;
}