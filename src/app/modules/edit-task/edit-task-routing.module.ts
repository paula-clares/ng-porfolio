import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTaskComponent } from './edit-task/edit-task.component';

const routes: Routes = [
  {
    path: '', /* El nombre de la ruta en si está en el modulo principal */
    component: EditTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditTaskRoutingModule { }
