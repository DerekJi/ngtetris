import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { actions } from 'src/app/shared/store/tetris.actions';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'app-sound-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class SoundButtonComponent extends ButtonComponent {

  @Input() override action: string = 'SOUND';
  @Input() override size: 'small' | 'normal' = 'small';

  constructor(private store: Store) { super(); }

  override onClick(): void {
    this.store.dispatch(actions.ToggleSound());
  }
}
