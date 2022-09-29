import { hexToMatrix } from "./functions";
import { ShapeMatrixDefinitions } from "../matrix-definitions/shapes-matrix.index";
import { PieceDirection } from "../models/piece-direction.enum";
import { PieceShape } from "../models/piece-shape.enum";
import { TetrisModel } from "../models/tetris.model";
import { PieceModel } from "../models/piece.model";

export function getPieceMatrix(shape: PieceShape, direction: PieceDirection): number[][] {
  var def = ShapeMatrixDefinitions.find(x => x.shape === shape && x.direction === direction);
  return hexToMatrix(def?.value);
}

export function getCurrentPiece(tetris: TetrisModel): PieceModel {
  var currentPiece: PieceModel = {
    shape: tetris.currentPieceShape,
    direction: tetris.currentPieceDirection,
    top: tetris.currentTop,
    left: tetris.currentLeft,
  };
  return currentPiece;
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