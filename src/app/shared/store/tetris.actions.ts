import { createAction, props } from "@ngrx/store";
import { MovementEvent } from "../models/movement.enum";

const PowerOn = createAction('[Tetris] Powered On');
const PowerOff = createAction('[Tetris] Powered Off');
const LoadProgress = createAction('[Tetris] Load Progress');

const SetReady = createAction('[Tetris] Set Ready');
const Reset = createAction('[Tetris] Reset');

const ToggleStartPause = createAction('[Tetris] Toggle Start/Pause');
const Movement = createAction('[Tetris] Movement', props<{ movement: MovementEvent}>());
const RemoveFullRows = createAction('[Tetris] Remove Full Rows');
const Tick = createAction('[Tetris] Tick');

const ChangeSpeedLevel = createAction('[Tetris] Change Speed Level');

export const TetrisActions = {
  PowerOn,
  PowerOff,
  LoadProgress,
  SetReady,
  Reset,
  ToggleStartPause,
  Movement,
  RemoveFullRows,
  Tick,
  ChangeSpeedLevel,
};