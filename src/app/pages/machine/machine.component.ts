import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap, timer } from 'rxjs';
import { Constants } from 'src/app/shared/consts';
import { AudioService } from 'src/app/shared/helpers/audio.service';
import { AudioActions } from 'src/app/shared/store/audio.actions';
import { TetrisActions } from 'src/app/shared/store/tetris.actions';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {
  constructor(private audioService: AudioService, private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(TetrisActions.LoadProgress());
    this.loadAudio();
    this.startTick();
  }

  loadAudio(): void {
    var context = new AudioContext();
    this.audioService.loadAsync(context).pipe(
      tap((buffer) => {
        this.store.dispatch(AudioActions.LoadAudio({ buffer, context }));
      }),
    )
    .subscribe();
  }

  startTick(): void {
    timer(1, Constants.TickIntervalMS).pipe(
      tap(() => {
        this.store.dispatch(TetrisActions.Tick());
      })
    )
    .subscribe();
  }
}
