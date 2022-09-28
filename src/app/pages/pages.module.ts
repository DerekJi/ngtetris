import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachineComponent } from './machine/machine.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { ScreenComponent } from './screen/screen.component';
import { FieldComponent } from './screen/field/field.component';
import { InfoComponent } from './screen/info/info.component';
import { ButtonComponent } from './keyboard/button/button.component';



@NgModule({
  declarations: [
    MachineComponent,
    KeyboardComponent,
    ScreenComponent,
    FieldComponent,
    InfoComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MachineComponent,
  ]
})
export class PagesModule { }
