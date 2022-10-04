import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { audio } from 'src/app/shared/helpers/audio.helper';
import { MovementEvent } from 'src/app/shared/models/movement.enum';
import { MovementAction } from 'src/app/shared/store/tetris.actions';
import { selectAudioParams } from 'src/app/shared/store/tetris.selectors';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'app-movement-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class MovementButtonComponent extends ButtonComponent implements OnInit {

  @Input() event: MovementEvent = MovementEvent.RotateClockwise;
  @Input() override action: string = '';
  @Input() override size: 'small' | 'normal' = 'normal';

  audio$ = this.store.select(selectAudioParams);

  constructor(private store: Store) { super(); }

  ngOnInit(): void {
    this.audio$.subscribe();
  }

  override onClick(): void {
    audio.playMovementSound(this.audio$, this.event);
    this.store.dispatch(MovementAction({ movement: this.event }));
  }
}

