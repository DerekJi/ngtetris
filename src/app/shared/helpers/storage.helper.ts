import { TetrisModel } from "../models/tetris.model";

const storage = localStorage;
const storageKey: string = 'tetris';
const key = (word: string): string => `${storageKey}.${word}`;

function save(state?: TetrisModel): void {
    if (!state) return;
    var json = JSON.stringify(state);
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