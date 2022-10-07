import { Component, Input } from '@angular/core';
import { of } from 'rxjs';

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

  constructor() { }

  onClick(): void {
  }
  
  onKeyDown(event?: KeyboardEvent): void {
    this.keyDown = true;
  }

  onKeyUp(event?: KeyboardEvent): void {
    this.keyDown = false;
  }
}
