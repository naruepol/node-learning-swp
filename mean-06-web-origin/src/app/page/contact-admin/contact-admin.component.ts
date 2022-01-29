import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactAdminService } from 'src/app/service/contact-admin.service';
import { ContactAdminFormComponent } from '../contact-admin-form/contact-admin-form.component';

@Component({
  selector: 'app-contact-admin',
  templateUrl: './contact-admin.component.html',
  styleUrls: ['./contact-admin.component.scss'],
})
export class ContactAdminComponent implements OnInit {
  displayedColumns: string[] = ['id', 'subject', 'message', 'status'];
  constructor(
    public contactAdmin: ContactAdminService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  onCommentBtnClick(id: number) {
    const formDialog = this.dialog.open(ContactAdminFormComponent, {
      width: '100%',
      maxWidth: '450px',
      data: {
        id,
        isEdit: true,
      },
    });
  }
}
