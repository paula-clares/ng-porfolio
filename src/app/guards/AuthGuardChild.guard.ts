import { Injectable } from "@angular/core";
import { Router, CanActivateChild, ActivatedRouteSnapshot, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { TasksService } from "../services/tasks.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuardChild implements CanActivateChild {
    constructor(private service: TasksService, private router: Router) { }

    canActivateChild(): boolean {
        if (this.service.authRouteChild()) {
            return true
        } else {
            alert("It was not possible to access this route")
            setTimeout(() => {
                this.router.navigate(['/login'])
            }, 1500);
            return false
        }
    }
}