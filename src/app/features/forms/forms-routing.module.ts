import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms.component';
import { ReactiveformComponent } from './pages/reactiveform/reactiveform.component';

const routes: Routes = [
  {
    path: "",
    component: FormsComponent,
    children: [
      {
        path: "reactiveform",
        component: ReactiveformComponent
      },
      {
        path: "**",
        component: ReactiveformComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {}
