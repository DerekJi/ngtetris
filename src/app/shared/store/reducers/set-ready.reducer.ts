import { immutable } from "../../helpers/immutable.helper";
import { TetrisFsmState } from "../../models/tetris-fsm-state.enum";
import { TetrisModel } from "../../models/tetris.model";
import { initialTetrisState } from "../initial-state";

export function setReadyReducer(state: TetrisModel): TetrisModel {
  return immutable.map(initialTetrisState, {
    status: TetrisFsmState.Ready,
  });
}