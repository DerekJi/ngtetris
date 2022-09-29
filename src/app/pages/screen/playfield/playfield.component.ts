import { Component, OnInit } from '@angular/core';
import { BlockStatusColor } from 'src/app/shared/models/block-status.enum';

@Component({
  selector: 'app-playfield',
  templateUrl: './playfield.component.html',
  styleUrls: ['./playfield.component.scss']
})
export class PlayfieldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clearing: BlockStatusColor = BlockStatusColor.Clearing;
  empty: BlockStatusColor = BlockStatusColor.Empty;
}
