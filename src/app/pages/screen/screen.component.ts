import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { TetrisFsmState } from 'src/app/shared/models/tetris-fsm-state.enum';
import { selectStatus } from 'src/app/shared/store/tetris.selectors';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent {

  status$ = this.store.select(selectStatus);

  poweredOn$ = this.status$.pipe(
    map((status) => status === TetrisFsmState.PoweredOn),
  );
  poweredOff$ = this.status$.pipe(
    map((status) => status === TetrisFsmState.PoweredOff),
    );
  ready$ = this.status$.pipe(
    map((status) => status === TetrisFsmState.Ready),
  );
  gameRunning$ = this.status$.pipe(
    map((status) => status === TetrisFsmState.GameStarted || status === TetrisFsmState.Paused),
  );

  constructor(private store: Store) { }
}
