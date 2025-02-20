import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { TasksService } from "../services/tasks.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private service: TasksService, private router: Router) { }

    canActivate(): boolean {
        if (this.service.isLoggedIn()) {
            return true
        } else {
            alert("Log in could not be completed")
            this.router.navigate(['/login'])
            return false
        }
    }
}