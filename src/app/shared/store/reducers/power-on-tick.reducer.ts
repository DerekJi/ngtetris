import { Constants } from "../../consts";
import { initField, setFieldOccupiedBy } from "../../helpers/fieldmatrix.helper";
import { immutable } from "../../helpers/immutable.helper";
import { Position } from "../../models/position.model";
import { TetrisFsmState } from "../../models/tetris-fsm-state.enum";
import { TetrisModel } from "../../models/tetris.model";
import { initialState } from "../initial-state";

export function powerOnTickReducer(state: TetrisModel): TetrisModel {
  if (state.status === TetrisFsmState.PoweredOn) {
    if (state.powerOnCount < 2 * Constants.PlayfieldHeight) {
      var field = initField(Constants.PlayfieldWidth, Constants.PlayfieldHeight, 0);
      var occupied: Position[] = [];
      for (var j = 0; j < Math.abs(Constants.PlayfieldHeight - state.powerOnCount); j++){
        for (var i = 0; i < Constants.PlayfieldWidth; i++) {
          occupied.push(new Position(i, Math.abs(Constants.PlayfieldHeight - j - 1)));
        }
      }
      setFieldOccupiedBy(field, occupied);
      return immutable.map(state, {
        playfieldMatrix: field,
        powerOnCount: state.powerOnCount + 1,
      });
    } else {
      return immutable.map(initialState, {
        status: TetrisFsmState.Ready,
      });
    }
  }

  return { ...state };
}
