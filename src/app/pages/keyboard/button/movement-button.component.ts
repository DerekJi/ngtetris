import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovementEvent } from 'src/app/shared/models/movement.enum';
import { MovementAction } from 'src/app/shared/store/tetris.actions';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'app-movement-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class MovementButtonComponent extends ButtonComponent {

  @Input() event: MovementEvent = MovementEvent.RotateClockwise;
  @Input() override action: string = '';
  @Input() override size: 'small' | 'normal' = 'normal';

  constructor(private store: Store) { super(); }

  override onClick(): void {
    this.store.dispatch(MovementAction({ movement: this.event }));
  }
}

