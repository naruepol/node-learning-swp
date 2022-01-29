import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserFilterResp } from 'src/app/model/user-filter-resp';
import { UserService } from 'src/app/service/user.service';
import { WorkzoneService } from 'src/app/service/workzone.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  dataSource: UserFilterResp[] = [];
  displayedColumns: string[] = [
    'ed',
    'code',
    'name',
    'email',
    'role',
    'active',
    'del',
  ];

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
    workZone: WorkzoneService
  ) {}

  filterForm = this.fb.group({
    code: [''],
    name: [''],
    email: [''],
    role: ['U'],
    active: ['Y'],
  });

  ngOnInit(): void {
    this.onFilterClick();
  }

  onActiveChange(userId: number, active: string) {
    const iActive = active == 'Y' ? 'N' : 'Y';
    this.userService.active(userId, iActive).subscribe((resp) => {
      //(1) When update complete
      this.onFilterClick();
    });
  }

  onDeleteClick(userId: number) {
    this.userService.delete(userId).subscribe((resp) => {
      //(1) When delete complete
      this.onFilterClick();
    });
  }

  onFilterClick() {
    this.userService.filter(this.filterForm.value).subscribe((resp) => {
      this.dataSource = resp;
    });
  }

  onAddBtnClick() {
    this.router.navigate(['', 'user-form']);
  }

  onEditBtnClick(id: number) {
    this.router.navigate(['', 'user-form', id]);
  }
}
