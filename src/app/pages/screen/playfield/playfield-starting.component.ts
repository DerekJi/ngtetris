import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, takeWhile, timer } from 'rxjs';
import { Constants } from 'src/app/shared/consts';
import { initField, setFieldOccupiedBy } from 'src/app/shared/helpers/fieldmatrix.helper';
import { Position } from 'src/app/shared/models/position.model';
import { SetReadyAction } from 'src/app/shared/store/tetris.actions';
import { PlayfieldComponent } from './playfield.component';

@Component({
  selector: 'app-playfield-starting',
  templateUrl: './playfield.component.html',
  styleUrls: ['./playfield.component.scss']
})
export class PlayfieldStartingComponent extends PlayfieldComponent {
  count = 0;
  readonly stopCount = 2 * Constants.PlayfieldHeight + 2;

  override view$ = timer(0, Constants.StartingInterval).pipe(
    map(() => {
      var occupied: Position[] = [];
      var field = initField(Constants.PlayfieldWidth, Constants.PlayfieldHeight, 0);
      if (this.count < Constants.PlayfieldHeight) {
        for (var j = Constants.PlayfieldHeight - 1; j >= Math.abs(Constants.PlayfieldHeight - 1 - this.count); j--){
          for (var i = 0; i < Constants.PlayfieldWidth; i++) {
            occupied.push(new Position(i, j));
          }
        }
        setFieldOccupiedBy(field, occupied);
        console.log(`Count = ${this.count++}`);
      }
      if (this.count >= Constants.PlayfieldHeight) {
        for (var j = Constants.PlayfieldHeight - 1; j >= Math.abs(Constants.PlayfieldHeight - 1 - this.count); j--){
          for (var i = 0; i < Constants.PlayfieldWidth; i++) {
            occupied.push(new Position(i, j));
          }
        }
        setFieldOccupiedBy(field, occupied);
        console.log(`Count = ${this.count++}`);
      }

      if (this.count === this.stopCount - 1) {
        this.store.dispatch(SetReadyAction());
      }
      return field;
    }),
    takeWhile(() => this.count < this.stopCount),
  );

  constructor(store: Store) { super(store); }

  override ngOnInit(): void {
    console.log('playfield starting ...');
  }
}
