import { canMoveDown, canMoveLeft, canMoveRight, canRotateAntiClockwise, canRotateClockwise } from "../helpers/collision-detection.helper";
import { getMoveDownModel, getMoveLeftModel, getMoveRightModel, getRotateAntiClockwiseModel, getRotateClockwiseModel } from "../helpers/moves.helper";
import { getCurrentPiece } from "../helpers/piece.helper";
import { MovementEvent } from "../models/movement.enum";
import { PieceModel } from "../models/piece.model";
import { TetrisFsmState } from "../models/tetris-fsm-state.enum";
import { TetrisModel } from "../models/tetris.model";

export function movementReducer(state: TetrisModel, { movement }: { movement: MovementEvent}): TetrisModel {
  console.log(`Movement Reducer: ${movement}`);
  switch (movement) {
    case MovementEvent.Down:
      return moveDownReducer(state);
    case MovementEvent.Drop:
      return dropReducer(state);
    case MovementEvent.Left:
      return moveLeftReducer(state);
    case MovementEvent.Right:
      return moveRightReducer(state);
    case MovementEvent.RotateClockwise:
      return rotateClockwiseReducer(state);
    case MovementEvent.RotateAntiClockwise:
      return rotateAntiClockwiseReducer(state);
  }
}

/**
 * Move Left
 * @param state 
 * @returns 
 */
export function moveLeftReducer(state: TetrisModel): TetrisModel {
  if (state.status === TetrisFsmState.GameStarted) {
    var currentPiece: PieceModel = getCurrentPiece(state);
    if (canMoveLeft(state.playfieldMatrix, currentPiece)) {
      var movedPiece = getMoveLeftModel(currentPiece);
      return Object.assign({} as TetrisModel, state, {
        currentLeft: movedPiece.left,
      });
    }
  }

  // else: do nothing
  return Object.assign({} as TetrisModel, state);
}

/**
 * Move Right
 * @param state 
 * @returns 
 */
export function moveRightReducer(state: TetrisModel): TetrisModel {
  if (state.status === TetrisFsmState.GameStarted) {
    var currentPiece: PieceModel = getCurrentPiece(state);
    if (canMoveRight(state.playfieldMatrix, currentPiece)) {
      var movedPiece = getMoveRightModel(currentPiece);
      return Object.assign({} as TetrisModel, state, {
        currentLeft: movedPiece.left,
      });
    }
  }

  // else: do nothing
  return Object.assign({} as TetrisModel, state);
}

/**
 * Move Down (1 step)
 * @param state 
 * @returns 
 */
export function moveDownReducer(state: TetrisModel): TetrisModel {
  if (state.status === TetrisFsmState.GameStarted) {
    var currentPiece: PieceModel = getCurrentPiece(state);
    if (canMoveDown(state.playfieldMatrix, currentPiece)) {
      var movedPiece = getMoveDownModel(currentPiece);
      return Object.assign({} as TetrisModel, state, {
        currentTop: movedPiece.top,
      });
    }
  }

  // else: do nothing
  return Object.assign({} as TetrisModel, state);
}

/**
 * Drop to the bottom
 * @param state 
 * @returns 
 */
export function dropReducer(state: TetrisModel): TetrisModel {
  if (state.status === TetrisFsmState.GameStarted) {
    var currentPiece: PieceModel = getCurrentPiece(state);
    while (canMoveDown(state.playfieldMatrix, currentPiece)) {
      currentPiece = getMoveDownModel(currentPiece);
    }
    return Object.assign({} as TetrisModel, state, {
      currentTop: currentPiece.top,
    });
  }

  // else: do nothing
  return Object.assign({} as TetrisModel, state);
} 

/**
 * Rotate the current piece clockewisely
 * @param state 
 * @returns 
 */
export function rotateClockwiseReducer(state: TetrisModel): TetrisModel {
  if (state.status === TetrisFsmState.GameStarted) {
    var currentPiece: PieceModel = getCurrentPiece(state);
    if (canRotateClockwise(state.playfieldMatrix, currentPiece)) {
      var movedPiece = getRotateClockwiseModel(currentPiece);
      return Object.assign({} as TetrisModel, state, {
        currentPieceDirection: movedPiece.direction
      });
    }
  }

  // else: do nothing
  return Object.assign({} as TetrisModel, state);
}

/**
 * Rotate the current piece anti-clockwisely
 */
export function rotateAntiClockwiseReducer(state: TetrisModel): TetrisModel {
  if (state.status === TetrisFsmState.GameStarted) {
    var currentPiece: PieceModel = getCurrentPiece(state);
    if (canRotateAntiClockwise(state.playfieldMatrix, currentPiece)) {
      var movedPiece = getRotateAntiClockwiseModel(currentPiece);
      return Object.assign({} as TetrisModel, state, {
        currentPieceDirection: movedPiece.direction
      });
    }
  }

  // else: do nothing
  return Object.assign({} as TetrisModel, state);
}