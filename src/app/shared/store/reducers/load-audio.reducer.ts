import { AudioModel } from "../../models/audio.model";

export function loadAudioReducer(state: AudioModel, { context, buffer }: { context: AudioContext, buffer: AudioBuffer }): AudioModel {
  if (state.audioBuffer != null && state.audioBuffer.length > 0) {
    return { ...state };
  }

  var props: Partial<AudioModel> = {
    audioBuffer: buffer,
    audioContext: context,
  };
  return { ...state, ...props };
}