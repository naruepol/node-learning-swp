import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { WorkzoneService } from 'src/app/service/workzone.service';
import { AlertDialogComponent } from 'src/app/widget/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog,
    workZone: WorkzoneService
  ) {}

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    code: ['', [Validators.required, Validators.maxLength(5)]],
    name: ['', [Validators.required, Validators.maxLength(150)]],
    pwd: ['', [Validators.required, Validators.maxLength(15)]],
  });

  ngOnInit(): void {}

  onRegisterSubmit() {
    if (this.registerForm.valid) {
      this.authService
        .registerNewUser(this.registerForm.value)
        .subscribe((resp) => {
          if (resp) {
            this.router.navigate(['', 'login']);
          } else {
            // (2) when register fail
            this.dialog.open(AlertDialogComponent, {
              data: {
                title: 'มีปัญหา',
                message: 'ไม่สามารถลงทะเบียนได้กรุณาลองอีกครั้ง',
                closeText: 'ปิด',
              },
            });
          }
        });
    } else {
      // (1) when form invalid
      this.dialog.open(AlertDialogComponent, {
        data: {
          title: 'แจ้งเตือน',
          message: 'กรุณาระบุข้อมูลให้ครบถ้วน',
          closeText: 'ปิด',
        },
      });
    }
  }
}
