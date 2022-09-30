import { Component } from '@angular/core';
import { map, timer } from 'rxjs';
import { pad } from 'src/app/shared/helpers/functions';

@Component({
  selector: 'app-time-indicator',
  templateUrl: './time-indicator.component.html',
  styleUrls: ['./time-indicator.component.scss']
})
export class TimeIndicatorComponent {
  private colonOn = false;

  time$ = timer(0, 1000).pipe(map(() => new Date()));

  hour$ = this.time$.pipe(map((time) => pad(time.getHours(), 2, '0')));
  min$ = this.time$.pipe(map((time) => pad(time.getMinutes(), 2, '0')));
  colon$ = this.time$.pipe(map(() => {
    this.colonOn = !this.colonOn;
    return this.colonOn ? ':' : ' ';
  }))

  constructor() { }
}
