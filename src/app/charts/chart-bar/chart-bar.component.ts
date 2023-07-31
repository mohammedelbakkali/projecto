import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexGrid,
  NgApexchartsModule
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  annotations: any; //ApexAnnotations;
  grid: ApexGrid;
  yaxis: any; // ApexYAxis;
};


@Component({
  selector: 'app-chart-bar',
  standalone: true,
  imports: [CommonModule,NgApexchartsModule],
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss']
})
export class ChartBarComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "reversed",
          data: [400, 430, 448, 470, 540, 580, 690]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      }, annotations: {
        xaxis: [
          {
            x: 500,
            borderColor: "#00E396",
            label: {
              borderColor: "#00E396",
              style: {
                color: "#fff",
                background: "#00E396"
              },
              text: "X annotation"
            }
          }
        ], yaxis: [
          {
            y: "July",
            y2: "September",
            label: {
              text: "Y annotation"
            }
          }
        ]
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ]
      },grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      yaxis: {
        reversed: true,
        axisTicks: {
          show: true
        }
      }
    };
  }
}
