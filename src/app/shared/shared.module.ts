import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedHeaderComponent } from './components/shared-header/shared-header.component';

@NgModule({
  declarations: [SharedHeaderComponent],
  imports: [CommonModule, FormsModule],
  exports: [SharedHeaderComponent]
})
export class SharedModule {}
