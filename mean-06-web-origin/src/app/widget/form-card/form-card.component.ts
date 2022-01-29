import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss'],
})
export class FormCardComponent implements OnInit {
  @Input() title: String | null | undefined;
  @Input() subtitle: String | null | undefined;
  @Input() backUrl: String[] | null | undefined;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  back() {
    if (this.backUrl) {
      this.router.navigate(this.backUrl);
    }
  }
}
