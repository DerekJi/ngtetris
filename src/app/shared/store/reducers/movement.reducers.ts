import { audio } from "../../helpers/audio.helper";
import { canMoveDown, collided } from "../../helpers/collision-detection.helper";
import { fieldHellper } from "../../helpers/fieldmatrix.helper";
import { immutable } from "../../helpers/immutable.helper";
import { getMoveDownModel, getMoveLeftModel, getMoveRightModel, getRotateAntiClockwiseModel, getRotateClockwiseModel } from "../../helpers/moves.helper";
import { getCurrentPiece, getPieceMatrix, getPieceTop, randomPieceDirection, randomPieceShape } from "../../helpers/piece.helper";
import { score } from "../../helpers/score.helper";
import { tetrisStorage } from "../../helpers/storage.helper";
import { MovementEvent } from "../../models/movement.enum";
import { PieceModel } from "../../models/piece.model";
import { TetrisFsmState } from "../../models/tetris-fsm-state.enum";
import { TetrisModel } from "../../models/tetris.model";
import { initialTetrisState } from "../initial-state";

export function movementReducer(state: TetrisModel, { movement }: { movement: MovementEvent}): TetrisModel {
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
      return immutable.map(state, {
        currentLeft: movedPiece.left,
      });
    }
  }

  // else: do nothing
  return { ...state };
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
      return immutable.map(state, {
        currentLeft: movedPiece.left,
      });
    }
  }

  // else: do nothing
  return { ...state };
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
      return immutable.map(state, {
        currentTop: movedPiece.top,
      });
    }
  }

  // else: do nothing
  return { ...state };
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
    return immutable.map(state, {
      currentTop: currentPiece.top,
    });
  }

  // else: do nothing
  return { ...state };
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
      return immutable.map(state, {
        currentPieceDirection: movedPiece.direction
      });
    }
  }

  // else: do nothing
  return { ...state };
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
      return immutable.map(state, {
        currentPieceDirection: movedPiece.direction
      });
    }
  }

  // else: do nothing
  return { ...state };
}

function reachedBottomReducer(state: TetrisModel): TetrisModel {
  if (state.status !== TetrisFsmState.GameStarted) {
    return { ...state };
  }

  var currentPiece: PieceModel = getCurrentPiece(state);
  var field = fieldHellper.mergeCurrentPiece(state.playfieldMatrix, currentPiece);

  // Check 'GAME OVER'
  if (state.currentTop < 1) {
    var pieceMatrix = getPieceMatrix(state.currentPieceShape, state.currentPieceDirection);
    var minTop = getPieceTop(pieceMatrix);
    if (minTop === 0) {
      var newScore = score.onPieceToBottom(state.score);
      tetrisStorage.saveHighestScore(newScore);
      var highestScore = tetrisStorage.loadHighestScore();
      return immutable.map(state, {
        status: TetrisFsmState.GameOver,
        playfieldMatrix: field,
        currentTop: 0,
        currentLeft: initialTetrisState.currentLeft,
        currentPieceShape: undefined,
        currentPieceDirection: undefined,
        nextPieceShape: randomPieceShape(),
        nextPieceDirection: randomPieceDirection(),
        score: newScore,
        highestScore,
      });   
    }
  }
  
  var initialPieceTop = state.nextPieceShape && state.nextPieceDirection ? fieldHellper.initialPieceTop(state.nextPieceShape, state.nextPieceDirection) : -1;
  
  return immutable.map(state, {
    playfieldMatrix: field,
    currentTop: initialPieceTop,
    currentLeft: initialTetrisState.currentLeft,
    currentPieceShape: state.nextPieceShape,
    currentPieceDirection: state.nextPieceDirection,
    nextPieceShape: randomPieceShape(),
    nextPieceDirection: randomPieceDirection(),
    score: score.onPieceToBottom(state.score),
  });   
}