import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Task } from '../../models/task.interface';
import { TasksService } from '../../services/tasks.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-task',
  standalone: false,

  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.scss'
})

export class ListTaskComponent {
  /* @Input es como que añade una nueva propiedad con [] al componente 
  con ese nombre, por ejemplo listTask. Si no ponemos nada, se llamara como la variable aquí */
  /* @Input('listTask') tasks: Task[] = []; */
  /* @Input() tasksUpload: Task[] = [];
  @Output() taskCompleted: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() taskDeleted: EventEmitter<number> = new EventEmitter<number>();
 */
  tasks: Task[] = [];
  private subscription!: Subscription;
  view: boolean = true;

  constructor(private service: TasksService, private router: Router) {
    this.tasks = this.service.getTasks()
    this.subscription = this.service.taskChanged.subscribe(task => {
      this.tasks = task
    })

    this.router.events.subscribe(() => {
      if (this.router.url !== '/tasks') {
        this.view = false;
      }
      else {
        this.view = true;
      }
    })
  }

  completeTask(task: Task): void {
    this.service.completeTask(task.id)
  }

  deleteTask(id: number): void {
    this.service.deleteTask(id)
  }

  editTask(id: number): void {
    this.router.navigate([`/edit/${id}`])
  }
}
