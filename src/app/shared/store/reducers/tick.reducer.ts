import { TetrisFsmState } from "../../models/tetris-fsm-state.enum";
import { TetrisModel } from "../../models/tetris.model";
import { moveDownReducer } from "./movement.reducers";

export function tickReducer(state: TetrisModel): TetrisModel {
    if (state.status === TetrisFsmState.GameStarted) {
        return moveDownReducer(state);
    }

    return { ...state };
  }