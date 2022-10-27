import { immutable } from "../../helpers/immutable.helper";
import { tetrisStorage } from "../../helpers/storage.helper";
import { TetrisFsmState } from "../../models/tetris-fsm-state.enum";
import { TetrisModel } from "../../models/tetris.model";
import { initialTetrisState } from "../initial-state";

export function resetReducer(state: TetrisModel): TetrisModel {
  tetrisStorage.clear();

  var highestScore = tetrisStorage.loadHighestScore();
  if (state.status !== TetrisFsmState.PoweredOff) {
    return immutable.map(initialTetrisState, {
      status: TetrisFsmState.PoweredOn,
      highestScore,
    });
  }

  return { ...state };
}