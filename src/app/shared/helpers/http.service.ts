import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public readonly context: AudioContext = new AudioContext();
  private readonly url: string = 'assets/music.mp3';
  private readonly responseType = 'arraybuffer';

  private buffer: AudioBuffer | null = null;

  constructor(private http: HttpClient) {
    this.http.get('', { responseType: this.responseType });
  }

  loadAsync(): Observable<AudioBuffer> {
    if (this.buffer != null && this.buffer.length > 0) {
      return of(this.buffer);
    }

    var buffer = this.http.get(this.url, { responseType: this.responseType })
    .pipe(
      mergeMap((response) => {
        return this.context.decodeAudioData(response, 
          (buf) => buf,
          (error) => {
            console.error(error);
          });
      })
    );
    return buffer;
  }

  playSound(buffer: AudioBuffer, time: number) {
    var source: AudioBufferSourceNode = this.context.createBufferSource();
    source.buffer = buffer;
    source.connect(this.context.destination);
    source.start(time);
  }
}
