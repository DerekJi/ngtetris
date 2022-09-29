import { createAction } from "@ngrx/store";

export const ResetAction = createAction('[Tetris] Reset');
export const ToggleSoundAction = createAction('[Tetris] Toggle Sound');
export const ToggleStartPauseAction = createAction('[Tetris] Toggle Start/Pause');