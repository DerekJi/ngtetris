import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, take, timer } from 'rxjs';
import { fieldHellper } from 'src/app/shared/helpers/fieldmatrix.helper';
import { actions } from 'src/app/shared/store/tetris.actions';
import { selectFildeView } from 'src/app/shared/store/tetris.selectors';
import { PlayfieldComponent } from './playfield.component';

@Component({
  selector: 'app-playfield-removing',
  templateUrl: './playfield.component.html',
  styleUrls: ['./playfield.component.scss']
})
export class PlayfieldRemovingComponent extends PlayfieldComponent implements OnInit {

  override view$ = this.removeFullRows(); 

  playfield: number[][] = [];

  constructor(store: Store) { super(store); }  

  ngOnInit(): void {
    this.store.select(selectFildeView)
      .subscribe((field) => this.playfield = fieldHellper.clone(field));
  }

  removeFullRows(): Observable<number[][]> {
    this.store.dispatch(actions.PlayClearSound());

    var count = 0;
    var stop = 7;    
    return timer(0, 60).pipe(
      take(stop),
      map(() => {
        var view = fieldHellper.clone(this.playfield);
        
        var value = count % 2 === 0 ? 2 : 0;
        for (let i = 0; i < view.length; i++) {
          var row = view[i];
          if (fieldHellper.isFullRow(row)) {
            for (let j = 0; j < row.length; j++) {
              view[i][j] = value;
            }
          }
        }
        
        count++;
        if (count === stop) {
          this.store.dispatch(actions.RemoveFullRows());
        }
        return view;
      })
    );
  }
}