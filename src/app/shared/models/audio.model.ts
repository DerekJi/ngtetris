export interface AudioModel {
  soundsOn: boolean,
  audioBuffer?: AudioBuffer | null;
  audioContext: AudioContext | null;
  source?: AudioBufferSourceNode | null;
}