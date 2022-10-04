import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, takeUntil, tap, timer } from 'rxjs';
import { Constants } from 'src/app/shared/consts';
import { music } from 'src/app/shared/models/audio-clip.model';
import { TetrisFsmState } from 'src/app/shared/models/tetris-fsm-state.enum';
import { PowerOnAction, PowerOnTickAction, ResetAction, ToggleStartPauseAction } from 'src/app/shared/store/tetris.actions';
import { selectStatus } from 'src/app/shared/store/tetris.selectors';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'app-power-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class PowerButtonComponent extends ButtonComponent {

  @Input() override action: string = 'On/Off';
  @Input() override size: 'small' | 'normal' = 'small';

  constructor(private store: Store) { super(); }

  override onClick(): void {
    this.store.dispatch(PowerOnAction());
  }
}
