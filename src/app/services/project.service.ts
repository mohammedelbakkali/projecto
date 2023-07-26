import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private mockData: Project[] = [
    {
      RefProject: 'ABC123',
      TypeProject: 'Type A',
      ObjectifGlobal: 'Some global objective',
      Designation: 'Project A',
      Descriptif: 'Description of Project A',
      TypeAuteur: 'Author A',
      InpsirerParModelProjet: [],
      InpsirerParReelProjet: [],
      DateCreation: new Date('2023-07-25'),
      DateValidation: new Date('2023-08-01'),
      DatePublication: new Date('2023-08-05'),
      EtatProjet: 'In Progress',
      CommentaireInterne: ['Comment 1', 'Comment 2'],
      Base: null,
      Variantes: [],
      Versions: []
    },
    {
      RefProject: 'XYZ456',
      TypeProject: 'Type B',
      ObjectifGlobal: 'Another global objective',
      Designation: 'Project B',
      Descriptif: 'Description of Project B',
      TypeAuteur: 'Author B',
      InpsirerParModelProjet: [],
      InpsirerParReelProjet: [],
      DateCreation: new Date('2023-07-20'),
      DateValidation: new Date('2023-07-30'),
      DatePublication: new Date('2023-08-10'),
      EtatProjet: 'Completed',
      CommentaireInterne: ['Comment 3', 'Comment 4'],
      Base: null,
      Variantes: [],
      Versions: []
    },
    // Add more mock data as needed
  ];

  constructor() { }
  fetchData(): any {
    return this.mockData;
  }
}
