import { audio } from "../../helpers/audio.helper";
import { immutable } from "../../helpers/immutable.helper";
import { AudioModel } from "../../models/audio.model";
import { MovementEvent } from "../../models/movement.enum";
import { TetrisFsmState } from "../../models/tetris-fsm-state.enum";
import { initialAudioState } from "../initial-state";

export function playMovementSoundReducer(state: AudioModel, { movement }: { movement: MovementEvent}): AudioModel {
  var source = audio.getSource(state);
  if (state.soundsOn === true) {
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

export function playStatusSoundReducer(state: AudioModel, { status }: { status: TetrisFsmState }): AudioModel {
  var source = audio.getSource(state);
  if (state.soundsOn === true) {
    if (source) {
      switch (status) {
        case TetrisFsmState.PoweredOn:
          audio.playGameStart(source); 
          break;
        case TetrisFsmState.GameOver:
          audio.playGameOver(source); 
          break;
      }
    }
  }

  return immutable.map(state, { source });
}

export function playGameStartReducer(state: AudioModel) : AudioModel {
  return playStatusSoundReducer(state, { status: TetrisFsmState.PoweredOn });
}

export function powerOffReducer(state: AudioModel) : AudioModel {
  var source = state.source;
  if (source) {
    source.stop();
  }
  return {...initialAudioState};
}

export function playClearSoundReducer(state: AudioModel): AudioModel {
  var source = audio.getSource(state);
  if (state.soundsOn === true) {
    if (source) {
      audio.playClear(source); 
    }
  }

  return immutable.map(state, { source });
}