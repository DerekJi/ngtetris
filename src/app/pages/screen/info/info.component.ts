import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { TetrisFsmState } from 'src/app/shared/models/tetris-fsm-state.enum';
import { selectHighestScore, selectScore, selectSpeedLevel, selectStatus } from 'src/app/shared/store/tetris.selectors';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  score$ = this.store.select(selectScore);
  highestScore$ = this.store.select(selectHighestScore);
  speedLevel$ = this.store.select(selectSpeedLevel);
  poweredOff$ = this.store.select(selectStatus).pipe(
    map((status) => status === TetrisFsmState.PoweredOff ? 'powered-off' : '')
  );

  running$ = this.store.select(selectStatus).pipe(
    map((status) => [
      TetrisFsmState.GameStarted,
      TetrisFsmState.Paused,
    ].includes(status))
  );
  notRunning$ = this.running$.pipe(map((running) => !running));

  constructor(private store: Store) { }
}
