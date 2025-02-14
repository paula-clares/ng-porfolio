import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from '../../models/task.interface';
import { Subscription } from 'rxjs';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-deleted-tasks',
  standalone: false,

  templateUrl: './deleted-tasks.component.html',
  styleUrl: './deleted-tasks.component.scss'
})
export class DeletedTasksComponent implements OnInit, OnDestroy {
  tasksDeleted: Task[] = [];
  private tasksDeletedSub!: Subscription;

  constructor(private service: TasksService) { }

  ngOnInit(): void {
    this.tasksDeleted = this.service.getTasksDeleted()
    this.tasksDeletedSub = this.service.taskDeletedChanged.subscribe(
      (taskDeleted: Task[]) => {
        this.tasksDeleted = taskDeleted
      })
  }

  ngOnDestroy(): void {
    this.tasksDeletedSub.unsubscribe()
  }

  returnTask(task: Task): void {
    this.service.returnTasksDeleted(task)
  }
}
