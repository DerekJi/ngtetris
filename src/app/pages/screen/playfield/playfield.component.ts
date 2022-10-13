import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { delay, interval, map, of, take, tap, timer } from 'rxjs';
import { Constants } from 'src/app/shared/consts';
import { BlockStatusColor } from 'src/app/shared/models/block-status.enum';
import { TetrisFsmState } from 'src/app/shared/models/tetris-fsm-state.enum';
import { AudioActions } from 'src/app/shared/store/audio.actions';
import { TetrisActions } from 'src/app/shared/store/tetris.actions';
import { selectFildeView, selectStatus } from 'src/app/shared/store/tetris.selectors';

@Component({
  selector: 'app-playfield',
  templateUrl: './playfield.component.html',
  styleUrls: ['./playfield.component.scss']
})
export class PlayfieldComponent {

  width = Constants.PlayfieldWidth;
  height = Constants.PlayfieldHeight;
  processingGameOver: boolean = false;

  status$ = this.store.select(selectStatus).pipe(
    tap((status) => this.autoStateTransitionIfGameOver(status, this.store)),
    map((status) => status.toLowerCase())
  );

  ready$ = this.status$.pipe(
    map((status) => status === 'ready' ? '' : 'hidden')
  );

  gameover$ = this.status$.pipe(
    map((status) => status === 'game-over' ? '' : 'hidden')
  );

  view$ = this.store.select(selectFildeView).pipe(
    tap((view) => {
      this.height = view.length;
      this.width = view[0].length;
    })
  );

  constructor(protected store: Store) { }

  blockStatus(value: number): BlockStatusColor {
    if (value === 1) return BlockStatusColor.Covered;
    if (value === 2) return BlockStatusColor.Clearing;
    return BlockStatusColor.Empty;
  }

  autoStateTransitionIfGameOver(status: TetrisFsmState, store: Store) {
    if (this.processingGameOver === false && status === TetrisFsmState.GameOver && store) {
      this.processingGameOver = true;
      store.dispatch(AudioActions.PlayStatusSound({ status: TetrisFsmState.GameOver }));
      timer(Constants.GameOverDuration, 1).pipe(
        take(1)
      )
      .subscribe(() => {
        store.dispatch(TetrisActions.Reset());
      })
    }
  }
}
