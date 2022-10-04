import { immutable } from "../../helpers/immutable.helper";
import { randomPieceDirection, randomPieceShape } from "../../helpers/piece.helper";
import { TetrisFsmState } from "../../models/tetris-fsm-state.enum";
import { TetrisModel } from "../../models/tetris.model";

export function toggleStartPauseReducer(state: TetrisModel): TetrisModel {
  if (TetrisFsmState.Ready === state.status)
  {
    return immutable.map(state, {
      status: TetrisFsmState.GameStarted ,
      currentPieceShape: randomPieceShape(),
      currentPieceDirection: randomPieceDirection(),
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