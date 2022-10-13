import { Component, Input } from '@angular/core';
import { TetrisActions } from 'src/app/shared/store/tetris.actions';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'app-reset-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ResetButtonComponent extends ButtonComponent {

  @Input() override action: string = 'RESET';
  @Input() override size: 'small' | 'normal' = 'small';
  @Input() override button = 'btn-reset';

  override onClick(): void {
    // this.loadAudio();
    this.store.dispatch(TetrisActions.Reset());    
  }
}
