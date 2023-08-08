export interface ActivityTask {
    RefTask: string;
    PhaseActivite:string;
    TypePeriode:string; // avant pendant aprés
    PeriodePhaseMin:string;
    PeriodePhaseMax:string;
    PeriodeDemaragePreferientielleInf:number;
    PeriodeDemaragePreferientiellesup:number;
    UnitePeriode:string;
    LabelTask:string;
    DescriptifTask:string;
    NiveauTask:number;
    OrderActivity:number;
    TaskObligatoireOuOptionnelle: string;
    ActivityMere:ActivityTask;
    ActivityFilles:ActivityTask[];
    
}
