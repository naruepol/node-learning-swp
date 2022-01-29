import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubjectService } from 'src/app/service/subject.service';
import { AlertDialogComponent } from 'src/app/widget/alert-dialog/alert-dialog.component';
import { ConfirmDialogComponent } from 'src/app/widget/confirm-dialog/confirm-dialog.component';
import { SubjectFormComponent } from '../subject-form/subject-form.component';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {
  displayedColumns: string[] = ['ed', 'id', 'code', 'name', 'del'];

  constructor(public subject: SubjectService, private dialog: MatDialog) {}

  ngOnInit(): void {}

  onDeleteBtnClick(id: number) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        noText: 'ยกเลิก',
        yesText: 'ยืนยัน',
        title: 'กรุณายืนยันการลบรายการ',
        message: 'คุณต้องการลบรายการ #' + id + ' ใช่หรือไม่',
      },
    });

    confirmDialog.afterClosed().subscribe((resp) => {
      console.log(resp);
      if (resp) {
        this.showAlert('ลบข้อมูลสำเร็จ', 'ดำเนินการลบข้อมูลเรียบร้อยแล้ว');
      }
    });
  }

  onEditBtnClick(id: number) {
    this.dialog.open(SubjectFormComponent, {
      width: '100%',
      maxWidth: '450px',
      data: {
        id,
        isEdit: true,
      },
    });
  }

  showAlert(title: string, message: string) {
    this.dialog.open(AlertDialogComponent, {
      width: '350px',
      data: {
        title,
        message,
        closeText: 'ปิด',
      },
    });
  }
}
