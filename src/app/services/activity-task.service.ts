import { Injectable } from '@angular/core';
import { ActivityTask } from '../models/activity-task';

@Injectable({
  providedIn: 'root'
})
export class ActivityTaskService {
 data: ActivityTask[] = [
    {
      RefTask: "TASK001",
      PhaseActivite: "Planning",
      TypePeriode: "avant",
      PeriodePhaseMin: "1",
      PeriodePhaseMax: "7",
      PeriodeDemaragePreferientielleInf: 2,
      PeriodeDemaragePreferientiellesup: 5,
      UnitePeriode: "days",
      LabelTask: "Gather Requirements",
      DescriptifTask: "Meet stakeholders and gather project requirements.",
      NiveauTask: 1,
      OrderActivity: 1,
      TaskObligatoireOuOptionnelle: "Obligatoire",
      ActivityMere: null, // No parent activity for this task
      ActivityFilles: [
        {
          RefTask: "TASK002",
          PhaseActivite: "Planning",
          TypePeriode: "pendant",
          PeriodePhaseMin: "14",
          PeriodePhaseMax: "30",
          PeriodeDemaragePreferientielleInf: 3,
          PeriodeDemaragePreferientiellesup: 4,
          UnitePeriode: "weeks",
          LabelTask: "Create Project Schedule",
          DescriptifTask: "Develop a detailed project schedule with milestones.",
          NiveauTask: 2,
          OrderActivity: 2,
          TaskObligatoireOuOptionnelle: "Obligatoire",
          ActivityMere: null, // The parent activity for this task is "TASK001"
          ActivityFilles: [] // No child activities for this task
        },
        {
          RefTask: "TASK003",
          PhaseActivite: "Execution",
          TypePeriode: "aprés",
          PeriodePhaseMin: "90",
          PeriodePhaseMax: "180",
          PeriodeDemaragePreferientielleInf: 4,
          PeriodeDemaragePreferientiellesup: 5,
          UnitePeriode: "days",
          LabelTask: "Implement Solution",
          DescriptifTask: "Execute the project plan and implement the proposed solution.",
          NiveauTask: 3,
          OrderActivity: 3,
          TaskObligatoireOuOptionnelle: "Obligatoire",
          ActivityMere: null, // The parent activity for this task is "TASK001"
          ActivityFilles: [] // No child activities for this task
        }
      ]
    },
    {
      RefTask: "TASK004",
      PhaseActivite: "Monitoring",
      TypePeriode: "avant",
      PeriodePhaseMin: "7",
      PeriodePhaseMax: "14",
      PeriodeDemaragePreferientielleInf: 1,
      PeriodeDemaragePreferientiellesup: 2,
      UnitePeriode: "weeks",
      LabelTask: "Define Key Performance Indicators",
      DescriptifTask: "Identify and define KPIs to monitor project progress.",
      NiveauTask: 2,
      OrderActivity: 4,
      TaskObligatoireOuOptionnelle: "Optionnelle",
      ActivityMere: null, // No parent activity for this task
      ActivityFilles: [
        {
          RefTask: "TASK005",
          PhaseActivite: "Monitoring",
          TypePeriode: "pendant",
          PeriodePhaseMin: "30",
          PeriodePhaseMax: "90",
          PeriodeDemaragePreferientielleInf: 2,
          PeriodeDemaragePreferientiellesup: 3,
          UnitePeriode: "days",
          LabelTask: "Collect Project Data",
          DescriptifTask: "Collect relevant project data to measure KPIs.",
          NiveauTask: 3,
          OrderActivity: 5,
          TaskObligatoireOuOptionnelle: "Optionnelle",
          ActivityMere: null, // The parent activity for this task is "TASK004"
          ActivityFilles: [] // No child activities for this task
        }
      ]
    }
  ];
  
  // You can add more data as needed to make the array even more comprehensive.
  
  constructor() { }
  fetchData(): any {
    return this.data;
  }
}
