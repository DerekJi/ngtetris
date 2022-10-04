export class AppAudioParams {
  constructor(public enabled: boolean, 
    public context: AudioContext,
    public buffer?: AudioBuffer | null
  ) {}
}