import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task.interface';

@Component({
  selector: 'app-completed-tasks',
  standalone: false,

  templateUrl: './completed-tasks.component.html',
  styleUrl: './completed-tasks.component.scss'
})
export class CompletedTasksComponent implements OnInit {
  tasksCompleted: Task[] = [];

  constructor(private service: TasksService) { }

  ngOnInit(): void {
    this.tasksCompleted = this.service.getTasksCompleted()
  }

}
