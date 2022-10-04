import { createAction, props } from "@ngrx/store";
import { MovementEvent } from "../models/movement.enum";

export const PowerOnAction = createAction('[Tetris] Powered On');

export const LoadAudioAction = createAction('[Tetris] Load Audio', props<{ context: AudioContext, buffer: AudioBuffer }>());

export const SetReadyAction = createAction('[Tetris] Set Ready');

export const ResetAction = createAction('[Tetris] Reset');
export const ToggleSoundAction = createAction('[Tetris] Toggle Sound');
export const ToggleStartPauseAction = createAction('[Tetris] Toggle Start/Pause');

export const MovementAction = createAction('[Tetris] Movement', props<{ movement: MovementEvent}>());

export const TickAction = createAction('[Tetris] Tick');
export const PowerOnTickAction = createAction('[Tetris] PowerOn Tick');