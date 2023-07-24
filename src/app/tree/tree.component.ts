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

  drawChart(): void {
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Node'); // Updated column label to 'Node'
    data.addColumn('string', 'Parent'); // Updated column label to 'Parent'
    data.addColumn({type: 'string', role: 'tooltip'});
    data.addColumn('string', 'Title'); // New column for 'Title'
    data.addColumn('string', 'Description'); // New column for 'Description'
    data.addColumn('string', 'Niveau'); // New column for 'Niveau'
    data.addColumn('string', 'Indice'); // New column for 'Indice'
    data.addColumn('string', 'Causes'); // New column for 'Causes'
    data.addColumn('string', 'Consequences'); // New column for 'Consequences'
    data.addColumn('string', 'Solution'); // New column for 'Solution'

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
        {
          name: 'Lost Trail',
          title: 'Lost the hiking trail',
          description: 'Got off the designated trail and unable to find the way back.',
          niveau: 'Moderate',
          indice: '3',
          causes: 'Confusing trail junctions and lack of visible markers.',
          consequences: 'Potential delay in the trip and frustration.',
          solution: 'Refer to the map and ask fellow hikers for directions.',
          subProblems: [
            {
              name: 'No GPS Signal',
              title: 'No GPS signal on the device',
              description: 'GPS signal was unavailable on the navigation device.',
              niveau: 'Low',
              indice: '1',
              causes: 'Obstacles like dense trees blocking satellite signals.',
              consequences: 'Inability to rely on GPS navigation.',
              solution: 'Move to an open area to regain GPS signal.',
            },
            {
              name: 'No Trail Markers',
              title: 'Missing trail markers',
              description: 'Trail markers were not visible or missing along the route.',
              niveau: 'High',
              indice: '4',
              causes: 'Vandalism or natural elements damaging markers.',
              consequences: 'Difficulty in following the correct route.',
              solution: 'Look for natural landmarks or use a compass to navigate.',
            },
            {
              name: 'Confusing Trail Junctions',
              title: 'Confusing trail junctions',
              description: 'Encountered confusing intersections on the trail.',
              niveau: 'Medium',
              indice: '2',
              causes: 'Poorly marked trail junctions and unclear directions.',
              consequences: 'Taking the wrong path and getting off the route.',
              solution: 'Review trail maps in advance and consult with experienced hikers.',
            },
          ]
        },
        {
          name: 'Rainstorm',
          title: 'Caught in a heavy rainstorm',
          description: 'Encountered heavy rain and thunderstorm during the hike.',
          niveau: 'High',
          indice: '4',
          causes: 'Unpredictable weather and lack of weather forecast.',
          consequences: 'Wet gear, slippery trails, and increased risk of hypothermia.',
          solution: 'Carry waterproof gear and check weather forecast before the hike.',
        },
        {
          name: 'Injured',
          title: 'Suffered a minor injury',
          description: 'Experienced a minor injury like sprained ankle or cuts and scrapes.',
          niveau: 'Moderate',
          indice: '3',
          causes: 'Uneven terrain and accidental slips.',
          consequences: 'Pain and difficulty in continuing the hike.',
          solution: 'Carry a first-aid kit and apply immediate treatment.',
          subProblems: [
            {
              name: 'Sprained Ankle',
              title: 'Sprained ankle',
              description: 'Ankle sprain due to uneven terrain or misstep.',
              niveau: 'Medium',
              indice: '2',
              causes: 'Stepping on uneven rocks or slippery surfaces.',
              consequences: 'Swelling and inability to put weight on the ankle.',
              solution: 'R.I.C.E (Rest, Ice, Compression, Elevation) and seek medical help if severe.',
            },
            {
              name: 'Minor Cuts and Scrapes',
              title: 'Minor cuts and scrapes',
              description: 'Sustained minor cuts and scrapes from bushes or rocks.',
              niveau: 'Low',
              indice: '1',
              causes: 'Brushing against sharp objects during the hike.',
              consequences: 'Minor bleeding and discomfort.',
              solution: 'Clean the wound and apply antiseptic cream or bandage.',
            },
          ]
        },
        {
          name: 'Exhausted',
          title: 'Feeling exhausted and fatigued',
          description: 'Feeling extremely tired and fatigued during the hike.',
          niveau: 'Medium',
          indice: '2',
          causes: 'Strenuous hiking activities and lack of adequate rest.',
          consequences: 'Reduced energy levels and slower pace.',
          solution: 'Take short breaks, stay hydrated, and eat nutritious snacks.',
        },
        {
          name: 'Running Low on Water',
          title: 'Running low on water supply',
          description: 'Started to run out of drinking water during the hike.',
          niveau: 'High',
          indice: '4',
          causes: 'Inadequate water supply and hot weather conditions.',
          consequences: 'Dehydration and risk of heat-related illnesses.',
          solution: 'Carry enough water and ration the supply during the hike.',
        },
        {
          name: 'Unpredictable Weather',
          title: 'Unpredictable weather conditions',
          description: 'Weather conditions changed unexpectedly during the hike.',
          niveau: 'Moderate',
          indice: '3',
          causes: 'Changing weather patterns and lack of real-time forecast.',
          consequences: 'Difficulty in adapting to sudden weather changes.',
          solution: 'Stay informed about weather updates and prepare for different conditions.',
        },
      ]
    };

    const flattenedTreeData = this.flattenTreeData(hikingTripProblems, null);

    for (const node of flattenedTreeData) {
      const tooltipContent = `
      <div style="font-weight:bold">${node.name}</div>
      <div>${node.title}</div>
      <div>Description: ${node.description}</div>
      <div>Niveau: ${node.niveau}</div>
      <div>Indice: ${node.indice}</div>
      <div>Causes: ${node.causes}</div>
      <div>Consequences: ${node.consequences}</div>
      <div>Solution: ${node.solution}</div>
    `;
      data.addRow([
        { v: node.name, f: `${node.name}<div style="color:red; font-style:italic">${node.title}</div>` },
        node.parent || '',
        tooltipContent,
        node.title, // Adding the 'Title' value to the DataTable row
        node.description, // Adding the 'Description' value to the DataTable row
        node.niveau, // Adding the 'Niveau' value to the DataTable row
        node.indice, // Adding the 'Indice' value to the DataTable row
        node.causes, // Adding the 'Causes' value to the DataTable row
        node.consequences, // Adding the 'Consequences' value to the DataTable row
        node.solution, // Adding the 'Solution' value to the DataTable row
      ]);
    }

    const chart = new google.visualization.OrgChart(document.getElementById('orgChart'));

    chart.draw(data, { 'allowHtml': true , 'allowCollapse': true ,'nodeClass': 'google-visualization-orgchart-node'});
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
    const tooltip = 'tooltip should show on hover'
    flattenedData.push({ name, title, description, niveau, indice, causes, consequences, solution, parent, tooltip });
    return flattenedData;
  }
}
