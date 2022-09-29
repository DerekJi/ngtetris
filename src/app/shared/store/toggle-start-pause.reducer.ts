import { TetrisFsmState } from "../models/tetris-fsm-state.enum";
import { TetrisModel } from "../models/tetris.model";

export function toggleStartPauseReducer(state: TetrisModel): TetrisModel {
  if ([TetrisFsmState.GameStarted, TetrisFsmState.Paused].includes(state.status))
  {
    var newStatus = state.status === TetrisFsmState.GameStarted ? TetrisFsmState.Paused : TetrisFsmState.GameStarted;
    return Object.assign({} as TetrisModel, state, {
      status: newStatus,
    });
  }
  
  return Object.assign({}, state);
}