import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { AudioService } from 'src/app/shared/helpers/audio.service';
import { AudioActions } from 'src/app/shared/store/audio.actions';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() action: string = '';
  @Input() size: 'small' | 'normal' | 'long' = 'normal';
  @Input() direction: '' | 'vertical' = '';
  @Input() button = "";
  @Input() keyEvent: 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight' | ' ' | '' = '';

  protected keyDown: boolean = false;

  get keyDownClass(): string { 
    return this.keyDown ? 'btn-down' : '';
  }

  constructor(protected audioService: AudioService, protected store: Store) { }

  onClick(): void {
  }
  
  onKeyDown(event?: KeyboardEvent): void {
    this.keyDown = true;
  }

  onKeyUp(event?: KeyboardEvent): void {
    this.keyDown = false;
  }
  
  loadAudio(): void {
    var context = new AudioContext();
    this.audioService.loadAsync(context).pipe(
      tap((buffer) => {
        this.store.dispatch(AudioActions.LoadAudio({ buffer, context }));
      }),
    )
    .subscribe();
  }
}
