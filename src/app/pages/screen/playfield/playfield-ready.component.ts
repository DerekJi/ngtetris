import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Constants } from 'src/app/shared/consts';
import { initialFieldMatrix } from 'src/app/shared/store/initial-field-matrix';
import { PlayfieldComponent } from './playfield.component';

@Component({
  selector: 'app-playfield-ready',
  templateUrl: './playfield.component.html',
  styleUrls: ['./playfield.component.scss']
})
export class PlayfieldReadyComponent extends PlayfieldComponent {
  count = 0;
  readonly stopCount = 2 * Constants.PlayfieldHeight + 2;

  override view$ = of(initialFieldMatrix);

  constructor(store: Store) { super(store); }  
}
