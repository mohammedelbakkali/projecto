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
      SolutionAssocie: null,
      subProblem: [],
      subCause: [],
      hypothese: '',
      Causes: [],
      Consequence: null,
      Impact: [],
    },
    {
      Type: 'Problem',
      Titre: 'Problem 1',
      Descriptif: 'Description of Problem 1',
      Niveau: 'Level 1',
      Indice: 2,
      SolutionAssocie: null,
      subProblem: [
        {
          Type: 'Problem',
          Titre: 'Problem of Problem 1',
          Descriptif: 'Description of Problem of Problem 1',
          Niveau: 'Level 2',
          Indice: 1,
          SolutionAssocie: null,
          subProblem: [
            {
              Type: 'Problem', // This represents another level of Problems
              Titre: 'Sub-Problem of Problem 1',
              Descriptif: 'Description of Sub-Problem of Problem 1',
              Niveau: 'Level 3',
              Indice: 1,
              SolutionAssocie: null,
              subProblem: [],
              subCause: [],
              hypothese: '',
              Causes: [],
              Consequence: null,
              Impact: [],
            },
          ],
          subCause: [],
          hypothese: '',
          Causes: [
            {
              Type: 'Cause',
              Titre: 'Sub-cause 1',
              Descriptif: 'Description of Sub-cause 1',
              Niveau: 'Level 2',
              Indice: 1,
              SolutionAssocie: null,
              subProblem: [],
              subCause: [],
              hypothese: '',
              Causes: [],
              Consequence: null,
              Impact: [],
            },
          ],
          Consequence: null,
          Impact: [
            {
              Type: 'Impact', // This represents the impact of the sub-cause
              Titre: 'Impact of Sub-cause 1',
              Descriptif: 'Description of Impact of Sub-cause 1',
              Niveau: 'Level 4',
              Indice: 1,
              SolutionAssocie: null,
              subProblem: [],
              subCause: [],
              hypothese: '',
              Causes: [],
              Consequence: null,
              Impact: [],
            },
          ],
        },
      ],
      subCause: [],
      hypothese: '',
      Causes: [],
      Consequence: null,
      Impact: [],
    },
    {
      Type: 'Impact',
      Titre: 'Impact 1',
      Descriptif: 'Description of Impact 1',
      Niveau: 'Level 1',
      Indice: 3,
      SolutionAssocie: null,
      subProblem: [],
      subCause: [
        {
          Type: 'Cause', // This represents another level of causes
          Titre: 'Cause of Impact 1',
          Descriptif: 'Description of Cause of Impact 1',
          Niveau: 'Level 2',
          Indice: 1,
          SolutionAssocie: null,
          subProblem: [
            {
              Type: 'Impact', // This represents the impact of the sub-cause
              Titre: 'Impact of Cause of Impact 1',
              Descriptif: 'Description of Impact of Cause of Impact 1',
              Niveau: 'Level 3',
              Indice: 1,
              SolutionAssocie: null,
              subProblem: [],
              subCause: [],
              hypothese: '',
              Causes: [],
              Consequence: null,
              Impact: [],
            },
          ],
          Causes: [
            {
              Type: 'Cause', // This represents another level of causes
              Titre: 'Sub-cause of Problem 1',
              Descriptif: 'Description of Sub-cause of Problem 1',
              Niveau: 'Level 2',
              Indice: 1,
              SolutionAssocie: null,
              subProblem: [],
              subCause: [],
              hypothese: '',
              Causes: [],
              Consequence: null,
              Impact: [],
            },
          ],
          hypothese: '',
          subCause: [],
          Consequence: null,
          Impact: [],
        },
      ],
      hypothese: '',
      Causes: [],
      Consequence: null,
      Impact: [],
    },
    // Add more data as needed
  ];

  // You can add more data as needed to make the array even more comprehensive.

  constructor() {}
  fetchData(): any {
    return this.data;
  }
}
