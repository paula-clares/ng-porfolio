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

        const confirmed = confirm(`Do you want to delete the task ${this.taskTitle}?`)
        
        if (confirmed === true) {
            alert(`Task ${this.taskTitle} deleted`)
            /* Hacer que no la elimine, actualmente lo hace igual */
        }
    }
}