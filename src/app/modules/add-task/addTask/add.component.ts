import { CommonModule } from "@angular/common";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Task } from "../../../models/task.interface";
import { TasksService } from "../../../services/tasks.service";

@Component({
    standalone: false,
    selector: 'app-addTask', //nombre del componente
    templateUrl: './add.component.html',
    styleUrl: './add.component.scss',
})

export class AddComponent implements OnInit {
    /* Nombre del método que representa la emisión: taskAdded. El dato que va a emitir es Task. */
    //@Output() taskAdded: EventEmitter<Task> = new EventEmitter<Task>();
    numberTasks!: number;
    tasks: Task[] = [];
    form!: FormGroup;

    constructor(private fb: FormBuilder, private service: TasksService, private router: Router) { }

    ngOnInit(): void {
        this.form = this.fb.group({
            title: new FormControl('', [Validators.required/* , Validators.maxLength(10) */]),
            description: new FormControl('', [Validators.required])
        })
    }

    sendTaskTitle(): void {
        if (this.form.valid && this.form.get('title')?.value !== '') {
            const newTask: Task = {
                id: Math.floor(Math.random() * 1000),
                title: this.form.value.title,
                description: this.form.value.description,
                completed: false
            };
            this.service.addTask(newTask)
            this.router.navigate(['/'])
            this.form.reset()
        }
    }

    markTaskCompleted(task: Task): void {
        task.completed = !task.completed;
    }

    delete(id: number): void {
        this.tasks = this.tasks.filter((task) => task.id !== id)
        this.numberTasks = this.tasks.length
    }


















    /* titleTask: string = ""
    activeButton: boolean = true;

    sendData(form: NgForm) {
        if (form.valid) {
            console.log(this.titleTask)
        }
    }

    sendTask() {
        const sizeTitleTask = this.titleTask.split('')
        if (sizeTitleTask.length > 0) {
            this.activeButton = false;
        } else {
            this.activeButton = true;
        }
        console.log(`Tarea enviada con éxito ${this.titleTask}`);
    } */
}