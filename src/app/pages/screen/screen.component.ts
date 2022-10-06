import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, mergeMap, of } from 'rxjs';
import { TetrisFsmState } from 'src/app/shared/models/tetris-fsm-state.enum';
import { selectFullRowsCount, selectGameRunning, selectShouldRemove, selectStatus } from 'src/app/shared/store/tetris.selectors';

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
  hasFullrows$ = this.store.select(selectShouldRemove);
  gameRunning$ = this.store.select(selectGameRunning);

  constructor(private store: Store) { }
}
