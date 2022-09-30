import { Component } from '@angular/core';
import { Constants } from 'src/app/shared/consts';
import { BlockStatusColor } from 'src/app/shared/models/block-status.enum';

@Component({
  selector: 'app-playfield',
  templateUrl: './playfield.component.html',
  styleUrls: ['./playfield.component.scss']
})
export class PlayfieldComponent {

  width = Constants.PlayfieldWidth;
  height = Constants.PlayfieldHeight;

  constructor() { }

  clearing: BlockStatusColor = BlockStatusColor.Clearing;
  empty: BlockStatusColor = BlockStatusColor.Empty;
}
