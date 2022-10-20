import { Constants } from "../../consts";
import { immutable } from "../../helpers/immutable.helper";
import { TetrisModel } from "../../models/tetris.model";

export function speedLevelReducer(state: TetrisModel): TetrisModel {
  return immutable.map(state, {
    speedLevel: state.speedLevel < Constants.MaxSpeedLevel ? state.speedLevel + 1 : Constants.MinSpeedLevel,
  });
}