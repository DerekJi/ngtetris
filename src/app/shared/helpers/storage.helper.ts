import { TetrisModel } from "../models/tetris.model";

const storage = localStorage;
const storageKey: string = 'tetris';
const highestScoreKey = `${storageKey}.highestScore`;

function saveHighestScore(score: number): void {
    var currentHighest = loadHighestScore();
    if (score > currentHighest) {
        storage.setItem(highestScoreKey, score.toString());
    }
}

function loadHighestScore(): number {
    var value = storage.getItem(highestScoreKey);
    return !value ? 0 : Number.parseInt(value);
}

function save(state?: TetrisModel): void {
    if (!state) return;
    var partialState = { ...state};
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
    saveHighestScore,
    loadHighestScore,
    clear,
}