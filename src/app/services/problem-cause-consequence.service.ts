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
  },
  {
    Type: "Main Problem",
    Titre: "Computer Crashes",
    Descriptif: "Computers are crashing randomly.",
    Niveau: "Critical",
    Indice: 2,
    SolutionAssocie: "Update device drivers",
    DescriptifSolutionAssocie: "Update all device drivers to the latest version.",
    Causes: [
      {
        Type: "Cause",
        Titre: "Incompatible Drivers",
        Descriptif: "Some device drivers are incompatible with the operating system.",
        Niveau: "Medium",
        Indice: 1,
        SolutionAssocie: "Rollback drivers",
        DescriptifSolutionAssocie: "Roll back the drivers to the previously working versions.",
        Causes: [],
        SousProbleme: [],
        Consequence: {
          Type: "Consequence",
          Titre: "Device Malfunction",
          Descriptif: "Devices may not function correctly with incompatible drivers.",
          Niveau: "High",
          Indice: 2,
          SolutionAssocie: "Find alternative drivers",
          DescriptifSolutionAssocie: "Search for compatible drivers from other sources.",
          Causes: [],
          SousProbleme: [],
          Consequence: null,
          Impact: []
        },
        Impact: []
      },
      {
        Type: "Cause",
        Titre: "Hardware Overheating",
        Descriptif: "Hardware components are overheating and causing crashes.",
        Niveau: "Low",
        Indice: 2,
        SolutionAssocie: "Clean and improve cooling",
        DescriptifSolutionAssocie: "Clean the hardware and improve cooling system airflow.",
        Causes: [],
        SousProbleme: [],
        Consequence: {
          Type: "Consequence",
          Titre: "Permanent Damage",
          Descriptif: "Continuous overheating may cause permanent damage to hardware.",
          Niveau: "High",
          Indice: 3,
          SolutionAssocie: "Replace damaged components",
          DescriptifSolutionAssocie: "Replace any hardware components damaged by overheating.",
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
        Titre: "Blue Screen of Death (BSOD)",
        Descriptif: "Computers encounter BSOD errors.",
        Niveau: "Medium",
        Indice: 1,
        SolutionAssocie: "Update operating system",
        DescriptifSolutionAssocie: "Apply the latest updates and patches to the operating system.",
        Causes: [],
        SousProbleme: [],
        Consequence: {
          Type: "Consequence",
          Titre: "Data Loss",
          Descriptif: "Data may be lost during unexpected system crashes.",
          Niveau: "High",
          Indice: 2,
          SolutionAssocie: "Regular data backups",
          DescriptifSolutionAssocie: "Perform regular backups to prevent data loss.",
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
      Titre: "Downtime",
      Descriptif: "Computers are not operational during crashes.",
      Niveau: "Critical",
      Indice: 3,
      SolutionAssocie: "Implement redundant systems",
      DescriptifSolutionAssocie: "Set up redundant systems for critical operations.",
      Causes: [],
      SousProbleme: [],
      Consequence: null,
      Impact: []
    },
    Impact: [
      {
        Type: "Impact",
        Titre: "Business Disruption",
        Descriptif: "Business operations are disrupted during computer crashes.",
        Niveau: "High",
        Indice: 1,
        SolutionAssocie: "Emergency response plan",
        DescriptifSolutionAssocie: "Implement an emergency response plan for handling downtime.",
        Causes: [],
        SousProbleme: [],
        Consequence: null,
        Impact: []
      },
      {
        Type: "Impact",
        Titre: "Reputation Damage",
        Descriptif: "Frequent crashes may damage the company's reputation.",
        Niveau: "Medium",
        Indice: 2,
        SolutionAssocie: "Customer communication",
        DescriptifSolutionAssocie: "Keep customers informed about the situation and progress.",
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
