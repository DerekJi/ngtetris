import { Component, Input } from '@angular/core';
import { TetrisActions } from 'src/app/shared/store/tetris.actions';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'app-speed-level-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class SpeedLevelButtonComponent extends ButtonComponent {

  @Input() override action: string = 'SPEED';
  @Input() override size: 'small' | 'normal' = 'small';
  @Input() override button = 'btn-speed';

  override onClick(): void {
    this.store.dispatch(TetrisActions.ChangeSpeedLevel());    
  }
}
