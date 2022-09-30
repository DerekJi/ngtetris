import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() action: string = '';
  @Input() size: 'small' | 'normal' = 'normal';

  protected keyDown: boolean = false;

  get keyDownClass(): string { 
    return this.keyDown ? 'btn-down' : '';
  }

  constructor() { }

  onClick(): void {
    console.log(this.action);
  }
  
  onKeyDown(): void {
    this.keyDown = true;
  }

  onKeyUp(): void {
    this.keyDown = false;
  }
}
