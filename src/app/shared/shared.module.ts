import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconPipe } from './pipes/icon.pipe';

@NgModule({
  declarations: [IconPipe],
  imports: [CommonModule],
  exports: [IconPipe],
})
export class SharedModule {}
