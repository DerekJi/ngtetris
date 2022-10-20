import { immutable } from "../../helpers/immutable.helper";
import { tetrisStorage } from "../../helpers/storage.helper";
import { TetrisFsmState } from "../../models/tetris-fsm-state.enum";
import { TetrisModel } from "../../models/tetris.model";
import { initialTetrisState } from "../initial-state";

export function powerOnReducer(state: TetrisModel): TetrisModel {
  return setStatusReducer(initialTetrisState, { status: TetrisFsmState.PoweredOn });
}

export function powerOffReducer(state: TetrisModel): TetrisModel {
  return setStatusReducer(initialTetrisState, { status: TetrisFsmState.PoweredOff });
}

function setStatusReducer(state: TetrisModel, { status }: {status: TetrisFsmState}): TetrisModel {
  tetrisStorage.clear();
  return immutable.map(state, { status });
}