import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../../models/task.interface';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-edit-task',
  standalone: false,
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.scss'
})
export class EditTaskComponent implements OnInit {
  /* Nombre del método que representa la emisión: taskAdded. El dato que va a emitir es Task. */
  //@Output() taskAdded: EventEmitter<Task> = new EventEmitter<Task>();
  numberTasks!: number;
  tasks: Task[] = [];
  form!: FormGroup;
  taskId: string | null = null;
  task: Task | undefined;

  constructor(private fb: FormBuilder, private service: TasksService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    })

    this.taskId = this.route.snapshot.paramMap.get('id')
    if (this.taskId) {
      this.task = this.service.getTaskById(parseInt(this.taskId, 10))
      if (this.task) {
        /* Seteamos en el input el valor actual */
        this.form.patchValue({
          title: this.task.title,
          description: this.task.description
        })
      }
    }
  }

  sendTaskTitle(): void {
    if (this.form.valid && this.taskId && this.form.get('title')?.value !== '') {
      const updatedTask: Task = {
        id: parseInt(this.taskId, 10),
        title: this.form.value.title,
        description: this.form.value.description,
        completed: this.task ? this.task.completed : false
      };
      this.service.editTask(updatedTask)
      this.router.navigate(['/tasks'])
    }
  }

}
