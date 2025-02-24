import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-button',
  standalone: false,
  templateUrl: './details-button.component.html',
  styleUrl: './details-button.component.scss'
})
export class DetailsButtonComponent {
  @Input() taskId: number | null = null;

  constructor(private router: Router) {
  }

  detailsTask(): void {
    if (this.taskId === undefined || this.taskId === null) {
      throw new Error('No task found');
    }
    
    /* Colocar ruta completa siempre que sea subruta de otra, por eso añadimos "tasks" */
    this.router.navigate([`tasks/details/${this.taskId}`])
  }

}
