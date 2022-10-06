import { createReducer, on } from "@ngrx/store";
import { initialState } from "./initial-state";
import { loadAudioReducer } from "./reducers/load-audio.reducer";
import { movementReducer } from "./reducers/movement.reducers";
import { playClearSoundReducer, playMovementSoundReducer, playStatusSoundReducer } from "./reducers/play-sound.reducer";
import { resetReducer } from "./reducers/reset.reducer";
import { actions } from "./tetris.actions";
import { tickReducer } from "./reducers/tick.reducer";
import { toggleSoundReducer } from "./reducers/toggle-sound.reducer";
import { toggleStartPauseReducer } from "./reducers/toggle-start-pause.reducer";
import { setReadyReducer } from "./reducers/set-ready.reducer";
import { TetrisModel } from "../models/tetris.model";
import { TetrisFsmState } from "../models/tetris-fsm-state.enum";
import { togglePowerOnOffReducer } from "./reducers/toggle-power-on-off.reducer";
import { removeReducer } from "./reducers/remove.reducer";

export const tetrisReducer = createReducer(initialState,

  on(actions.PowerOn, togglePowerOnOffReducer),

  on(actions.PlayStatusSound, (state: TetrisModel): TetrisModel => playStatusSoundReducer(state, { status: TetrisFsmState.PoweredOn })),

  on(actions.PlayClearSound, playClearSoundReducer),

  on(actions.SetReady, setReadyReducer),

  on(actions.LoadAudio, loadAudioReducer),

  on(actions.Reset, resetReducer),

  on(actions.ToggleSound, toggleSoundReducer),

  on(actions.ToggleStartPause, toggleStartPauseReducer),

  on(actions.Movement, playMovementSoundReducer),

  on(actions.Movement, movementReducer),

  on(actions.Tick, tickReducer),

  on(actions.RemoveFullRows, removeReducer),
);