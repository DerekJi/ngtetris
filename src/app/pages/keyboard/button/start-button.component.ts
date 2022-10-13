import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { TetrisActions } from 'src/app/shared/store/tetris.actions';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'app-start-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class StartButtonComponent extends ButtonComponent {

  @Input() override action: string = 'START/PAUSE';
  @Input() override size: 'small' | 'normal' = 'normal';
  @Input() override button = 'btn-start';

  override onClick(): void {
    this.store.dispatch(TetrisActions.ToggleStartPause());
  }
}
