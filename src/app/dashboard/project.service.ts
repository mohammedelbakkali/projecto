import { Injectable } from '@angular/core';
import { Project } from '../shared/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }


  private projects: Project[] = [
    {
      id: 1,
      taxonomie: 'Technologie',
      type: 'Recherche',
      periode: '2023-2025',
      dateDemarrage: new Date(2023, 7, 1),
      descriptif: 'Un projet de recherche sur...',
      tasks: [
        { nom: 'Analyse préliminaire', obligatoire: true },
        { nom: 'Développement du prototype', obligatoire: true },
        // ...
      ],
      etatAvancement: 60,
      colabs: ['Alice', 'Bob', 'Charlie']
    },
    // ... autres projets
  ];


  
  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find(project => project.id === id);
  }

  updateProject(project: Project): void {
    const index = this.projects.findIndex(p => p.id === project.id);
    if (index !== -1) {
      this.projects[index] = project;
    }
  }
  
}
