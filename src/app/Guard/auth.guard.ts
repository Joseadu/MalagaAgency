import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
import { Sweetalert2Service } from 'src/app/service/sweetalert2.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:UserService, private route:Router, private sweetAlert2Service:Sweetalert2Service) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.service.IsLoggedIn()) {
      return true;
    } else {
      this.sweetAlert2Service.showNotification('Please login');

      this.route.navigate(['/login']);
      return false;
    }
  }

}
