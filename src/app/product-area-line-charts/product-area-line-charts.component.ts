import { productSalesMulti } from './../data/products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-area-line-charts',
  templateUrl: './product-area-line-charts.component.html',
  styleUrls: ['./product-area-line-charts.component.css']
})
export class ProductAreaLineChartsComponent implements OnInit {

  constructor() {
    Object.assign(this, { productSalesMulti });
  }

  productSalesMulti: any[] | undefined;
  view:  [700, 400] = [700, 400];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Products';
  yAxisLabel: string = 'Sales';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };

  onSelect(event: any) {
    console.log(event);
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit(): void {
  }
}
