import { Observable } from "rxjs";
import { AudioClip, music } from "../models/audio-clip.model";
import { AppAudioParams } from "../models/audio-params.model";
import { MovementEvent } from "../models/movement.enum";

function play(source: AudioBufferSourceNode, clip: AudioClip) {
  source.start(0, clip.offset, clip.duration);
}

function getSource(audio: AppAudioParams): AudioBufferSourceNode | null {
  var source: AudioBufferSourceNode | null = null;
  if (audio.enabled && audio.context && audio.buffer) {
    source = audio.context.createBufferSource();
    source.buffer = audio.buffer;
    source.connect(audio.context.destination);        
  }
  return source;
}

function playMovementSound(audio$: Observable<AppAudioParams>, event: MovementEvent): void {
  audio$.subscribe((audioParams) => {
    var source = getSource(audioParams);
    if (source) {
      playMovement(source, event);
    }
  });
}

const playGameStart = (source: AudioBufferSourceNode) => play(source, music.gamestart);
const playClear = (source: AudioBufferSourceNode) => play(source, music.clear);
const playGameOver = (source: AudioBufferSourceNode) => play(source, music.gameover);

const playMove = (source: AudioBufferSourceNode) => play(source, music.move),
      playRotate = (source: AudioBufferSourceNode) => play(source, music.rotate),
      playDrop = (source: AudioBufferSourceNode) => play(source, music.drop);
  
const playMovement = (source: AudioBufferSourceNode, event: MovementEvent) => {
  switch (event) {
    case MovementEvent.Down:
    case MovementEvent.Left:
    case MovementEvent.Right:
      playMove(source); break;
    case MovementEvent.RotateClockwise:
    case MovementEvent.RotateAntiClockwise:
      playRotate(source); break;
    case MovementEvent.Drop:
      playDrop(source); break;
  }
};

export const audio = {  
  getSource,

  playGameStart,
  playClear,
  playGameOver,

  playMovementSound,  
}