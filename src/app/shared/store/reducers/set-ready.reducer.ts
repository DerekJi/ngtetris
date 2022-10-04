import { immutable } from "../../helpers/immutable.helper";
import { TetrisFsmState } from "../../models/tetris-fsm-state.enum";
import { TetrisModel } from "../../models/tetris.model";
import { initialState } from "../initial-state";

export function setReadyReducer(state: TetrisModel): TetrisModel {
  return immutable.map(initialState, {
    status: TetrisFsmState.Ready,
    audioBuffer: state.audioBuffer,
    audioContext: state.audioContext,
  });
}