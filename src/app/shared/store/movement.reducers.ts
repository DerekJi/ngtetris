import { canMoveDown, collided } from "../helpers/collision-detection.helper";
import { mergeCurrentPiece } from "../helpers/fieldmatrix.helper";
import { getMoveDownModel, getMoveLeftModel, getMoveRightModel, getRotateAntiClockwiseModel, getRotateClockwiseModel } from "../helpers/moves.helper";
import { getCurrentPiece, randomPieceDirection, randomPieceShape } from "../helpers/piece.helper";
import { MovementEvent } from "../models/movement.enum";
import { PieceModel } from "../models/piece.model";
import { TetrisFsmState } from "../models/tetris-fsm-state.enum";
import { TetrisModel } from "../models/tetris.model";
import { initialState } from "./initial-state";

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
    var movedPiece = getMoveLeftModel(currentPiece);
    var cannotMove = collided(state.playfieldMatrix, movedPiece);
    if (cannotMove) {
      if (!canMoveDown(state.playfieldMatrix, currentPiece)) {
        return reachedBottomReducer(state);
      }
    } else {      
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
    var movedPiece = getMoveRightModel(currentPiece);
    var cannotMove = collided(state.playfieldMatrix, movedPiece);
    if (cannotMove) {
      if (!canMoveDown(state.playfieldMatrix, currentPiece)) {
        return reachedBottomReducer(state);
      }
    } else {      
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
    var movedPiece = getMoveDownModel(currentPiece);
    var cannotMove = collided(state.playfieldMatrix, movedPiece);
    if (cannotMove) {   
      return reachedBottomReducer(state);  
    } else {
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
    var movedPiece = getRotateClockwiseModel(currentPiece);
    var cannotMove = collided(state.playfieldMatrix, movedPiece);
    if (!cannotMove) {    
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
    var movedPiece = getRotateAntiClockwiseModel(currentPiece);
    var cannotMove = collided(state.playfieldMatrix, movedPiece);
    if (!cannotMove) {    
      return Object.assign({} as TetrisModel, state, {
        currentPieceDirection: movedPiece.direction
      });
    }
  }

  // else: do nothing
  return Object.assign({} as TetrisModel, state);
}

function reachedBottomReducer(state: TetrisModel): TetrisModel {
  if (state.status !== TetrisFsmState.GameStarted) {
    return Object.assign({} as TetrisModel, state);
  }

  var currentPiece: PieceModel = getCurrentPiece(state);
  var field = mergeCurrentPiece(state.playfieldMatrix, currentPiece);
  return Object.assign({} as TetrisModel, state, {
    playfieldMatrix: field,
    currentTop: initialState.currentTop,
    currentLeft: initialState.currentLeft,
    currentPieceShape: state.nextPieceShape,
    currentPieceDirection: state.nextPieceDirection,
    nextPieceShape: randomPieceShape(),
    nextPieceDirection: randomPieceDirection(),
  });   
}