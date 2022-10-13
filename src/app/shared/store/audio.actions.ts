import { createAction, props } from "@ngrx/store";
import { TetrisFsmState } from "../models/tetris-fsm-state.enum";

const LoadAudio = createAction('[Audio] Load Audio Source', props<{ context: AudioContext, buffer: AudioBuffer }>());

const ToggleSound = createAction('[Audio] Enable/Disable Sound');

const PlayStatusSound = createAction('[Audio] Play Status Sound', props<{ status: TetrisFsmState }>());

const PlayClearSound = createAction('[Audio] Play Clear Sound');

export const AudioActions = {
  LoadAudio,
  ToggleSound,
  PlayStatusSound,
  PlayClearSound,
};

