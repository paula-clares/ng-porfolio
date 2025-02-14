import { Injectable } from '@angular/core';
import { Task } from '../models/task.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[] = [];
  tasksCompleted: Task[] = [];
  tasksDeleted: Task[] = [];
  taskChanged = new Subject<Task[]>();
  taskDeletedChanged = new Subject<Task[]>();
  isAuthenticated: boolean = false;
  token: boolean = false

  constructor() {
    this.getTasks()
  }

  login(): void {
    this.isAuthenticated = true
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated
  }

  authRouteChild(): boolean {
    return this.token
  }

  getTasks(): Task[] {
    this.getFromLocalStorage()
    return this.tasks;
  }

  getTasksDeleted(): Task[] {
    this.getFromLocalStorage()
    return this.tasksDeleted;
  }

  getTasksCompleted(): Task[] {
    this.getFromLocalStorage()
    this.tasksCompleted = this.tasks.filter(task => task.completed === true)
    return this.tasksCompleted;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
    this.setLocalStorage();
    this.taskChanged.next(this.tasks.slice())
  }

  deleteTask(id: number): void {
    const taskToDelete = this.tasks.find(task => task.id === id)
    if (taskToDelete) {
      this.tasksDeleted.push(taskToDelete)
      this.tasks = this.tasks.filter(task => task.id !== id)
      this.taskChanged.next(this.tasks.slice())
      this.setLocalStorage();
    }
  }

  /* Restaurar tarea previamente eliminada */
  returnTasksDeleted(task: Task): void {
    if (!this.tasks.some(loopTask => loopTask.id === task.id)) {
      this.tasks.push(task)
      this.tasksDeleted = this.tasksDeleted.filter(loopTask => loopTask.id !== task.id)
      this.taskChanged.next(this.tasks.slice())
      this.taskDeletedChanged.next(this.tasksDeleted.slice())
      this.setLocalStorage()
    }
  }

  completeTask(id: number): void {
    const task = this.tasks.find(task => task.id === id)
    if (task) {
      task.completed = !task.completed
      this.setLocalStorage();
      this.taskChanged.next(this.tasks.slice())
    }
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id)
  }

  editTask(updateTask: Task): void {
    const index = this.tasks.findIndex(task => task.id = updateTask.id)
    if (index !== -1) {
      this.tasks[index] = { ...updateTask }
      this.setLocalStorage()
      this.taskChanged.next(this.tasks.slice())
    }
  }

  getFromLocalStorage() {
    if (typeof localStorage !== 'undefined') {
      const savedTask = localStorage.getItem('tasks')
      if (savedTask) {
        this.tasks = JSON.parse(savedTask)
        this.taskChanged.next(this.tasks.slice())
      }

      const deletedTask = localStorage.getItem('tasks deleted')
      if (deletedTask) {
        this.tasksDeleted = JSON.parse(deletedTask)
        this.taskDeletedChanged.next(this.tasksDeleted.slice())
      }
    }
  }

  setLocalStorage() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
      localStorage.setItem('tasks deleted', JSON.stringify(this.tasksDeleted))
    }
  }
}
