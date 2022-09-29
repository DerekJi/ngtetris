import { createAction } from "@ngrx/store";

export const ResetAction = createAction('[Tetris] Reset');
export const ToggleSoundAction = createAction('[Tetris] Toggle Sound');
export const ToggleStartPauseAction = createAction('[Tetris] Toggle Start/Pause');

export const MoveLeftAction = createAction('[Tetris] Move Left');
export const MoveRightAction = createAction('[Tetris] Move Right');
export const MoveDownAction = createAction('[Tetris] Move Down');
export const MoveDropAction = createAction('[Tetris] Drop');

export const ClockwiseRotateAction = createAction('[Tetris] Rotate Clockwise');
export const AnticlockwiseRotateAction = createAction('[Tetris] Rotate Anti-clockwise');

export const TickAction = createAction('[Tetris] Tick');