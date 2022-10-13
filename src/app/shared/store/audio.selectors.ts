import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AudioModel } from "../models/audio.model";

const selectRoot = createFeatureSelector<AudioModel>('audio');

export const selectSoundsOn = createSelector(selectRoot, (root) => root.soundsOn );
