import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { actions } from 'src/app/shared/store/tetris.actions';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'app-power-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class PowerButtonComponent extends ButtonComponent {

  @Input() override action: string = 'ON/OFF';
  @Input() override size: 'small' | 'normal' = 'small';
  @Input() override button = 'btn-power';

  constructor(private store: Store) { super(); }

  override onClick(): void {
    this.store.dispatch(actions.PowerOn());
  }
}
