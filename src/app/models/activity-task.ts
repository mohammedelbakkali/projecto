export interface ActivityTask {
    RefTask: string;
    PhaseActivite:string;
    Periode
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
