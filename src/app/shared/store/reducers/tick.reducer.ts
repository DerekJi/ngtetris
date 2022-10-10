import { fieldHellper } from "../../helpers/fieldmatrix.helper";
import { tetrisStorage } from "../../helpers/storage.helper";
import { TetrisFsmState } from "../../models/tetris-fsm-state.enum";
import { TetrisModel } from "../../models/tetris.model";
import { moveDownReducer } from "./movement.reducers";

export function tickReducer(state: TetrisModel): TetrisModel {
    if (state.status === TetrisFsmState.GameStarted) {
        if (fieldHellper.countFullRows(state.playfieldMatrix) < 1) {
            var newState = moveDownReducer(state);
            tetrisStorage.save(newState);
            return newState;
        }
    }

    if (state.status !== TetrisFsmState.GameStarted && state.status !== TetrisFsmState.Paused) {
        tetrisStorage.clear();
    }

    return { ...state };
  }