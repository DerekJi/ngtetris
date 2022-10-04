import { createReducer, on } from "@ngrx/store";
import { initialState } from "./initial-state";
import { loadAudioReducer } from "./reducers/load-audio.reducer";
import { movementReducer } from "./reducers/movement.reducers";
import { playMovementSoundReducer, playStatusSoundReducer } from "./reducers/play-sound.reducer";
import { resetReducer } from "./reducers/reset.reducer";
import { LoadAudioAction, MovementAction, PowerOnAction, PowerOnTickAction, ResetAction, SetReadyAction, TickAction, ToggleSoundAction, ToggleStartPauseAction } from "./tetris.actions";
import { tickReducer } from "./reducers/tick.reducer";
import { toggleSoundReducer } from "./reducers/toggle-sound.reducer";
import { toggleStartPauseReducer } from "./reducers/toggle-start-pause.reducer";
import { setReadyReducer } from "./reducers/set-ready.reducer";
import { powerOnTickReducer } from "./reducers/power-on-tick.reducer";
import { TetrisModel } from "../models/tetris.model";
import { TetrisFsmState } from "../models/tetris-fsm-state.enum";
import { togglePowerOnOffReducer } from "./reducers/toggle-power-on-off.reducer";

export const tetrisReducer = createReducer(initialState,

  on(PowerOnAction, togglePowerOnOffReducer),

  // on(PowerOnTickAction, powerOnTickReducer),

  on(PowerOnTickAction, (state: TetrisModel): TetrisModel => playStatusSoundReducer(state, { status: TetrisFsmState.PoweredOn })),

  on(SetReadyAction, setReadyReducer),

  on(LoadAudioAction, loadAudioReducer),

  on(ResetAction, resetReducer),

  on(ToggleSoundAction, toggleSoundReducer),

  on(ToggleStartPauseAction, toggleStartPauseReducer),

  on(MovementAction, playMovementSoundReducer),

  on(MovementAction, movementReducer),

  on(TickAction, tickReducer),
);