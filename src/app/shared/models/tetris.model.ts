import { PieceDirection } from "./piece-direction.enum";
import { PieceShape } from "./piece-shape.enum";
import { TetrisFsmState } from "./tetris-fsm-state.enum";

export interface TetrisModel {
  status: TetrisFsmState,

  powerOnCount: number,

  score: number,
  speedLevel: number,

  currentPieceShape?: PieceShape,
  currentPieceDirection?: PieceDirection,

  currentLeft: number;
  currentTop: number;

  nextPieceShape?: PieceShape,
  nextPieceDirection?: PieceDirection,

  soundsOn: boolean,
  audioBuffer?: AudioBuffer | null;
  audioContext: AudioContext;

  playfieldMatrix: number[][],
}