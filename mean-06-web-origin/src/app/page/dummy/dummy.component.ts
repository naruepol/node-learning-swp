import { Component, OnInit } from '@angular/core';
import { WorkzoneService } from 'src/app/service/workzone.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss'],
})
export class DummyComponent implements OnInit {
  constructor(public workZone: WorkzoneService) {}

  ngOnInit(): void {}
}
