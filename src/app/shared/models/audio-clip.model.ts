export class AudioClip {
  constructor(public offset: number,
    public duration: number) {}
}

export const music = {
  gamestart: new AudioClip(3.7202, 3.6224),
  gameover: new AudioClip(8.1276, 1.1437),
  clear: new AudioClip(0, 0.7675),
  drop: new AudioClip(1.2558, 0.3546),
  rotate: new AudioClip(2.2471, 0.0807),
  move: new AudioClip(2.9088, 0.1437),
};