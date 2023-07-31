import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { ListTaskComponent } from "./list-task/list-task.component";
import { ChartBarComponent } from "../../../../charts/chart-bar/chart-bar.component";
import { TimelineChartComponent } from "../../../../charts/timeline-chart/timeline-chart.component";
import { ColumnChartComponent } from "../../../../charts/column-chart/column-chart.component";

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss'],
    imports: [CommonModule, MatTabsModule, ListTaskComponent, ChartBarComponent, TimelineChartComponent, ColumnChartComponent]
})
export class TasksComponent {

}
