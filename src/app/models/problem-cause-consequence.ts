export interface ProblemCauseConsequence {
    Type:string | 'Solution' | 'Problem' | 'Cause' | 'Impact' | 'Consequence'|'Hypothese';
    Titre:string;
    Descriptif:string;
    Niveau:string;
    Indice: number;
    Origine:ProblemCauseConsequence;
    ElementAssocie: ProblemCauseConsequence[];
   
}
