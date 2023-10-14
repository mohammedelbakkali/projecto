import { CommonModule } from '@angular/common';
import { Component, ViewChild } from "@angular/core";

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent,
  ApexStroke,
  NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
};
@Component({
  selector: 'app-radial-bar',
  standalone: true,
  imports: [CommonModule,NgApexchartsModule],
  templateUrl: './radial-bar.component.html',
  styleUrls: ['./radial-bar.component.scss']
})
export class RadialBarComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [90],
      chart: {
        height: 350,
        type: "radialBar",
        offsetY: -10,
        
      },
      plotOptions: {
        radialBar: {
         
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: "16px",
              color: "#000",
              offsetY: 120
            },
            value: {
              offsetY: 76,
              fontSize: "22px",
              color: "#7b2cbf",
              formatter: function(val) {
                return val + "%";
              }
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
        }
      },
      stroke: {
        dashArray: 4
      },
      labels: ["Median Ratio"]
    };
  }
}
