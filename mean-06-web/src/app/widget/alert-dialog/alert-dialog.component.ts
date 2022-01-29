import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss'],
})
export class AlertDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      closeText: string;
      message: string;
      title: string;
    },
    private mdDialogRef: MatDialogRef<AlertDialogComponent>
  ) {}

  public close(value: any) {
    this.mdDialogRef.close(value);
  }

  @HostListener('keydown.esc')
  public onEsc() {
    this.close(false);
  }
}
