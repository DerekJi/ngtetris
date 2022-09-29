import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { pad } from 'src/app/shared/helpers/functions';
import { selectNextShape, selectScore, selectSpeedLevel } from 'src/app/shared/store/tetris.selectors';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  score$ = this.store.select(selectScore);
  padding$ = this.score$.pipe(
    map((score) => pad(score, 6).replace(score.toString(), '')),
  );
  speedLevel$ = this.store.select(selectSpeedLevel);
  next$ = this.store.select(selectNextShape);

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
