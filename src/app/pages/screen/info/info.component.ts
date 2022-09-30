import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectScore, selectSpeedLevel } from 'src/app/shared/store/tetris.selectors';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  score$ = this.store.select(selectScore);
  speedLevel$ = this.store.select(selectSpeedLevel);

  constructor(private store: Store) { }
}
