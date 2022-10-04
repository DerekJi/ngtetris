import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap, timer } from 'rxjs';
import { Constants } from 'src/app/shared/consts';
import { BlockStatusColor } from 'src/app/shared/models/block-status.enum';
import { TickAction } from 'src/app/shared/store/tetris.actions';
import { selectFildeView } from 'src/app/shared/store/tetris.selectors';

@Component({
  selector: 'app-playfield',
  templateUrl: './playfield.component.html',
  styleUrls: ['./playfield.component.scss']
})
export class PlayfieldComponent implements OnInit {

  width = Constants.PlayfieldWidth;
  height = Constants.PlayfieldHeight;

  view$ = this.store.select(selectFildeView).pipe(
    tap((view) => {
      this.height = view.length;
      this.width = view[0].length;
    })
  );

  constructor(private store: Store) { }

  ngOnInit(): void {
    timer(0, Constants.TickIntervalMS).pipe(
      tap(() => {
        this.store.dispatch(TickAction());
      })
    )
    // .subscribe();
  }

  blockStatus(value: number): BlockStatusColor {
    if (value === 1) return BlockStatusColor.Covered;
    if (value === 2) return BlockStatusColor.Clearing;
    return BlockStatusColor.Empty;
  }
}
