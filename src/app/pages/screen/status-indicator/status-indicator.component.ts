import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { TetrisFsmState } from 'src/app/shared/models/tetris-fsm-state.enum';
import { selectStatus } from 'src/app/shared/store/tetris.selectors';

@Component({
  selector: 'app-status-indicator',
  templateUrl: './status-indicator.component.html',
  styleUrls: ['./status-indicator.component.scss']
})
export class StatusIndicatorComponent implements OnInit {

  status$ = this.store.select(selectStatus).pipe(
    map((status) => status === TetrisFsmState.Paused ? 'on' : 'off'),
  );

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
