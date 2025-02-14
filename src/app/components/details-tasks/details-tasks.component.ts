import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../models/task.interface';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-details-tasks',
  standalone: false,

  templateUrl: './details-tasks.component.html',
  styleUrl: './details-tasks.component.scss'
})
export class DetailsTasksComponent implements OnInit {
  task: Task | undefined;
  tasks: Task[] = [];

  constructor(
    private router: ActivatedRoute,
    private service: TasksService
  ) { }

  ngOnInit(): void {
    const taskId = Number(this.router.snapshot.paramMap.get('id'))
    this.task = this.service.getTaskById(taskId)
  }
}
