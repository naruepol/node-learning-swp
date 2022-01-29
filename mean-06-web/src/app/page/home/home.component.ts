import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { WorkzoneService } from 'src/app/service/workzone.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public workZone: WorkzoneService) {}

  ngOnInit(): void {}
}
