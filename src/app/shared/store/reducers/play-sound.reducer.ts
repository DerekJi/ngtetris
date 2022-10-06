import { audio } from "../../helpers/audio.helper";
import { MovementEvent } from "../../models/movement.enum";
import { TetrisFsmState } from "../../models/tetris-fsm-state.enum";
import { TetrisModel } from "../../models/tetris.model";

export function playMovementSoundReducer(state: TetrisModel, { movement }: { movement: MovementEvent}): TetrisModel {
  if (state.soundsOn === true && [TetrisFsmState.GameStarted].includes(state.status))
  {
    var source = audio.getSource(state);
    if (source) {
      switch (movement) {
        case MovementEvent.Down:
        case MovementEvent.Left:
        case MovementEvent.Right:
          audio.playMove(source); break;
        case MovementEvent.RotateClockwise:
        case MovementEvent.RotateAntiClockwise:
          audio.playRotate(source); break;
        case MovementEvent.Drop:
          audio.playDrop(source); break;
      }
    }    
  }
  
  return {...state};
}

export function playStatusSoundReducer(state: TetrisModel, { status }: { status: TetrisFsmState }): TetrisModel {
  if (state.soundsOn === true) {
    var source = audio.getSource(state);
    if (source) {
      switch (state.status) {
        case TetrisFsmState.PoweredOn:
          if (state.powerOnCount < 2) {
            audio.playGameStart(source); 
          }
          break;
        case TetrisFsmState.GameOver:
          audio.playGameOver(source); break;
      }
    }
  }

  return {...state};
}

export function playClearSoundReducer(state: TetrisModel): TetrisModel {
  if (state.soundsOn === true) {
    var source = audio.getSource(state);
    if (source) {
      audio.playClear(source); 
    }
  }

  return {...state};
}