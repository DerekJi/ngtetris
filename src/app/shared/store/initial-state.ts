import { Constants } from "../consts";
import { AudioModel } from "../models/audio.model";
import { TetrisFsmState } from "../models/tetris-fsm-state.enum";
import { TetrisModel } from "../models/tetris.model";
import { initialFieldMatrix } from "./initial-field-matrix";

export const initialTetrisState: TetrisModel = {
  status: TetrisFsmState.Ready,

  score: 0,
  speedLevel: Constants.MinSpeedLevel,

  nextPieceShape: undefined,
  nextPieceDirection: undefined,

  currentPieceShape: undefined,
  currentPieceDirection: undefined,

  currentLeft: 3,
  currentTop: -2,

  playfieldMatrix: initialFieldMatrix
};

export const initialAudioState: AudioModel = {
  soundsOn: true,
  audioBuffer: null,
  audioContext: null,
  source: null,
};