import { CommonModule } from '@angular/common';
import { Component, AfterViewInit,Renderer2, ElementRef  } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements AfterViewInit {
  ngOnInit(): void {
    google.charts.load('current', { packages: ['orgchart'] });
    google.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  ngAfterViewInit(): void {}
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
 
  drawChart(): void {
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Node');
    data.addColumn('string', 'Parent');
    data.addColumn('string', 'Tooltip');

    const hikingTripProblems = {
      name: 'Hiking Trip',
      title: 'Main Trip Problem',
      description: 'The main problem that occurred during the hiking trip.',
      niveau: 'Critical',
      indice: '5',
      causes: 'Extreme weather conditions and trail confusion.',
      consequences: 'Lost direction, running low on supplies, and risk of injury.',
      solution: 'Use GPS devices, carry sufficient supplies, and follow trail markers.',
      subProblems: [
    
      ],
    };

const flattenedTreeData = this.flattenTreeData(hikingTripProblems, null);

    for (const node of flattenedTreeData) {

      data.addRow([
        { v: node.name, f: `${node.name}<div style="color:red; font-style:italic">${node.title}</div>` },
        node.parent || '',
        
    this.renderer.createElement('div').innerHTML = `
      <div style="color:red; font-style:italic">${node.title}</div>
      <ul>
        <li style="font-weight:bold">${node.name}</li>
        <li>${node.title}</li>
        <li>Description: ${node.description}</li>
        <li>Niveau: ${node.niveau}</li>
        <li>Indice: ${node.indice}</li>
        <li>Causes: ${node.causes}</li>
        <li>Consequences: ${node.consequences}</li>
        <li>Solution: ${node.solution}</li>
      </ul>
    `
  
]);
}
  
    

    const chart = new google.visualization.OrgChart(document.getElementById('orgChart'));

    chart.draw(data, {
      tooltip: { isHtml: true },
      allowHtml: true,
      allowCollapse: true,
      nodeClass: 'google-visualization-orgchart-node',
      theme: 'material',
    });
  }

  


  flattenTreeData(node: any, parent: string | null): any[] {
    const flattenedData: any[] = [];
    const { name, title, description, niveau, indice, causes, consequences, solution, subProblems } = node;

    if (subProblems && subProblems.length > 0) {
      for (const subProblem of subProblems) {
        const subProblemsData = this.flattenTreeData(subProblem, name);
        flattenedData.push(...subProblemsData);
      }
    }
    flattenedData.push({ name, parent, title, description, niveau, indice, causes, consequences, solution });
    return flattenedData;
  }
}

