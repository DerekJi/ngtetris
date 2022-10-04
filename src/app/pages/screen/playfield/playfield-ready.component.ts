import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, of, takeWhile, timer } from 'rxjs';
import { Constants } from 'src/app/shared/consts';
import { initField, setFieldOccupiedBy } from 'src/app/shared/helpers/fieldmatrix.helper';
import { Position } from 'src/app/shared/models/position.model';
import { SetReadyAction } from 'src/app/shared/store/tetris.actions';
import { PlayfieldComponent } from './playfield.component';

@Component({
  selector: 'app-playfield-ready',
  templateUrl: './playfield.component.html',
  styleUrls: ['./playfield.component.scss']
})
export class PlayfieldReadyComponent extends PlayfieldComponent {
  count = 0;
  readonly stopCount = 2 * Constants.PlayfieldHeight + 2;

  override view$ = of(initField(Constants.PlayfieldWidth, Constants.PlayfieldHeight, 0));

  constructor(store: Store) { super(store); }
  
}
