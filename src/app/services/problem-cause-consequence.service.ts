import { Injectable } from '@angular/core';
import { ProblemCauseConsequence } from '../models/problem-cause-consequence';

@Injectable({
  providedIn: 'root'
})
export class ProblemCauseConsequenceService {
  private data: ProblemCauseConsequence[] = [
    {
      Type: "Main Problem",
      Titre: "Internet Connection Issue",
      Descriptif: "No internet connection is available.",
      Niveau: "Critical",
      Indice: 1,
      SolutionAssocie: "Reboot the router",
      DescriptifSolutionAssocie: "Unplug the router, wait for 30 seconds, and plug it back in.",
      Causes: [
        {
          Type: "Cause",
          Titre: "Router Malfunction",
          Descriptif: "The router hardware is faulty.",
          Niveau: "Medium",
          Indice: 1,
          SolutionAssocie: "Replace the router",
          DescriptifSolutionAssocie: "Get a new router and set it up with the correct configurations.",
          Causes: [],
          SousProbleme: [],
          Consequence: {
            Type: "Consequence",
            Titre: "No Connectivity",
            Descriptif: "Devices won't be able to connect to the internet.",
            Niveau: "High",
            Indice: 2,
            SolutionAssocie: "Contact Internet Service Provider",
            DescriptifSolutionAssocie: "Contact your ISP to check for connectivity issues.",
            Causes: [],
            SousProbleme: [],
            Consequence: null,
            Impact: []
          },
          Impact: []
        },
        {
          Type: "Cause",
          Titre: "Incorrect Network Configuration",
          Descriptif: "The network settings are misconfigured.",
          Niveau: "Low",
          Indice: 2,
          SolutionAssocie: "Reset network settings",
          DescriptifSolutionAssocie: "Reset network settings to default and reconfigure them.",
          Causes: [],
          SousProbleme: [],
          Consequence: {
            Type: "Consequence",
            Titre: "Limited Connectivity",
            Descriptif: "Some devices may have partial internet access.",
            Niveau: "Medium",
            Indice: 3,
            SolutionAssocie: "Check IP settings",
            DescriptifSolutionAssocie: "Verify IP settings and DHCP configurations.",
            Causes: [],
            SousProbleme: [],
            Consequence: null,
            Impact: []
          },
          Impact: []
        }
      ],
      SousProbleme: [
        {
          Type: "Sub-Problem",
          Titre: "Slow Internet Speed",
          Descriptif: "Internet connection is available but very slow.",
          Niveau: "Medium",
          Indice: 1,
          SolutionAssocie: "Check bandwidth usage",
          DescriptifSolutionAssocie: "Identify bandwidth-hungry applications and limit their usage.",
          Causes: [],
          SousProbleme: [],
          Consequence: {
            Type: "Consequence",
            Titre: "Frustration",
            Descriptif: "Users experience frustration due to slow loading times.",
            Niveau: "Low",
            Indice: 2,
            SolutionAssocie: "Upgrade Internet Plan",
            DescriptifSolutionAssocie: "Upgrade to a higher bandwidth internet plan.",
            Causes: [],
            SousProbleme: [],
            Consequence: null,
            Impact: []
          },
          Impact: []
        }
      ],
      Consequence: {
        Type: "Consequence",
        Titre: "Disrupted Work",
        Descriptif: "Users cannot perform their online tasks.",
        Niveau: "Critical",
        Indice: 3,
        SolutionAssocie: "Temporary mobile hotspot",
        DescriptifSolutionAssocie: "Use a temporary mobile hotspot until the internet connection is restored.",
        Causes: [],
        SousProbleme: [],
        Consequence: null,
        Impact: []
      },
      Impact: [
        {
          Type: "Impact",
          Titre: "Productivity Loss",
          Descriptif: "Business productivity decreases due to internet unavailability.",
          Niveau: "High",
          Indice: 1,
          SolutionAssocie: "Implement Redundant Internet Connection",
          DescriptifSolutionAssocie: "Set up a backup internet connection to ensure continuous operations.",
          Causes: [],
          SousProbleme: [],
          Consequence: null,
          Impact: []
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
