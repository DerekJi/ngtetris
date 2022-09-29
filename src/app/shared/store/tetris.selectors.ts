import { createFeatureSelector, createSelector } from "@ngrx/store";
import { hexToMatrix } from "../helpers";
import { ShapeMatrixDefinitions } from "../matrix-definitions/shapes-matrix.index";
import { PieceDirection } from "../models/piece-direction.enum";
import { PieceShape } from "../models/piece-shape.enum";
import { TetrisModel } from "../models/tetris.model";

function mapPieceMatrix(shape: PieceShape, direction: PieceDirection): number[][] {
  var def = ShapeMatrixDefinitions.find(x => x.shape === shape && x.direction === direction);
  return hexToMatrix(def?.value);
}

export const selectRoot = createFeatureSelector<TetrisModel>('tetris');

export const selectStatus = createSelector(selectRoot, (root) => root.status );
export const selectScore = createSelector(selectRoot, (root) => root.score );
export const selectSpeedLevel = createSelector(selectRoot, (root) => root.speedLevel );
export const selectSoundsOn = createSelector(selectRoot, (root) => root.soundsOn );

export const selectNextShape = createSelector(selectRoot, (root) => root.nextPieceShape );
export const selectNextDirection = createSelector(selectRoot, (root) => root.nextPieceDirection );
export const selectNextPieceMatrix = createSelector(selectNextShape, selectNextDirection, 
  (shape, direction) => mapPieceMatrix(shape, direction));
  
export const selectCurrentShape = createSelector(selectRoot, (root) => root.currentPieceShape );
export const selectCurrentDirection = createSelector(selectRoot, (root) => root.currentPieceDirection );
export const selectCurrentPieceMatrix = createSelector(selectCurrentShape, selectCurrentDirection, 
  (shape, direction) => mapPieceMatrix(shape, direction));