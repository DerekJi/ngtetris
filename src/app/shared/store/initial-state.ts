import { Constants } from "../consts";
import { PieceDirection } from "../models/piece-direction.enum";
import { PieceShape } from "../models/piece-shape.enum";
import { TetrisFsmState } from "../models/tetris-fsm-state.enum";
import { TetrisModel } from "../models/tetris.model";
import { initialFieldMatrix } from "./initial-field-matrix";

export const initialState: TetrisModel = {
  status: TetrisFsmState.NotStarted,
  score: 0,
  speedLevel: 0,

  nextPieceShape: undefined,
  nextPieceDirection: undefined,

  currentPieceShape: undefined,
  currentPieceDirection: undefined,

  currentLeft: 3,
  currentTop: -2,

  soundsOn: true,

  playfieldMatrix: initialFieldMatrix
};