import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { WorkzoneService } from 'src/app/service/workzone.service';
import { AlertDialogComponent } from 'src/app/widget/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  editMode = false;
  id: number = 0;
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private userService: UserService,
    private router: Router,
    actRouter: ActivatedRoute,
    workZone: WorkzoneService
  ) {
    actRouter.params.subscribe((params) => {
      if (params.userId) {
        //(1) user has value
        this.editMode = true;
        this.id = params.userId;
        this.userService.getUserById(this.id).subscribe((user) => {
          this.userForm.patchValue(user);
        });
      }
    });
  }

  userForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    code: ['', [Validators.required, Validators.maxLength(5)]],
    name: ['', [Validators.required, Validators.maxLength(150)]],
    pwd: ['', [Validators.required, Validators.maxLength(15)]],
  });

  ngOnInit(): void {}

  onUserSubmit() {
    if (this.userForm.valid) {
      //(1) call service
      if (this.editMode) {
        this.userService
          .updateUser(this.id, this.userForm.value)
          .subscribe((resp) => {
            this.router.navigate(['', 'user']);
          });
      } else {
        this.userService.createUser(this.userForm.value).subscribe((resp) => {
          this.router.navigate(['', 'user']);
        });
      }
    } else {
      //(2) invalid form
      this.dialog.open(AlertDialogComponent, {
        data: {
          title: 'แจ้งเตือน',
          message: 'กรุณาระบุข้อมูลให้ครบถ้วน',
          closeText: 'ปิด',
        },
      });
    }
  }

  back() {
    this.router.navigate(['', 'user']);
  }
}
