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
            alert("No ha sido posible iniciar sesión")
            this.router.navigate(['/login'])
            return false
        }
    }
}