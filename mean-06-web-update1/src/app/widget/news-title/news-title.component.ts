import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-title',
  templateUrl: './news-title.component.html',
  styleUrls: ['./news-title.component.scss']
})
export class NewsTitleComponent implements OnInit {
  @Input() message: string = 'n/a';

  constructor() { }

  ngOnInit(): void {
  }

}
