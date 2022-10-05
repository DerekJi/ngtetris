import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ResetAction, ToggleStartPauseAction } from 'src/app/shared/store/tetris.actions';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'app-reset-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ResetButtonComponent extends ButtonComponent {

  @Input() override action: string = 'RESET';
  @Input() override size: 'small' | 'normal' = 'small';

  constructor(private store: Store) { super(); }

  override onClick(): void {
    this.store.dispatch(ResetAction());
  }
}