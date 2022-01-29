import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class WorkzoneService {
  comName = 'นัดหมอ';
  appName = 'ระบบนัดหมายขอรับบริการทางการแพทย์';
  isDrawerOpen: boolean = true;
  constructor(private router: Router) {}

  toogleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
}
