import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlockStatusColor } from 'src/app/shared/models/block-status.enum';
import { selectNextPieceMatrix } from 'src/app/shared/store/tetris.selectors';

@Component({
  selector: 'app-next-piece-panel',
  templateUrl: './next-piece-panel.component.html',
  styleUrls: ['./next-piece-panel.component.scss']
})
export class NextPiecePanelComponent {
  label: string = 'NEXT';
  next$ = this.store.select(selectNextPieceMatrix);

  constructor(private store: Store) { }
  
  blockStatus(value: number): BlockStatusColor {
    return value > 0 ? BlockStatusColor.Covered : BlockStatusColor.Empty;
  }

}
