import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    CardComponent
  ],
  exports: [
    ButtonComponent,
    CardComponent
  ],
})
export class UiModule { }
