import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-product-sales-chart',
  templateUrl: './product-sales-chart.component.html',
  styleUrls: ['./product-sales-chart.component.scss'],
})
export class ProductSalesChartComponent implements OnInit {
  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = [
    'อาหาร',
    'เครื่องดื่ม',
    'อุปกรณ์กีฬา',
    'เครื่องประดับ',
    'เครื่องแต่งกาย',
    'เครื่องใช้ไฟฟ้า',
    'เครื่องครัว',
  ];

  public radarChartData: ChartDataSets[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'หญิง' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'ชาย' },
  ];
  public radarChartType: ChartType = 'radar';
  constructor() {}

  ngOnInit(): void {}
}
