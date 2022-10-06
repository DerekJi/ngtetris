import { fieldHellper } from "../../helpers/fieldmatrix.helper";
import { immutable } from "../../helpers/immutable.helper";
import { score } from "../../helpers/score.helper";
import { TetrisFsmState } from "../../models/tetris-fsm-state.enum";
import { TetrisModel } from "../../models/tetris.model";

export function removeReducer(state: TetrisModel): TetrisModel {
  if (state.status === TetrisFsmState.GameStarted) {
    var count = fieldHellper.countFullRows(state.playfieldMatrix);
    if (count > 0) {
      var updatedField = fieldHellper.removeFullRows(state.playfieldMatrix);
      return immutable.map(state, {
        score: score.clear(state.score, count),
        playfieldMatrix: updatedField
      });
    }
  }

  return { ...state };
}

