import { createReducer, on } from "@ngrx/store";
import { initialAudioState } from "./initial-state";
import { loadAudioReducer } from "./reducers/load-audio.reducer";
import { playClearSoundReducer, playGameStartReducer, playMovementSoundReducer, playStatusSoundReducer, powerOffReducer } from "./reducers/play-sound.reducer";
import { TetrisActions } from "./tetris.actions";
import { toggleSoundReducer } from "./reducers/toggle-sound.reducer";
import { AudioActions } from "./audio.actions";

export const audioReducer = createReducer(initialAudioState,

  on(TetrisActions.PowerOn, playGameStartReducer),
  on(TetrisActions.PowerOff, powerOffReducer),

  on(TetrisActions.Reset, playGameStartReducer),

  on(AudioActions.PlayStatusSound, playStatusSoundReducer),

  on(AudioActions.PlayClearSound, playClearSoundReducer),

  on(AudioActions.LoadAudio, loadAudioReducer),

  on(AudioActions.ToggleSound, toggleSoundReducer),

  on(TetrisActions.Movement, playMovementSoundReducer),

);