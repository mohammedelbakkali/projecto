import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



declare var google: any;
interface IDataTable<T> {
  getNumberOfRows(): number;
}
@Component({
  selector: 'app-rh',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rh.component.html',
  styleUrls: ['./rh.component.scss']
})

export class GanttComponent {

  ngOnInit(): void {
    google.charts.load('current', { packages: ['gantt'] });
    google.charts.setOnLoadCallback(this.drawChart.bind(this));
  }
   getRowCount(data:IDataTable<number> ): number {
    return data.getNumberOfRows();
  }

  drawChart() {
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Task ID');
    data.addColumn('string', 'Task Name');
    data.addColumn('string', 'Resource');
    data.addColumn('date', 'Start Date');
    data.addColumn('date', 'End Date');
    data.addColumn('number', 'Duration');
    data.addColumn('number', 'Percent Complete');
    data.addColumn('string', 'Dependencies');



    data.addRows([
    ['2014Spring', 'abray', 'spring', new Date(2023, 2, 1), new Date(2023, 2, 4), null, 100, null],
    ['2014Summer', 'Summer 2014', 'summer', new Date(2023, 2, 5), new Date(2023, 2, 8), null, 100, null],
    ['2014Autumn', 'Autumn 2014', 'autumn', new Date(2023, 2, 9), new Date(2023, 2, 10), null, 100, null],
    ['2014Winter', 'Winter 2014', 'winter', new Date(2023, 2, 11), new Date(2023, 2, 16), null, 100, null],
    ['2015Spring', 'Spring 2015', 'spring', new Date(2023, 2, 17), new Date(2023, 2, 28), null, 50, null],
    ['2015Summer', 'Summer 2015', 'summer', new Date(2023, 3, 1), new Date(2023, 3, 10), null, 75, null],
    ['2015Autumn', 'Autumn 2015', 'autumn', new Date(2023, 3, 11), new Date(2023, 3, 20), null, 80, null],
    ['2015Winter', 'Winter 2015', 'winter', new Date(2023, 3, 21), new Date(2023, 3, 30), null, 90, null],
    ]);
    
 const rowCount = this.getRowCount(data);
   
  const options = {
  
  height: rowCount*35,
  gantt: {
    trackHeight: 30
  }
};


    const chart = new google.visualization.Gantt(document.getElementById('chronogram'));

    chart.draw(data, options);
   
  }
}
