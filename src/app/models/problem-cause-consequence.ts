export interface ProblemCauseConsequence {
    Type:string | 'Solution' | 'Problem' | 'Cause';
    Titre:string;
    Descriptif:string;
    Niveau:string;
    Indice: number;
    SolutionAssocie:ProblemCauseConsequence;
    subProblemCauseConsequence : ProblemCauseConsequence[];
    hypothese: string;
    Causes:ProblemCauseConsequence[];
    Consequence: ProblemCauseConsequence;
    Impact:ProblemCauseConsequence[];
}
