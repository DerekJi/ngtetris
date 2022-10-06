import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs';
import { Constants } from 'src/app/shared/consts';
import { BlockStatusColor } from 'src/app/shared/models/block-status.enum';
import { selectFildeView, selectStatus } from 'src/app/shared/store/tetris.selectors';

@Component({
  selector: 'app-playfield',
  templateUrl: './playfield.component.html',
  styleUrls: ['./playfield.component.scss']
})
export class PlayfieldComponent {

  width = Constants.PlayfieldWidth;
  height = Constants.PlayfieldHeight;

  status$ = this.store.select(selectStatus).pipe(
    map((status) => status.toLowerCase().replace(' ', '-'))
  );

  ready$ = this.status$.pipe(
    map((status) => status === 'ready' ? '' : 'hidden')
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
}
