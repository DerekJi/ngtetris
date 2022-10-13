import { AudioClip, music } from "../models/audio-clip.model";
import { AudioModel } from "../models/audio.model";

function play(source: AudioBufferSourceNode, clip: AudioClip) {
  source.start(0, clip.offset, clip.duration);
}

function getSource(state: AudioModel): AudioBufferSourceNode | null {
  var source: AudioBufferSourceNode | null = null;
  if (state.soundsOn && state.audioContext && state.audioBuffer) {
    source = state.audioContext.createBufferSource();
    source.buffer =  state.audioBuffer;
    source.connect( state.audioContext.destination);        
  }
  return source;
}

const playGameStart = (source: AudioBufferSourceNode) => play(source, music.gamestart);
const playClear = (source: AudioBufferSourceNode) => play(source, music.clear);
const playGameOver = (source: AudioBufferSourceNode) => play(source, music.gameover);

const playMove = (source: AudioBufferSourceNode) => play(source, music.move),
      playRotate = (source: AudioBufferSourceNode) => play(source, music.rotate),
      playDrop = (source: AudioBufferSourceNode) => play(source, music.drop);
  
export const audio = {  
  getSource,

  playGameStart,
  playClear,
  playGameOver,

  playMove,
  playRotate,
  playDrop,
}