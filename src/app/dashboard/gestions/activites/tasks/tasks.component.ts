import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { ListTaskComponent } from "./list-task/list-task.component";
import { ChartBarComponent } from "../../../../charts/chart-bar/chart-bar.component";
import { TimelineChartComponent } from "../../../../charts/timeline-chart/timeline-chart.component";
import { ColumnChartComponent } from "../../../../charts/column-chart/column-chart.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { CalendarComponent } from "../../../../calendar/calendar.component";
import { ProtagonisteComponent } from "../../protagoniste/protagoniste.component";
import { KanbanComponent } from "../../../../charts/kanban/kanban.component";
import { DragDropComponent } from "../../../../charts/drag-drop/drag-drop.component";

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss'],
    imports: [CommonModule, RouterLink, RouterOutlet, MatTabsModule, ListTaskComponent, ChartBarComponent, TimelineChartComponent, ColumnChartComponent, CalendarComponent, ProtagonisteComponent, KanbanComponent, DragDropComponent]
})
export class TasksComponent {
    tab1:boolean = true;
    tab2:boolean = false;
    tab3:boolean = false;

    


    changeDisplayTotab1(){
       this.tab1 = true;
       this.tab2 = false;
       this.tab3 = false;

    }

    changeDisplayTotab2(){
      this.tab1 = false;
      this.tab2 = true;
      this.tab3 = false;
  }

  changeDisplayTotab3(){
    this.tab1 = false;
    this.tab2 = false;
    this.tab3 = true;
}

changeDisplayTotab4(event:any){
    console.log(event)
} 
}
