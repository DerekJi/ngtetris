import { Component, Input } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { pad } from 'src/app/shared/helpers/functions';

@Component({
  selector: 'app-number-panel',
  templateUrl: './number-panel.component.html',
  styleUrls: ['./number-panel.component.scss']
})
export class NumberPanelComponent {
  @Input() label: string = '';
  @Input() number$: Observable<number> = of(0);

  padding$ = this.number$.pipe(
    map((score) => pad(score, 6).replace(score.toString(), '')),
  );
  
  constructor() { }
}
