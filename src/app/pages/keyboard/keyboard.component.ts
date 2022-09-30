import { Component } from '@angular/core';
import { MovementEvent } from 'src/app/shared/models/movement.enum';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent {
  
  Drop = MovementEvent.Drop;
  Down = MovementEvent.Down;
  Left = MovementEvent.Left;
  Right = MovementEvent.Right;
  RotateClockwise = MovementEvent.RotateClockwise;
  RotateAntiClockwise = MovementEvent.RotateAntiClockwise;

  constructor() { }
}
