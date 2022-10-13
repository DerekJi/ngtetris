import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { take, tap } from 'rxjs';
import { AudioService } from 'src/app/shared/helpers/audio.service';
import { TetrisFsmState } from 'src/app/shared/models/tetris-fsm-state.enum';
import { AudioActions } from 'src/app/shared/store/audio.actions';
import { TetrisActions } from 'src/app/shared/store/tetris.actions';
import { selectStatus } from 'src/app/shared/store/tetris.selectors';
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

  status$ = this.store.select(selectStatus);

  override onClick(): void {
    this.status$.pipe(take(1))
      .subscribe((status) => {
        if (status === TetrisFsmState.PoweredOff) {
          this.store.dispatch(TetrisActions.PowerOn());
        } else {
          this.store.dispatch(TetrisActions.PowerOff());
          this.loadAudio();
        }
      });
  }
}
