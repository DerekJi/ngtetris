import { Component, HostListener, Input } from '@angular/core';
import { take } from 'rxjs';
import { MovementEvent } from 'src/app/shared/models/movement.enum';
import { TetrisFsmState } from 'src/app/shared/models/tetris-fsm-state.enum';
import { TetrisActions } from 'src/app/shared/store/tetris.actions';
import { selectStatus } from 'src/app/shared/store/tetris.selectors';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'app-movement-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class MovementButtonComponent extends ButtonComponent {

  @Input() event: MovementEvent = MovementEvent.RotateClockwise;
  @Input() override action: string = '';
  @Input() override size: 'small' | 'normal' | 'long' = 'normal';

  override onClick(): void {
      this.store.select(selectStatus).pipe(take(1)).subscribe((status) => {
        if (status === TetrisFsmState.GameStarted) {
          this.store.dispatch(TetrisActions.Movement({ movement: this.event }));
        }
      });
  }

  @HostListener("window:keydown", ['$event'])
  override onKeyDown(event?: KeyboardEvent) {
    var fromMouseOrPointer = !event;
    var fromKey = event?.key.toString() === this.keyEvent;
    if (fromMouseOrPointer || fromKey ) {
      super.onKeyDown(event);
      if (fromKey) {
        this.onClick();
      }
    }
  }

  @HostListener("window:keyup", ['$event'])
  override onKeyUp(event?: KeyboardEvent) {
    if (!event || event?.key.toString() === this.keyEvent) {
      super.onKeyUp(event);
    }
  }
}

