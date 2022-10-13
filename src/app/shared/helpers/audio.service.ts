import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private readonly url: string = 'assets/music.mp3';
  private readonly responseType = 'arraybuffer';

  private buffer: AudioBuffer | null = null;

  constructor(private http: HttpClient) {
  }

  loadAsync(context: AudioContext): Observable<AudioBuffer> {
    if (this.buffer != null && this.buffer.length > 0) {
      return of(this.buffer);
    }

    var buffer = this.http.get(this.url, { responseType: this.responseType })
    .pipe(
      mergeMap((response) => {
        return context.decodeAudioData(response, 
          (buf) => { 
            this.buffer = buf;
            return buf;
          },
          (error) => {
            console.error(error);
          });
      })
    );
    return buffer;
  }
}
