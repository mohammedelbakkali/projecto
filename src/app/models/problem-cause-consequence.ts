export interface ProblemCauseConsequence {
    Type:string;
    Titre:string;
    Descriptif:string;
    Niveau:string;
    Indice: number;
    SolutionAssocie:string;
    DescriptifSolutionAssocie:string;
    Causes:ProblemCauseConsequence[];
    SousProbleme:ProblemCauseConsequence[];
    Consequence: ProblemCauseConsequence;
    Impact:ProblemCauseConsequence[];
}
