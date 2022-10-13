import { PieceDirection } from "../models/piece-direction.enum";
import { PieceShape } from "../models/piece-shape.enum";
import { TetrisFsmState } from "../models/tetris-fsm-state.enum";
import { TetrisModel } from "../models/tetris.model";
import { initialTetrisState } from "../store/initial-state";
import { tetrisStorage } from "./storage.helper";

describe("storage.helper", () => {
    let model: TetrisModel;

    beforeEach(() => {
        model = {...initialTetrisState};
        tetrisStorage.clear();
    });

    it('should not save if model is null or empty', () => {
        // act
        tetrisStorage.save(undefined);
        var stored = tetrisStorage.load();

        //
        expect(stored === null).toBeTrue();
    });

    it('should have saved model', () => {
        // arrange
        model.score = 3;
        model.soundsOn = false;
        model.currentLeft = 6;
        model.currentTop = 12;
        model.currentPieceShape = PieceShape.L;
        model.currentPieceDirection = PieceDirection.RIGHT;
        model.nextPieceShape = PieceShape.T;
        model.nextPieceDirection = PieceDirection.DOWN;
        model.status = TetrisFsmState.GameStarted;
        model.audioContext = new AudioContext();
        
        // act
        tetrisStorage.save(model);
        var stored = tetrisStorage.load();

        // assert
        expect(stored !== null).toBeTrue();
        expect(stored?.status).toBe(model.status);  
        expect(stored?.score).toBe(model.score);
        expect(stored?.soundsOn).toBe(model.soundsOn);
        expect(stored?.currentLeft).toBe(model.currentLeft);
        expect(stored?.currentTop).toBe(model.currentTop);
        expect(stored?.currentPieceShape).toBe(model.currentPieceShape);
        expect(stored?.currentPieceDirection).toBe(model.currentPieceDirection);
        expect(stored?.nextPieceShape).toBe(model.nextPieceShape);
        expect(stored?.nextPieceDirection).toBe(model.nextPieceDirection);
        expect(stored?.audioBuffer).toBeNull();
        expect(stored?.audioContext).toBeUndefined();
    });
});