import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { WorkzoneService } from 'src/app/service/workzone.service';
import { AlertDialogComponent } from 'src/app/widget/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog,
    public workZone: WorkzoneService
  ) {}

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.maxLength(15)]],
  });

  ngOnInit(): void {}

  onLoginSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (resp) => {
          if (this.authService.isAuthen) {
            this.router.navigate(['', 'dashboard']);
          } else {
            // (2) Login Fail
            this.dialog.open(AlertDialogComponent, {
              data: {
                title: 'มีปัญหา',
                message: 'ไม่สามารถเข้าระบบได้กรุณาลองอีกครั้ง',
                closeText: 'ปิด',
              },
            });
          }
        },
        (error) => {
          // (3) Authen Fail
          this.dialog.open(AlertDialogComponent, {
            data: {
              title: 'มีปัญหา',
              message: 'ไม่สามารถเข้าระบบได้กรุณาลองอีกครั้ง',
              closeText: 'ปิด',
            },
          });
        }
      );
    } else {
      // (1) Invalid form
      this.dialog.open(AlertDialogComponent, {
        data: {
          title: 'แจ้งเตือน',
          message: 'กรุณาระบุข้อมูลให้ครบถ้วน',
          closeText: 'ปิด',
        },
      });
    }
  }

  gotoRegisterPage() {
    this.router.navigate(['', 'register']);
  }
}
