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
          ObjectifOuResultat: "Résultat",
          GlobalOuSpecifique: "Spécifique",
          Titre: "Boost Product Sales",
          Descriptif: "Increase sales of Product A by 20% and Product B by 25%.",
          Indice: 1,
          ResultatAssocie: [],
          ObjectifSpecifique: null
        },
        {
          ObjectifOuResultat: "Résultat",
          GlobalOuSpecifique: "Spécifique",
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
      GlobalOuSpecifique: "Spécifique",
      Titre: "Improve Customer Satisfaction",
      Descriptif: "Increase customer satisfaction rating to 95% or above.",
      Indice: 2,
      ResultatAssocie: [
        {
          ObjectifOuResultat: "Résultat",
          GlobalOuSpecifique: "Spécifique",
          Titre: "Enhance Customer Support",
          Descriptif: "Reduce average response time to customer inquiries to less than 1 hour.",
          Indice: 1,
          ResultatAssocie: [],
          ObjectifSpecifique: null
        },
        {
          ObjectifOuResultat: "Résultat",
          GlobalOuSpecifique: "Spécifique",
          Titre: "Implement Customer Feedback System",
          Descriptif: "Establish a feedback system to gather customer opinions and suggestions.",
          Indice: 2,
          ResultatAssocie: [],
          ObjectifSpecifique: null
        }
      ],
      ObjectifSpecifique: null
    }
  ];
  
  // You can add more data as needed to make the array even more comprehensive.
  
  constructor() { }
  fetchData(): any {
    console.log(this.data);
    return this.data;
  }
}
