import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, timer, take } from 'rxjs';
import { Constants } from 'src/app/shared/consts';
import { fieldHellper } from 'src/app/shared/helpers/fieldmatrix.helper';
import { Position } from 'src/app/shared/models/position.model';
import { actions } from 'src/app/shared/store/tetris.actions';
import { PlayfieldComponent } from './playfield.component';

@Component({
  selector: 'app-playfield-starting',
  templateUrl: './playfield.component.html',
  styleUrls: ['./playfield.component.scss']
})
export class PlayfieldStartingComponent extends PlayfieldComponent {
  count = 0;
  readonly stopCount = 2 * Constants.PlayfieldHeight;

  override view$ = timer(0, Constants.StartingInterval).pipe(
    take(this.stopCount),
    map(() => {
      var occupied: Position[] = [];
      var field = fieldHellper.initialize(Constants.PlayfieldWidth, Constants.PlayfieldHeight, 0);
      if (this.count < Constants.PlayfieldHeight) {
        for (var j = Constants.PlayfieldHeight - 1; j >= Math.abs(Constants.PlayfieldHeight - 1 - this.count); j--){
          for (var i = 0; i < Constants.PlayfieldWidth; i++) {
            occupied.push(new Position(i, j));
          }
        }
        fieldHellper.setFieldOccupiedBy(field, occupied);
      }
      if (this.count >= Constants.PlayfieldHeight) {
        for (var j = Constants.PlayfieldHeight - 1; j >= Math.abs(Constants.PlayfieldHeight - 1 - this.count); j--){
          for (var i = 0; i < Constants.PlayfieldWidth; i++) {
            occupied.push(new Position(i, j));
          }
        }
        fieldHellper.setFieldOccupiedBy(field, occupied);
      }

      if (this.count === this.stopCount - 1) {
        this.store.dispatch(actions.SetReady());
      }

      this.count++;
      return field;
    }),
  );

  constructor(store: Store) { super(store); }
}
