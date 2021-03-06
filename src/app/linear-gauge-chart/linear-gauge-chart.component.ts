import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linear-gauge-chart',
  templateUrl: './linear-gauge-chart.component.html',
  styleUrls: ['./linear-gauge-chart.component.css']
})
export class LinearGaugeChartComponent implements OnInit {

  single!: any[];
  view!: [700, 400];
  colorScheme = {
    domain: ['#aae3f5']
  };
  value: number = 43;
  previousValue: number = 70;
  units: string = 'counts';

  onSelect(event: any) {
    console.log(event);
  }

  ngOnInit(): void {
  }

}

