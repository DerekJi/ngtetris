import { Component, Input } from '@angular/core';
import { BlockStatusColor } from 'src/app/shared/models/block-status.enum';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent {

  @Input() status: BlockStatusColor = BlockStatusColor.Empty;
  
  constructor() { }
}
