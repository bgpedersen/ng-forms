import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedHeaderComponent } from './components/shared-header/shared-header.component';
import { SharedInputComponent } from './shared-input/shared-input.component';

@NgModule({
  declarations: [SharedHeaderComponent, SharedInputComponent],
  imports: [CommonModule, FormsModule],
  exports: [SharedHeaderComponent, SharedInputComponent]
})
export class SharedModule {}
