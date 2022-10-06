import { fieldHellper } from "../../helpers/fieldmatrix.helper";
import { TetrisFsmState } from "../../models/tetris-fsm-state.enum";
import { TetrisModel } from "../../models/tetris.model";
import { moveDownReducer } from "./movement.reducers";

export function tickReducer(state: TetrisModel): TetrisModel {
    if (state.status === TetrisFsmState.GameStarted) {
        if (fieldHellper.countFullRows(state.playfieldMatrix) < 1) {
            return moveDownReducer(state);
        }
    }

    return { ...state };
  }