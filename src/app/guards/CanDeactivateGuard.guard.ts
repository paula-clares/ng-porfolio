import { Injectable } from "@angular/core";
import { Router, CanDeactivate } from "@angular/router";
import { TasksService } from "../services/tasks.service";

interface CanComponentDeactivate {
    canDeactivate: () => boolean
}
@Injectable({
    providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    constructor(private service: TasksService, private router: Router) { }

    canDeactivate(): boolean {
        const confirmDeactivate = window.confirm('Are you sure you want to leave this page?')
        if (confirmDeactivate === true) {
            setTimeout(() => {
                this.router.navigate(['/login'])
            }, 1500);
            return true
        } else {
            return false
        }
    }
}