import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
import { Sweetalert2Service } from '../service/sweetalert2.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private roleService: UserService, private sweetAlert2Service: Sweetalert2Service, private route: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.roleService.GetRole() == 'admin') {
        this.route.navigate(['home']);
      } else {
        this.sweetAlert2Service.showErrorNotification("You are not authorized to access");
        this.route.navigate(['login']);
        return false;
      }

    return true;
  }
  
}
