import { AfterContentInit, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Task } from './models/task.interface';
import { TasksService } from './services/tasks.service';
import { ApiService } from './services/api.service';
import { error } from 'console';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit, OnDestroy {
  cambio: boolean = false;
  tasks: Task[] = [];
  tasksUpload: Task[] = [];
  open: boolean = false;
  view: boolean = true;

  private subscription!: Subscription;

  constructor(private service: TasksService, private router: Router) {
    this.subscription = this.service.taskChanged.subscribe(task => {
      this.tasks = task
    })
    router.events.subscribe(() => {
      if (router.url !== '/tasks') {
        this.view = false
      }
      if (router.url === '/tasks/completed'
        || router.url === '/tasks/deleted'
        || router.url === '/tasks') {
        this.view = true
      }
    })
  }

  ngOnInit(): void {
    this.tasks = this.service.getTasks();
    /* this.serviceAPI.loadTask().subscribe(data => {
      if (Array.isArray(data)) {
        this.tasksUpload = data;
      }
    },
      error => {
        console.error('Error al cargar tareas desde la API', error);

      }); */
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addTask(event: Task): void {
    this.service.addTask(event);
  }

  openTask(): void {
    this.open = true;
    this.router.navigate(['/create']);
  }

  markTaskCompleted(event: Task): void {
    this.service.completeTask(event.id);
  }

  deleteTask(event: number): void {
    this.service.deleteTask(event);
  }
}
