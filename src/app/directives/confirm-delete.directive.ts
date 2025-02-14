import { Directive, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[appConfirmDelete]',
    standalone: false
})

export class AppConfirmDeleteDirective {

    @Input('appConfirmDelete') taskTitle: string = '';

    constructor() { }

    @HostListener('click', ['$event']) onClick(event: Event) {
        event.preventDefault()
        event.stopPropagation()

        const confirmed = confirm(`¿Quieres eliminar la tarea ${this.taskTitle}?`)
        
        if (confirmed === true) {
            alert(`Eliminada la tarea ${this.taskTitle}`)
            /* Hacer que no la elimine, actualmente lo hace igual */
        }
    }
}