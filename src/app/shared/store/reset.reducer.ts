import { TetrisModel } from "../models/tetris.model";
import { initialState } from "./initial-state";

export function resetReducer(state: TetrisModel): TetrisModel {
  return Object.assign({} as TetrisModel, initialState);
}