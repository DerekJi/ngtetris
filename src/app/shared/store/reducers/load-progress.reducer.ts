import { tetrisStorage } from "../../helpers/storage.helper";
import { TetrisModel } from "../../models/tetris.model";
import { initialTetrisState } from "../initial-state";

export function loadProgressReducer(state: TetrisModel): TetrisModel {
  var savedProgress = tetrisStorage.load();
  return savedProgress ?? {...initialTetrisState};
}