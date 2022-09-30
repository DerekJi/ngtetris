import { createAction, props } from "@ngrx/store";
import { MovementEvent } from "../models/movement.enum";

export const ResetAction = createAction('[Tetris] Reset');
export const ToggleSoundAction = createAction('[Tetris] Toggle Sound');
export const ToggleStartPauseAction = createAction('[Tetris] Toggle Start/Pause');

export const MovementAction = createAction('[Tetris] Movement', props<{ movement: MovementEvent}>());

export const TickAction = createAction('[Tetris] Tick');