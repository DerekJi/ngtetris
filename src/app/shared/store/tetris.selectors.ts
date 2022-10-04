import { createFeatureSelector, createSelector } from "@ngrx/store";
import { canMoveDown } from "../helpers/collision-detection.helper";
import { mergeCurrentPiece } from "../helpers/fieldmatrix.helper";
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
      return new PieceModel(root.currentLeft, root.currentTop, root.currentPieceShape, root.currentPieceDirection);
    });

export const selectPlayfield = createSelector(selectRoot, (root) => root.playfieldMatrix);

export const selectCanMoveDown = createSelector(selectPlayfield, selectCurrentPiece, 
  (field, currentPiece) => canMoveDown(field, currentPiece));

export const selectFildeView = createSelector(selectPlayfield, selectCurrentPiece,
  (field, piece) => mergeCurrentPiece(field, piece));

export const selectAudioContext = createSelector(selectRoot, (root) => root.audioContext);
export const selectAudioBuffer = createSelector(selectRoot, (root) => root.audioBuffer);