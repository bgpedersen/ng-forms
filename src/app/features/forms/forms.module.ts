import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { ReactiveformComponent } from './pages/reactiveform/reactiveform.component';

@NgModule({
  declarations: [FormsComponent, ReactiveformComponent],
  imports: [CommonModule, FormsRoutingModule, RouterModule, SharedModule]
})
export class FormsModule {}
