import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { ReactiveformComponent } from './pages/reactiveform/reactiveform.component';

@NgModule({
  declarations: [FormsComponent, ReactiveformComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    RouterModule,
    SharedModule,
    MatFormFieldModule,
    MatSliderModule,
    MatInputModule
    // MatButtonModule
  ]
})
export class FormsModule {}
