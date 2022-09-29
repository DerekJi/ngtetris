import { createReducer, on } from "@ngrx/store";
import { initialState } from "./initial-state";
import { resetReducer } from "./reset.reducer";
import { ResetAction, ToggleSoundAction, ToggleStartPauseAction } from "./tetris.actions";
import { toggleSoundReducer } from "./toggle-sound.reducer";
import { toggleStartPauseReducer } from "./toggle-start-pause.reducer";

export const tetrisReducer = createReducer(initialState,

  on(ResetAction, resetReducer),

  on(ToggleSoundAction, toggleSoundReducer),

  on(ToggleStartPauseAction, toggleStartPauseReducer),
);