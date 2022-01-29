import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss'],
})
export class SubjectFormComponent implements OnInit {
  subjectForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      id: number;
      isEdit: boolean;
    },
    private mdDialogRef: MatDialogRef<SubjectFormComponent>,
    private fb: FormBuilder
  ) {
    this.subjectForm = fb.group({
      code: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{5}')]],
      name: [
        '',
        [
          Validators.required,
          Validators.pattern('[\u0E00-\u0E7Fa-zA-Z]{3,20}'),
        ],
      ],
    });
  }

  public close(value: any) {
    this.mdDialogRef.close(value);
  }

  @HostListener('keydown.esc')
  public onEsc() {
    this.close(false);
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  onSubmit() {}
}
