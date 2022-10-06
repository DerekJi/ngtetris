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
  @Input() number: number | null = 0;

  get padding() {
    var num = this.number ?? 0;
    var padding = pad(num, 6).replace(num.toString(), '');
    return padding;
  }
  
  constructor() { }
}
