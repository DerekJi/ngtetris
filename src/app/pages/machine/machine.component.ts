import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap, timer } from 'rxjs';
import { Constants } from 'src/app/shared/consts';
import { AudioService } from 'src/app/shared/helpers/audio.service';
import { actions } from 'src/app/shared/store/tetris.actions';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {
  constructor(private audioService: AudioService, private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(actions.LoadProgress());
    this.loadAudio();
    this.startTick();
  }

  loadAudio(): void {
    this.audioService.loadAsync().pipe(
      tap((buffer) => {
        this.store.dispatch(actions.LoadAudio({ buffer, context: this.audioService.context }));
      }),
    )
    .subscribe();
  }

  startTick(): void {
    timer(1, Constants.TickIntervalMS).pipe(
      tap(() => {
        this.store.dispatch(actions.Tick());
      })
    )
    .subscribe();
  }
}
