import { immutable } from "../../helpers/immutable.helper";
import { AudioModel } from "../../models/audio.model";

export function toggleSoundReducer(state: AudioModel): AudioModel {
  return immutable.map(state, {
    soundsOn: !state.soundsOn
  });
}