import { TetrisModel } from "../../models/tetris.model";

export function loadAudioReducer(state: TetrisModel, { context, buffer }: { context: AudioContext, buffer: AudioBuffer }): TetrisModel {
  if (state.audioBuffer != null && state.audioBuffer.length > 0) {
    return { ...state };
  }

  var props: Partial<TetrisModel> = {
    audioBuffer: buffer,
    audioContext: context,
  };
  return { ...state, ...props };
}