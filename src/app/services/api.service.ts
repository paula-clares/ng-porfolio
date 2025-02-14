import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  APIurl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  loadTask(): Observable<Task> {
    return this.http.get<Task>(this.APIurl);
  }
}
