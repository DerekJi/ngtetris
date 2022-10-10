import { TetrisFsmState } from "../models/tetris-fsm-state.enum";
import { TetrisModel } from "../models/tetris.model";
import { initialFieldMatrix } from "./initial-field-matrix";

export const initialState: TetrisModel = {
  status: TetrisFsmState.Ready,

  score: 0,
  speedLevel: 1,

  nextPieceShape: undefined,
  nextPieceDirection: undefined,

  currentPieceShape: undefined,
  currentPieceDirection: undefined,

  currentLeft: 3,
  currentTop: -2,

  soundsOn: true,
  audioBuffer: null,
  audioContext: new AudioContext(),

  playfieldMatrix: initialFieldMatrix
};