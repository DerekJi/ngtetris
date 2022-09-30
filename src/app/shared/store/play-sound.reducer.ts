import { MovementEvent } from "../models/movement.enum";
import { TetrisFsmState } from "../models/tetris-fsm-state.enum";
import { TetrisModel } from "../models/tetris.model";

export function playSoundReducer(state: TetrisModel, { movement }: { movement: MovementEvent}): TetrisModel {
  if (state.soundsOn === true && [TetrisFsmState.GameStarted].includes(state.status))
  {
    console.log(`Play sound for ${movement}`);
  }
  
  return Object.assign({}, state);
}