import { audio } from "../../helpers/audio.helper";
import { immutable } from "../../helpers/immutable.helper";
import { TetrisFsmState } from "../../models/tetris-fsm-state.enum";
import { TetrisModel } from "../../models/tetris.model";
import { initialState } from "../initial-state";

export function togglePowerOnOffReducer(state: TetrisModel): TetrisModel {
  if (TetrisFsmState.PoweredOff === state.status)
  {
    var source = audio.getSource(state);
    if (source) {
      audio.playGameStart(source);
    }
    return immutable.map(state, {
      status: TetrisFsmState.PoweredOn,
    });
  } 

  return immutable.map(initialState, {
    audioBuffer: state.audioBuffer,
    audioContext: state.audioContext,
  });
}