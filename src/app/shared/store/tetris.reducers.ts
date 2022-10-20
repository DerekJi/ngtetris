import { createReducer, on } from "@ngrx/store";
import { initialTetrisState } from "./initial-state";
import { movementReducer } from "./reducers/movement.reducers";
import { resetReducer } from "./reducers/reset.reducer";
import { TetrisActions } from "./tetris.actions";
import { tickReducer } from "./reducers/tick.reducer";
import { toggleStartPauseReducer } from "./reducers/toggle-start-pause.reducer";
import { setReadyReducer } from "./reducers/set-ready.reducer";
import { powerOffReducer, powerOnReducer } from "./reducers/toggle-power-on-off.reducer";
import { removeReducer } from "./reducers/remove.reducer";
import { loadProgressReducer } from "./reducers/load-progress.reducer";
import { speedLevelReducer } from "./reducers/speed-level.reducer";

export const tetrisReducer = createReducer(initialTetrisState,

  on(TetrisActions.PowerOn, powerOnReducer),
  on(TetrisActions.PowerOff, powerOffReducer),

  on(TetrisActions.LoadProgress, loadProgressReducer),

  on(TetrisActions.SetReady, setReadyReducer),

  on(TetrisActions.Reset, resetReducer),

  on(TetrisActions.ToggleStartPause, toggleStartPauseReducer),  

  on(TetrisActions.Movement, movementReducer),

  on(TetrisActions.Tick, tickReducer),

  on(TetrisActions.RemoveFullRows, removeReducer),

  on(TetrisActions.ChangeSpeedLevel, speedLevelReducer),
);