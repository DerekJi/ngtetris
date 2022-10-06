import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { actions } from 'src/app/shared/store/tetris.actions';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'app-start-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class StartButtonComponent extends ButtonComponent {

  @Input() override action: string = 'START/PAUSE';
  @Input() override size: 'small' | 'normal' = 'normal';

  constructor(private store: Store) { super(); }

  override onClick(): void {
    this.store.dispatch(actions.ToggleStartPause());
  }
}
