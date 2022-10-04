import { TetrisFsmState } from "../models/tetris-fsm-state.enum";
import { TetrisModel } from "../models/tetris.model";
import { initialFieldMatrix } from "./initial-field-matrix";

export const initialState: TetrisModel = {
  status: TetrisFsmState.PoweredOff,

  powerOnCount: 0,

  score: 0,
  speedLevel: 0,

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