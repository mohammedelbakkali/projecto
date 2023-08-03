import { Injectable } from '@angular/core';
import { ProblemCauseConsequence } from '../models/problem-cause-consequence';

@Injectable({
  providedIn: 'root',
})
export class ProblemCauseConsequenceService {
 private data: ProblemCauseConsequence[] = [
  {
    Type: 'Solution',
    Titre: 'Solution 1',
    Descriptif: 'Description of Solution 1',
    Niveau: 'Level 1',
    Indice: 1,
    Origine: null,
    ElementAssocie: [],
  },
  {
    Type: 'Problem',
    Titre: 'Problem 1',
    Descriptif: 'Description of Problem 1',
    Niveau: 'Level 1',
    Indice: 2,
    Origine: null,
    ElementAssocie: [
      {
        Type: 'Problem',
        Titre: 'Problem of Problem 1',
        Descriptif: 'Description of Problem of Problem 1',
        Niveau: 'Level 2',
        Indice: 1,
        Origine: null,
        ElementAssocie: [
          {
            Type: 'Problem', // This represents another level of Problems
            Titre: 'Sub-Problem of Problem 1',
            Descriptif: 'Description of Sub-Problem of Problem 1',
            Niveau: 'Level 3',
            Indice: 1,
            Origine: null,
            ElementAssocie: [],
          },
        ],
      },
    ],
  },
  {
    Type: 'Impact',
    Titre: 'Impact 1',
    Descriptif: 'Description of Impact 1',
    Niveau: 'Level 1',
    Indice: 3,
    Origine: null,
    ElementAssocie: [
      {
        Type: 'Cause', // This represents another level of causes
        Titre: 'Cause of Impact 1',
        Descriptif: 'Description of Cause of Impact 1',
        Niveau: 'Level 2',
        Indice: 1,
        Origine: null,
        ElementAssocie: [
          {
            Type: 'Impact', // This represents the impact of the sub-cause
            Titre: 'Impact of Cause of Impact 1',
            Descriptif: 'Description of Impact of Cause of Impact 1',
            Niveau: 'Level 3',
            Indice: 1,
            Origine: null,
            ElementAssocie: [],
          },
        ],
      },
    ],
  },
  {
    Type: 'Consequence',
    Titre: 'Consequence 1',
    Descriptif: 'Description of Consequence 1',
    Niveau: 'Level 1',
    Indice: 4,
    Origine: null,
    ElementAssocie: [
      {
        Type: 'Cause', // This represents another level of causes
        Titre: 'Cause of Consequence 1',
        Descriptif: 'Description of Cause of Consequence 1',
        Niveau: 'Level 2',
        Indice: 1,
        Origine: null,
        ElementAssocie: [
          {
            Type: 'Consequence', // This represents the consequence of the sub-cause
            Titre: 'Consequence of Cause of Consequence 1',
            Descriptif: 'Description of Consequence of Cause of Consequence 1',
            Niveau: 'Level 3',
            Indice: 1,
            Origine: null,
            ElementAssocie: [],
          },
        ],
      },
    ],
  },
  // Add more data as needed
];

  // You can add more data as needed to make the array even more comprehensive.

  constructor() {}
  fetchData(): any {
    return this.data;
  }
}
