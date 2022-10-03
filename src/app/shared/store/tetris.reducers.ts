import { createReducer, on } from "@ngrx/store";
import { initialState } from "./initial-state";
import { movementReducer } from "./movement.reducers";
import { playSoundReducer } from "./play-sound.reducer";
import { resetReducer } from "./reset.reducer";
import { MovementAction, ResetAction, TickAction, ToggleSoundAction, ToggleStartPauseAction } from "./tetris.actions";
import { tickReducer } from "./tick.reducer";
import { toggleSoundReducer } from "./toggle-sound.reducer";
import { toggleStartPauseReducer } from "./toggle-start-pause.reducer";

export const tetrisReducer = createReducer(initialState,

  on(ResetAction, resetReducer),

  on(ToggleSoundAction, toggleSoundReducer),

  on(ToggleStartPauseAction, toggleStartPauseReducer),

  on(MovementAction, playSoundReducer),

  on(MovementAction, movementReducer),

  on(TickAction, tickReducer),
);