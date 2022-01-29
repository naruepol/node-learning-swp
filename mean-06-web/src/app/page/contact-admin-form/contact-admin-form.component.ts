import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactAdminService } from 'src/app/service/contact-admin.service';

@Component({
  selector: 'app-contact-admin-form',
  templateUrl: './contact-admin-form.component.html',
  styleUrls: ['./contact-admin-form.component.scss'],
})
export class ContactAdminFormComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      id: number;
      isEdit: boolean;
    },
    private mdDialogRef: MatDialogRef<ContactAdminFormComponent>,
    fb: FormBuilder,
    public contactService: ContactAdminService
  ) {
    this.contactForm = fb.group({
      status: ['C', [Validators.required]],
      comment: ['', [Validators.required]],
    });
  }

  public close(value: any) {
    this.mdDialogRef.close(value);
  }

  @HostListener('keydown.esc')
  public onEsc() {
    this.close(false);
  }

  ngOnInit(): void {}

  onSubmit() {
    const { id } = this.data;
    if (this.contactForm.valid) {
      this.contactService.updateContact(id, this.contactForm.value);
      this.mdDialogRef.close();
    }
  }
}
