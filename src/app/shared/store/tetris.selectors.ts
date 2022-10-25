import { createFeatureSelector, createSelector } from "@ngrx/store";
import { fieldHellper } from "../helpers/fieldmatrix.helper";
import { getPieceMatrix } from "../helpers/piece.helper";
import { PieceModel } from "../models/piece.model";
import { TetrisFsmState } from "../models/tetris-fsm-state.enum";
import { TetrisModel } from "../models/tetris.model";

const selectRoot = createFeatureSelector<TetrisModel>('tetris');

const selectNextShape = createSelector(selectRoot, (root) => root.nextPieceShape );
const selectNextDirection = createSelector(selectRoot, (root) => root.nextPieceDirection );

const selectPlayfield = createSelector(selectRoot, (root) => root.playfieldMatrix);

const selectCurrentPiece = createSelector(selectRoot, 
  (root) => {
      return new PieceModel(root.currentLeft, root.currentTop, root.currentPieceShape, root.currentPieceDirection);
    });

const selectFullRowsCount = createSelector(selectPlayfield,
  (field) => fieldHellper.countFullRows(field));
  
export const selectStatus = createSelector(selectRoot, (root) => root.status );
export const selectScore = createSelector(selectRoot, (root) => root.score );
export const selectSpeedLevel = createSelector(selectRoot, (root) => root.speedLevel );

export const selectNextPieceMatrix = createSelector(selectNextShape, selectNextDirection, 
  (shape, direction) => getPieceMatrix(shape, direction));
  
export const selectFildeView = createSelector(selectPlayfield, selectCurrentPiece,
  (field, piece) => fieldHellper.mergeCurrentPiece(field, piece));


export const selectShouldRemove = createSelector(selectFullRowsCount, selectStatus,
  (has, status) => has && status === TetrisFsmState.GameStarted);

export const selectGameRunning = createSelector(selectStatus, selectShouldRemove,
  (status, should) => !should && (status === TetrisFsmState.GameStarted || status === TetrisFsmState.Paused || status === TetrisFsmState.GameOver));

export const selectHighestScore = createSelector(selectRoot, (root) => root.highestScore);