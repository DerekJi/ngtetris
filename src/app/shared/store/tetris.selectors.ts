import { createFeatureSelector, createSelector } from "@ngrx/store";
import { canMoveDown, canMoveLeft, canMoveRight, collided } from "../helpers/collision-detection.helper";
import { getPieceMatrix } from "../helpers/piece.helper";
import { PieceModel } from "../models/piece.model";
import { TetrisModel } from "../models/tetris.model";

export const selectRoot = createFeatureSelector<TetrisModel>('tetris');

export const selectStatus = createSelector(selectRoot, (root) => root.status );
export const selectScore = createSelector(selectRoot, (root) => root.score );
export const selectSpeedLevel = createSelector(selectRoot, (root) => root.speedLevel );
export const selectSoundsOn = createSelector(selectRoot, (root) => root.soundsOn );

export const selectNextShape = createSelector(selectRoot, (root) => root.nextPieceShape );
export const selectNextDirection = createSelector(selectRoot, (root) => root.nextPieceDirection );
export const selectNextPieceMatrix = createSelector(selectNextShape, selectNextDirection, 
  (shape, direction) => getPieceMatrix(shape, direction));
  
export const selectCurrentShape = createSelector(selectRoot, (root) => root.currentPieceShape );
export const selectCurrentDirection = createSelector(selectRoot, (root) => root.currentPieceDirection );
export const selectCurrentPieceMatrix = createSelector(selectCurrentShape, selectCurrentDirection, 
  (shape, direction) => getPieceMatrix(shape, direction));

export const selectCurrentTop = createSelector(selectRoot, (root) => root.currentTop );
export const selectCurrentLeft = createSelector(selectRoot, (root) => root.currentLeft );

export const selectCurrentPiece = createSelector(selectRoot, 
  (root) => {
      var piece: PieceModel = {
        shape: root.currentPieceShape,
        direction: root.currentPieceDirection,
        top: root.currentTop,
        left: root.currentLeft,
      };
      return piece;
    });

export const selectPlayfield = createSelector(selectRoot, (root) => root.playfieldMatrix);

export const selectCanMoveLeft = createSelector(selectPlayfield, selectCurrentPiece, 
  (field, currentPiece) => canMoveLeft(field, currentPiece));

export const selectCanMoveRight = createSelector(selectPlayfield, selectCurrentPiece, 
  (field, currentPiece) => canMoveRight(field, currentPiece));

export const selectCanMoveDown = createSelector(selectPlayfield, selectCurrentPiece, 
  (field, currentPiece) => canMoveDown(field, currentPiece));