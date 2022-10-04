import { immutable } from "../../helpers/immutable.helper";
import { TetrisModel } from "../../models/tetris.model";

export function toggleSoundReducer(state: TetrisModel): TetrisModel {
  return immutable.map(state, {
    soundsOn: !state.soundsOn
  });
}