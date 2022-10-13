import { PieceDirection } from "./piece-direction.enum";
import { PieceShape } from "./piece-shape.enum";
import { TetrisFsmState } from "./tetris-fsm-state.enum";

export interface TetrisModel {
  status: TetrisFsmState,

  score: number,
  speedLevel: number,

  currentPieceShape?: PieceShape,
  currentPieceDirection?: PieceDirection,

  currentLeft: number;
  currentTop: number;

  nextPieceShape?: PieceShape,
  nextPieceDirection?: PieceDirection,

  playfieldMatrix: number[][],
}