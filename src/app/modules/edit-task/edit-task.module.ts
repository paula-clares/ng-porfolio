import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditTaskRoutingModule } from './edit-task-routing.module';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EditTaskComponent],
  imports: [
    CommonModule,
    EditTaskRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditTaskModule { }
