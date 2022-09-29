import { Constants } from "../consts";
import { PieceDirection } from "../models/piece-direction.enum";
import { PieceShape } from "../models/piece-shape.enum";
import { TetrisFsmState } from "../models/tetris-fsm-state.enum";
import { TetrisModel } from "../models/tetris.model";
import { initialFieldMatrix } from "./initial-field-matrix";

export const initialState: TetrisModel = {
  status: TetrisFsmState.GameStarted,
  score: 0,
  speedLevel: 0,

  nextPieceShape: PieceShape.J,
  nextPieceDirection: PieceDirection.LEFT,

  currentPieceShape: PieceShape.J,
  currentPieceDirection: PieceDirection.LEFT,

  currentLeft: 3,
  currentTop: Constants.PlayfieldHeight,

  soundsOn: false,

  playfieldMatrix: initialFieldMatrix
};