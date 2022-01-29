import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-store-sessions-chart',
  templateUrl: './store-sessions-chart.component.html',
  styleUrls: ['./store-sessions-chart.component.scss'],
})
export class StoreSessionsChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [
    '2558',
    '2559',
    '2560',
    '2561',
    '2562',
    '2563',
    '2564',
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'หญิง' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'ชาย' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
