import { Component, AfterViewInit, Renderer2, ElementRef, Input } from '@angular/core';
import { ProblemCauseConsequence } from '../models/problem-cause-consequence';
import { ProblemCauseConsequenceService } from '../services/problem-cause-consequence.service';

declare var google: any;

@Component({
  selector: 'app-tree',
  standalone: true,
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements AfterViewInit {
  @Input() id_cont: any;
  @Input() type: string; // Input to determine the type of data to show

  dataFromService: ProblemCauseConsequence[]; // Create a variable to hold the data

  ngOnInit(): void {
    google.charts.load('current', { packages: ['orgchart'] });
    google.charts.setOnLoadCallback(this.drawChart.bind(this));
    // Fetch the data from the service and assign it to the variable
    this.dataFromService = this.problemCauseConsequenceService.fetchData();
  }

  ngAfterViewInit(): void { }

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private problemCauseConsequenceService: ProblemCauseConsequenceService) { }

 

  drawChart(): void {
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Node');
    data.addColumn('string', 'Parent');
    data.addColumn('string', 'Tooltip');

    const filteredData = this.dataFromService.filter(item => item.Type === this.type);
    const flattenedTreeData = this.buildTreeData(filteredData, null);

    for (const node of flattenedTreeData) {
      data.addRow([
        { v: node.name, f: `${node.name}<div style="color:red; font-style:italic">${node.title}</div>` },
        node.parent || '',
        'Description'
      ]);
    }

    const chart = new google.visualization.OrgChart(document.getElementById(this.id_cont));
    chart.draw(data, {
      tooltip: { isHtml: true },
      allowHtml: true,
      allowCollapse: true,
      nodeClass: 'google-visualization-orgchart-node',
      theme: 'material',
    });
  }

  buildTreeData(data: ProblemCauseConsequence[], parent: string | null): any[] {
    const flattenedData: any[] = [];

    for (const node of data) {
      flattenedData.push({ name: node.Titre, parent: parent, title: node.Descriptif });
      if (node.ElementAssocie && node.ElementAssocie.length > 0) {
        const subProblemsData = this.buildTreeData(node.ElementAssocie, node.Titre);
        flattenedData.push(...subProblemsData);
      }
    }

    return flattenedData;
  }
}
