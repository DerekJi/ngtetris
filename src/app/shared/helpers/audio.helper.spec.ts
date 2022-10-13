import { AudioModel } from "../models/audio.model";
import { initialAudioState, initialTetrisState } from "../store/initial-state";
import { audio } from "./audio.helper";

describe('AudioHelper', () => {
  let state: AudioModel;
  let options: AudioBufferOptions = {
    length: 1,
    sampleRate: 3600
  };

  beforeEach(() => {
    state = {...initialAudioState};
    state.audioBuffer = new AudioBuffer(options);
    state.audioContext = new AudioContext();
  });

  it('getSource() should return null as sound is disabled', () => {
    // arrange
    state.soundsOn = false;

    // act
    var source = audio.getSource(state);

    // assert
    expect(source).toBeNull();
  });

  it('getSource() should return null as audioBuffer is null', () => {
    // arrange
    state.audioBuffer = null;

    // act
    var source = audio.getSource(state);

    // assert
    expect(source).toBeNull();
  });

  it('getSource() should return source', () => {
    // act
    var source = audio.getSource(state);

    // assert
    expect(source !== null).toBeTrue();
  });

  it('playClear() should work', () => {
    var source = audio.getSource(state);
    expect(source !== null).toBeTrue();

    var tested = false;
    if (source !== null) {
      audio.playClear(source);
      tested = true;
    } 
    expect(tested).toBeTrue();
  });

  it('playGameStart() should work', () => {
    var source = audio.getSource(state);
    expect(source !== null).toBeTrue();

    var tested = false;
    if (source !== null) {
      audio.playGameStart(source);
      tested = true;
    } 
    expect(tested).toBeTrue();
  });

  it('playGameOver() should work', () => {
    var source = audio.getSource(state);
    expect(source !== null).toBeTrue();

    var tested = false;
    if (source !== null) {
      audio.playGameOver(source);
      tested = true;
    } 
    expect(tested).toBeTrue();
  });

  it('playMove() should work', () => {
    var source = audio.getSource(state);
    expect(source !== null).toBeTrue();

    var tested = false;
    if (source !== null) {
      audio.playMove(source);
      tested = true;
    } 
    expect(tested).toBeTrue();
  });

  it('playRotate() should work', () => {
    var source = audio.getSource(state);
    expect(source !== null).toBeTrue();

    var tested = false;
    if (source !== null) {
      audio.playRotate(source);
      tested = true;
    } 
    expect(tested).toBeTrue();
  });

  it('playDrop() should work', () => {
    var source = audio.getSource(state);
    expect(source !== null).toBeTrue();

    var tested = false;
    if (source !== null) {
      audio.playDrop(source);
      tested = true;
    } 
    expect(tested).toBeTrue();
  });
});