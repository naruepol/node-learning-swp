import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss'],
})
export class MiniCardComponent implements OnInit {
  @Input() icon: string | null | undefined;
  @Input() title: string | null | undefined;
  @Input() value: number | null | undefined;
  @Input() color: string | null | undefined;
  @Input() isIncrease: boolean | null | undefined;
  @Input() isCurrency: boolean | null | undefined;
  @Input() duration: string | null | undefined;
  @Input() percentValue: number | null | undefined;
  constructor() {}

  ngOnInit(): void {}
}
