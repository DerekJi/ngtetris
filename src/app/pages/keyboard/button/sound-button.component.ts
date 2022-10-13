import { Component, Input } from '@angular/core';
import { AudioActions } from 'src/app/shared/store/audio.actions';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'app-sound-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class SoundButtonComponent extends ButtonComponent {

  @Input() override action: string = 'SOUND';
  @Input() override size: 'small' | 'normal' = 'small';
  @Input() override button = 'btn-sound';

  override onClick(): void {
    this.store.dispatch(AudioActions.ToggleSound());
  }
}
