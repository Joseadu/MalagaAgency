import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:UserService, private route:Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.service.IsLoggedIn()) {
      return true;
    } else {
      // sweetalert2
      // Swal.fire({
      //       position: "center",
      //       icon: "error",
      //       title: "Please login",
      //       showConfirmButton: false,
      //       timer: 3500
      //     });
      alert('please login')
      this.route.navigate(['/login']);
      return false;
    }
  }

}
