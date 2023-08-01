import { Injectable } from '@angular/core';
import { ObjectifResult } from '../models/objectif-result';

@Injectable({
  providedIn: 'root'
})
export class ObjectifResultService {
   data: ObjectifResult[] = [
    {
      ObjectifOuResultat: "Objectif",
      GlobalOuSpecifique: "Global",
      Titre: "Increase Revenue",
      Descriptif: "Achieve a 15% increase in overall company revenue.",
      Indice: 1,
      ResultatAssocie: [
        {
          ObjectifOuResultat: "Resultat",
          GlobalOuSpecifique: "Specifique",
          Titre: "Boost Product Sales",
          Descriptif: "Increase sales of Product A by 20% and Product B by 25%.",
          Indice: 1,
          ResultatAssocie: [],
          ObjectifSpecifique: null
        },
        {
          ObjectifOuResultat: "Resultat",
          GlobalOuSpecifique: "Specifique",
          Titre: "Expand Market Reach",
          Descriptif: "Enter three new international markets within the next year.",
          Indice: 2,
          ResultatAssocie: [],
          ObjectifSpecifique: null
        }
      ],
      ObjectifSpecifique: null
    },
    {
      ObjectifOuResultat: "Objectif",
      GlobalOuSpecifique: "Specifique",
      Titre: "Improve Customer Satisfaction",
      Descriptif: "Increase customer satisfaction rating to 95% or above.",
      Indice: 2,
      ResultatAssocie: [
        {
          ObjectifOuResultat: "Resultat",
          GlobalOuSpecifique: "Specifique",
          Titre: "Enhance Customer Support",
          Descriptif: "Reduce average response time to customer inquiries to less than 1 hour.",
          Indice: 1,
          ResultatAssocie: [],
          ObjectifSpecifique: null
        },
        {
          ObjectifOuResultat: "Resultat",
          GlobalOuSpecifique: "Specifique",
          Titre: "Implement Customer Feedback System",
          Descriptif: "Establish a feedback system to gather customer opinions and suggestions.",
          Indice: 2,
          ResultatAssocie: [],
          ObjectifSpecifique: null
        }
      ],
      ObjectifSpecifique: null
    },
      {
        ObjectifOuResultat: "Objectif",
        GlobalOuSpecifique: "Global",
        Titre: "Increase Revenue",
        Descriptif: "Achieve a 15% increase in overall company revenue.",
        Indice: 1,
        ResultatAssocie: [
          {
            ObjectifOuResultat: "Resultat",
            GlobalOuSpecifique: "Spécifique",
            Titre: "Boost Product Sales",
            Descriptif: "Increase sales of Product A by 20% and Product B by 25%.",
            Indice: 1,
            ResultatAssocie: [
              {
                ObjectifOuResultat: "Objectif",
                GlobalOuSpecifique: "Spécifique",
                Titre: "Expand Product A's Market Share",
                Descriptif: "Capture 10% more market share for Product A.",
                Indice: 1,
                ResultatAssocie: [
                  {
                    ObjectifOuResultat: "Resultat",
                    GlobalOuSpecifique: "Spécifique",
                    Titre: "Product A Market Research",
                    Descriptif: "Conduct market research to identify target segments for Product A.",
                    Indice: 1,
                    ResultatAssocie: [],
                    ObjectifSpecifique: null
                  },
                  {
                    ObjectifOuResultat: "Resultat",
                    GlobalOuSpecifique: "Spécifique",
                    Titre: "Product A Marketing Campaign",
                    Descriptif: "Launch a targeted marketing campaign for Product A.",
                    Indice: 2,
                    ResultatAssocie: [],
                    ObjectifSpecifique: null
                  }
                ],
                ObjectifSpecifique: null
              },
              {
                ObjectifOuResultat: "Objectif",
                GlobalOuSpecifique: "Spécifique",
                Titre: "Improve Product B's Packaging",
                Descriptif: "Redesign Product B's packaging for enhanced appeal.",
                Indice: 2,
                ResultatAssocie: [
                  {
                    ObjectifOuResultat: "Resultat",
                    GlobalOuSpecifique: "Spécifique",
                    Titre: "Packaging Redesign Plan",
                    Descriptif: "Create a detailed plan for Product B's packaging redesign.",
                    Indice: 1,
                    ResultatAssocie: [],
                    ObjectifSpecifique: null
                  },
                  {
                    ObjectifOuResultat: "Resultat",
                    GlobalOuSpecifique: "Spécifique",
                    Titre: "Packaging Prototype Development",
                    Descriptif: "Produce and test prototypes of the new packaging design.",
                    Indice: 2,
                    ResultatAssocie: [],
                    ObjectifSpecifique: null
                  }
                ],
                ObjectifSpecifique: null
              }
            ],
            ObjectifSpecifique: null
          },
          {
            ObjectifOuResultat: "Resultat",
            GlobalOuSpecifique: "Spécifique",
            Titre: "Expand Market Reach",
            Descriptif: "Enter three new international markets within the next year.",
            Indice: 2,
            ResultatAssocie: [
              {
                ObjectifOuResultat: "Objectif",
                GlobalOuSpecifique: "Spécifique",
                Titre: "Market Research for Targeted Countries",
                Descriptif: "Conduct market research to identify potential markets for expansion.",
                Indice: 1,
                ResultatAssocie: [],
                ObjectifSpecifique: null
              },
              {
                ObjectifOuResultat: "Objectif",
                GlobalOuSpecifique: "Spécifique",
                Titre: "Establish Local Partnerships",
                Descriptif: "Forge strategic partnerships with local distributors in target markets.",
                Indice: 2,
                ResultatAssocie: [],
                ObjectifSpecifique: null
              }
            ],
            ObjectifSpecifique: null
          }
        ],
        ObjectifSpecifique: null
      },
      {
        ObjectifOuResultat: "Objectif",
        GlobalOuSpecifique: "Spécifique",
        Titre: "Improve Customer Satisfaction",
        Descriptif: "Increase customer satisfaction rating to 95% or above.",
        Indice: 2,
        ResultatAssocie: [
          {
            ObjectifOuResultat: "Resultat",
            GlobalOuSpecifique: "Spécifique",
            Titre: "Enhance Customer Support",
            Descriptif: "Reduce average response time to customer inquiries to less than 1 hour.",
            Indice: 1,
            ResultatAssocie: [
              {
                ObjectifOuResultat: "Objectif",
                GlobalOuSpecifique: "Spécifique",
                Titre: "Customer Support Training",
                Descriptif: "Provide specialized training to customer support agents.",
                Indice: 1,
                ResultatAssocie: [],
                ObjectifSpecifique: null
              },
              {
                ObjectifOuResultat: "Objectif",
                GlobalOuSpecifique: "Spécifique",
                Titre: "Implement Live Chat Support",
                Descriptif: "Introduce live chat support for real-time assistance.",
                Indice: 2,
                ResultatAssocie: [],
                ObjectifSpecifique: null
              }
            ],
            ObjectifSpecifique: null
          },
          {
            ObjectifOuResultat: "Resultat",
            GlobalOuSpecifique: "Spécifique",
            Titre: "Implement Customer Feedback System",
            Descriptif: "Establish a feedback system to gather customer opinions and suggestions.",
            Indice: 2,
            ResultatAssocie: [
              {
                ObjectifOuResultat: "Objectif",
                GlobalOuSpecifique: "Spécifique",
                Titre: "Feedback Collection Mechanism",
                Descriptif: "Set up a platform for customers to submit feedback.",
                Indice: 1,
                ResultatAssocie: [],
                ObjectifSpecifique: null
              },
              {
                ObjectifOuResultat: "Objectif",
                GlobalOuSpecifique: "Spécifique",
                Titre: "Feedback Analysis",
                Descriptif: "Analyze customer feedback to extract valuable insights.",
                Indice: 2,
                ResultatAssocie: [],
                ObjectifSpecifique: null
              }
            ],
            ObjectifSpecifique: null
          }
        ],
        ObjectifSpecifique: null
      }
    ];
    
  
  constructor() { }
  fetchData(): any {
    console.log(this.data);
    return this.data;
  }
  fetchGlobalObjectifs(){
    return [
      {
        ObjectifOuResultat: 'Objectif',
        GlobalOuSpecifique: 'Global',
        Titre: 'Global Objective 1',
        Descriptif: 'Description of Global Objective 1',
        Indice: 1,
        ResultatAssocie: [
          {
            ObjectifOuResultat: 'Résultat',
            GlobalOuSpecifique: 'Spécifique',
            Titre: 'Specific Result 1',
            Descriptif: 'Description of Specific Result 1',
            Indice: 1,
            ResultatAssocie: [],
            ObjectifSpecifique: null,
          },
          {
            ObjectifOuResultat: 'Résultat',
            GlobalOuSpecifique: 'Spécifique',
            Titre: 'Specific Result 2',
            Descriptif: 'Description of Specific Result 2',
            Indice: 2,
            ResultatAssocie: [],
            ObjectifSpecifique: null,
          },
        ],
        ObjectifSpecifique: null,
      },
      {
        ObjectifOuResultat: 'Objectif',
        GlobalOuSpecifique: 'Global',
        Titre: 'Global Objective 2',
        Descriptif: 'Description of Global Objective 2',
        Indice: 2,
        ResultatAssocie: [
          {
            ObjectifOuResultat: 'Résultat',
            GlobalOuSpecifique: 'Spécifique',
            Titre: 'Specific Result 3',
            Descriptif: 'Description of Specific Result 3',
            Indice: 1,
            ResultatAssocie: [],
            ObjectifSpecifique: null,
          },
        ],
        ObjectifSpecifique: null,
      },
    ];
    
  }
}
