import { Component, HostListener, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovementEvent } from 'src/app/shared/models/movement.enum';
import { actions } from 'src/app/shared/store/tetris.actions';
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

  constructor(private store: Store) { super(); }

  override onClick(): void {
    this.store.dispatch(actions.Movement({ movement: this.event }));
  }

  @HostListener("window:keydown", ['$event'])
  override onKeyDown(event?: KeyboardEvent) {
    console.log(`Pressed ${event?.key}!`);
    if (event === null || event?.key.toString() === this.keyEvent) {
      super.onKeyDown(event);
      this.onClick();
    }
  }

  @HostListener("window:keyup", ['$event'])
  override onKeyUp(event?: KeyboardEvent) {
    console.log(`Pressed ${event?.key}!`);
    if (event === null || event?.key.toString() === this.keyEvent) {
      super.onKeyUp(event);
    }
  }
}
