import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { selectSoundsOn } from 'src/app/shared/store/tetris.selectors';

@Component({
  selector: 'app-sound-indicator',
  templateUrl: './sound-indicator.component.html',
  styleUrls: ['./sound-indicator.component.scss']
})
export class SoundIndicatorComponent implements OnInit {

  soundsOn$ = this.store.select(selectSoundsOn);

  status$ = this.soundsOn$.pipe(
    map((on) => on ? 'on' : 'off'),
  );

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
