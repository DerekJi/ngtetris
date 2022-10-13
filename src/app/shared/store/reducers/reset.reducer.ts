import { immutable } from "../../helpers/immutable.helper";
import { TetrisFsmState } from "../../models/tetris-fsm-state.enum";
import { TetrisModel } from "../../models/tetris.model";
import { initialTetrisState } from "../initial-state";

export function resetReducer(state: TetrisModel): TetrisModel {
  if (state.status !== TetrisFsmState.PoweredOff) {
    return immutable.map(initialTetrisState, {
      status: TetrisFsmState.PoweredOn,
    });
  }

  return { ...state };
}