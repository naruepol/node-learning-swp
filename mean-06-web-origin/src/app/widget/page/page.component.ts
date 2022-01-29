import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WorkzoneService } from 'src/app/service/workzone.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  @Input('title') title: string | null | undefined;

  constructor(public workZone: WorkzoneService) {}

  ngOnInit(): void {}
}
