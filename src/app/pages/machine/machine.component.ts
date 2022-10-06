import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap, timer } from 'rxjs';
import { Constants } from 'src/app/shared/consts';
import { HttpService } from 'src/app/shared/helpers/http.service';
import { actions } from 'src/app/shared/store/tetris.actions';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {
  constructor(private audioHelper: HttpService, private store: Store) { }

  ngOnInit(): void {
    this.loadAudio();
    this.startTick();
  }

  loadAudio(): void {
    this.audioHelper.loadAsync().pipe(
      tap((buffer) => {
        this.store.dispatch(actions.LoadAudio({ buffer, context: this.audioHelper.context }));
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
