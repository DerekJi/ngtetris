import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachineComponent } from './machine/machine.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { ScreenComponent } from './screen/screen.component';
import { InfoComponent } from './screen/info/info.component';
import { ButtonComponent } from './keyboard/button/button.component';
import { BlockComponent } from './screen/block/block.component';
import { PlayfieldComponent } from './screen/playfield/playfield.component';
import { NumberPanelComponent } from './screen/number-panel/number-panel.component';
import { NextPiecePanelComponent } from './screen/next-piece-panel/next-piece-panel.component';
import { SoundIndicatorComponent } from './screen/sound-indicator/sound-indicator.component';
import { StatusIndicatorComponent } from './screen/status-indicator/status-indicator.component';
import { TimeIndicatorComponent } from './screen/time-indicator/time-indicator.component';
import { SoundButtonComponent } from './keyboard/button/sound-button.component';
import { StartButtonComponent } from './keyboard/button/start-button.component';
import { ResetButtonComponent } from './keyboard/button/reset-button.component';

const buttons = [
  ResetButtonComponent,
  SoundButtonComponent,
  StartButtonComponent,
];

@NgModule({
  declarations: [
    ...buttons,
    MachineComponent,
    KeyboardComponent,
    ScreenComponent,
    PlayfieldComponent,
    InfoComponent,
    ButtonComponent,
    BlockComponent,
    NumberPanelComponent,
    NextPiecePanelComponent,
    SoundIndicatorComponent,
    StatusIndicatorComponent,
    TimeIndicatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MachineComponent,
  ]
})
export class PagesModule { }