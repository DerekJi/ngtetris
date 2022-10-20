import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap, timer } from 'rxjs';
import { Constants } from 'src/app/shared/consts';
import { AudioService } from 'src/app/shared/helpers/audio.service';
import { AudioActions } from 'src/app/shared/store/audio.actions';
import { TetrisActions } from 'src/app/shared/store/tetris.actions';
import { selectSpeedLevel } from 'src/app/shared/store/tetris.selectors';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {
  readonly tickUnit = 50;
  private tickCount: number = 0;
  private speedLevel: number = Constants.MinSpeedLevel;
  speedLevel$ = this.store.select(selectSpeedLevel).pipe(
    tap((speedLevel) => this.speedLevel = speedLevel),
  );

  constructor(private audioService: AudioService, private store: Store) { }

  private get tickLimit(): number {
    return (Constants.TickIntervalMS - (this.speedLevel - 1) * 100) / this.tickUnit;
  }

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
    timer(1, this.tickUnit).pipe(
      tap(() => {
        this.tickCount++;
        if (this.tickCount >= this.tickLimit) {
          console.log('limit = ', this.tickLimit);
          this.tickCount = 0;
          this.store.dispatch(TetrisActions.Tick());
        }
      })
    )
    .subscribe();
  }
}
