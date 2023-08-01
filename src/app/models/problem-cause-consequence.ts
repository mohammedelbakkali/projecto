export interface ProblemCauseConsequence {
    Type:string | 'Solution' | 'Problem' | 'Cause' | 'Impact' | 'Consequence';
    Titre:string;
    Descriptif:string;
    Niveau:string;
    Indice: number;
    SolutionAssocie:ProblemCauseConsequence;
    subProblem: ProblemCauseConsequence[];
    subCause: ProblemCauseConsequence[];
    hypothese: string;
    Causes:ProblemCauseConsequence[];
    Consequence: ProblemCauseConsequence;
    Impact:ProblemCauseConsequence[];
}
