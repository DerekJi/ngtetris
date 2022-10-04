import { audio } from "../../helpers/audio.helper";
import { immutable } from "../../helpers/immutable.helper";
import { TetrisFsmState } from "../../models/tetris-fsm-state.enum";
import { TetrisModel } from "../../models/tetris.model";
import { initialState } from "../initial-state";

export function resetReducer(state: TetrisModel): TetrisModel {
  if (state.status !== TetrisFsmState.PoweredOff) {
    var source = audio.getSource(state);
    if (source) {
      audio.playGameStart(source);
    }
    return immutable.map(initialState, {
      status: TetrisFsmState.PoweredOn,
      soundsOn: state.soundsOn,
      audioBuffer: state.audioBuffer,
      audioContext: state.audioContext,
    });
  }

  return { ...state };
}