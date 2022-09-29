import { TetrisModel } from "../models/tetris.model";

export function toggleSoundReducer(state: TetrisModel): TetrisModel {
  return Object.assign({} as TetrisModel, state, {
    soundsOn: !state.soundsOn
  });
}