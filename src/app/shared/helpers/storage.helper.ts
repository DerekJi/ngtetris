import { TetrisModel } from "../models/tetris.model";
import { initialState } from "../store/initial-state";
import { immutable } from "./immutable.helper";

const storage = localStorage;
const storageKey: string = 'tetris';
const key = (word: string): string => `${storageKey}.${word}`;

function save(state?: TetrisModel): void {
    if (!state) return;
    var partialState = immutable.map(state, {
        audioBuffer: null,
        audioContext: undefined,
    });
    var json = JSON.stringify(partialState);
    storage.setItem(storageKey, json);
}

function load(): TetrisModel | null {
    var json = storage.getItem(storageKey);
    if (!json) {
        return null;
    }
    return JSON.parse(json) as TetrisModel;
}

function clear(): void {
    storage.removeItem(storageKey);
}

export const tetrisStorage = {
    save,
    load,
    clear,
}