import { createAction, props } from "@ngrx/store";
import { MovementEvent } from "../models/movement.enum";
import { TetrisFsmState } from "../models/tetris-fsm-state.enum";

const PowerOn = createAction('[Tetris] Powered On');
const LoadProgress = createAction('[Tetris] Powered On');
const LoadAudio = createAction('[Tetris] Load Audio', props<{ context: AudioContext, buffer: AudioBuffer }>());
const SetReady = createAction('[Tetris] Set Ready');
const Reset = createAction('[Tetris] Reset');
const ToggleSound = createAction('[Tetris] Toggle Sound');
const ToggleStartPause = createAction('[Tetris] Toggle Start/Pause');
const Movement = createAction('[Tetris] Movement', props<{ movement: MovementEvent}>());
const RemoveFullRows = createAction('[Tetris] Remove Full Rows');
const Tick = createAction('[Tetris] Tick');
const PlayStatusSound = createAction('[Tetris] Play Status Sound', props<{ status: TetrisFsmState }>());
const PlayClearSound = createAction('[Tetris] Play Clear Sound');

export const actions = {
  PowerOn,
  LoadProgress,
  LoadAudio,
  SetReady,
  Reset,
  ToggleSound,
  ToggleStartPause,
  Movement,
  RemoveFullRows,
  Tick,
  PlayStatusSound,
  PlayClearSound,
};