import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatusTaskDirective } from './directives/status-task.directive';
import { AppConfirmDeleteDirective } from './directives/confirm-delete.directive';
import { HttpClientModule } from '@angular/common/http';
import { CompletedTasksComponent } from './components/completed-tasks/completed-tasks.component';
import { DetailsTasksComponent } from './components/details-tasks/details-tasks.component';
import { DeletedTasksComponent } from './components/deleted-tasks/deleted-tasks.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTaskComponent,
    StatusTaskDirective,
    AppConfirmDeleteDirective,
    CompletedTasksComponent,
    DetailsTasksComponent,
    DeletedTasksComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
