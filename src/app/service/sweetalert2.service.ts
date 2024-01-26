import { Injectable } from '@angular/core';
import Swal, { SweetAlertPosition } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class Sweetalert2Service {

  showNotification(title: string, position: SweetAlertPosition = 'top-end', timer: number = 3500): void {
    Swal.fire({
      position: position,
      title: `<p>${title}</p>`,
      showConfirmButton: false,
      timer: timer,
      customClass: {
        popup: 'custom-popup-class',
      }
    });
  }
  
}