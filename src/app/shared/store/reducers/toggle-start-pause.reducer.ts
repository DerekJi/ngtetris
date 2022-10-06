import { fieldHellper } from "../../helpers/fieldmatrix.helper";
import { immutable } from "../../helpers/immutable.helper";
import { randomPieceDirection, randomPieceShape } from "../../helpers/piece.helper";
import { TetrisFsmState } from "../../models/tetris-fsm-state.enum";
import { TetrisModel } from "../../models/tetris.model";

export function toggleStartPauseReducer(state: TetrisModel): TetrisModel {
  if (TetrisFsmState.Ready === state.status)
  {
    var currentShape = randomPieceShape();
    var currentDirection = randomPieceDirection();
    var initialPieceTop = fieldHellper.initialPieceTop(currentShape, currentDirection);
    return immutable.map(state, {
      status: TetrisFsmState.GameStarted ,
      currentTop: initialPieceTop,
      currentPieceShape: currentShape,
      currentPieceDirection: currentDirection,
      nextPieceShape: randomPieceShape(),
      nextPieceDirection: randomPieceDirection(),
    });
  }

  if (TetrisFsmState.GameStarted === state.status)
  {
    return immutable.map(state, {
      status: TetrisFsmState.Paused,
    });
  }

  if (TetrisFsmState.Paused === state.status)
  {
    return immutable.map(state, {
      status: TetrisFsmState.GameStarted,
    });
  }
  
  return { ...state };
}