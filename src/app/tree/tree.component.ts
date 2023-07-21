import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
declare var google : any;
@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})

export class TreeComponent implements OnInit{
  ngOnInit(): void{

  google.charts.load('current', {packages:["orgchart"]});
  google.charts.setOnLoadCallback(this.drawChart.bind(this));

  }
 // ... (other code remains the same)
// ... (other code remains the same)

flattenTreeData(treeData: any[], parent?: string): any[] {
  const flattenedData: any[] = [];

  for (const node of treeData) {
    const { name, title, description, subProblems } = node;
    const tooltip = subProblems && subProblems.length > 0 ? 'Click to see sub-problems' : 'No sub-problems';
    flattenedData.push({ name, title, description, parent, tooltip });
    if (subProblems && subProblems.length > 0) {
      const subProblemsData = this.flattenTreeData(subProblems, name);
      flattenedData.push(...subProblemsData);
    }
  }

  return flattenedData;
}


// ... (rest of the code remains the same)

drawChart(): void {
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'Node'); // Updated column label to 'Node'
  data.addColumn('string', 'Parent'); // Updated column label to 'Parent'
  data.addColumn('string', 'Tooltip'); // Updated column label to 'Tooltip'
  data.addColumn('string', 'Problem'); // New column for 'Problem'
  data.addColumn('string', 'Description'); // New column for 'Description'

  const hikingTripProblems = [
    { name: 'Hiking Trip', title: 'Main Trip Problem', description: 'The main problem that occurred during the hiking trip.', subProblems: [
      { name: 'Lost Trail', title: 'Lost the hiking trail', description: 'Got off the designated trail and unable to find the way back.' },
      { name: 'Rainstorm', title: 'Caught in a heavy rainstorm', description: 'Encountered heavy rain and thunderstorm during the hike.' },
      { name: 'Injured', title: 'Suffered a minor injury', description: 'Experienced a minor injury like sprained ankle or cuts and scrapes.' },
      { name: 'Exhausted', title: 'Feeling exhausted and fatigued', description: 'Feeling extremely tired and fatigued during the hike.' },
      { name: 'Running Low on Water', title: 'Running low on water supply', description: 'Started to run out of drinking water during the hike.' },
      { name: 'Unpredictable Weather', title: 'Unpredictable weather conditions', description: 'Weather conditions changed unexpectedly during the hike.' },
    ] },
    { name: 'Lost Trail', title: 'Lost the hiking trail', description: 'Got off the designated trail and unable to find the way back.', subProblems: [
      { name: 'No GPS Signal', title: 'No GPS signal on the device', description: 'GPS signal was unavailable on the navigation device.' },
      { name: 'No Trail Markers', title: 'Missing trail markers', description: 'Trail markers were not visible or missing along the route.' },
      { name: 'Confusing Trail Junctions', title: 'Confusing trail junctions', description: 'Encountered confusing intersections on the trail.' },
    ] },
    { name: 'Injured', title: 'Suffered a minor injury', description: 'Experienced a minor injury like sprained ankle or cuts and scrapes.', subProblems: [
      { name: 'Sprained Ankle', title: 'Sprained ankle', description: 'Ankle sprain due to uneven terrain or misstep.' },
      { name: 'Minor Cuts and Scrapes', title: 'Minor cuts and scrapes', description: 'Sustained minor cuts and scrapes from bushes or rocks.' },
    ] },
  ];

  const flattenedTreeData = this.flattenTreeData(hikingTripProblems);

  for (const node of flattenedTreeData) {
    data.addRow([
      { v: node.name, f: `${node.name}<div style="color:red; font-style:italic">${node.title}</div>` },
      node.manager || '',
      node.tooltip,
      node.problem, // Adding the 'Problem' value to the DataTable row
      node.description // Adding the 'Description' value to the DataTable row
    ]);
  }

  const chart = new google.visualization.OrgChart(document.getElementById('orgChart'));
  chart.draw(data, { 'allowHtml': true });
}

// ... (rest of the code remains the same)
}