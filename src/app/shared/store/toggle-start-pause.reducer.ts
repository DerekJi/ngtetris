import { randomPieceDirection, randomPieceShape } from "../helpers/piece.helper";
import { TetrisFsmState } from "../models/tetris-fsm-state.enum";
import { TetrisModel } from "../models/tetris.model";

export function toggleStartPauseReducer(state: TetrisModel): TetrisModel {
  if (TetrisFsmState.NotStarted === state.status)
  {
    return Object.assign({} as TetrisModel, state, {
      status: TetrisFsmState.GameStarted ,
      currentPieceShape: randomPieceShape(),
      currentPieceDirection: randomPieceDirection(),
      nextPieceShape: randomPieceShape(),
      nextPieceDirection: randomPieceDirection(),
    });
  }

  if (TetrisFsmState.GameStarted === state.status)
  {
    return Object.assign({} as TetrisModel, state, {
      status: TetrisFsmState.Paused,
    });
  }

  if (TetrisFsmState.Paused === state.status)
  {
    return Object.assign({} as TetrisModel, state, {
      status: TetrisFsmState.GameStarted,
    });
  }
  
  return Object.assign({}, state);
}