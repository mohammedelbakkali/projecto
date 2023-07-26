import { ProblemCauseConsequence } from "./problem-cause-consequence";

export interface Project{
   RefProject: String;
   TypeProject: String;
   ObjectifGlobal:String;
   Designation : String;
   Descriptif: String;
   TypeAuteur: String;
   InpsirerParModelProjet: Project[];
   InpsirerParReelProjet: Project[];
   DateCreation : Date;
   DateValidation: Date;
   DatePublication : Date;
   EtatProjet: String;
   CommentaireInterne: String[];
   Base: Project;
   Variantes: Project[];
   Versions : Project[];
   ProblemCauseConsequence: ProblemCauseConsequence[];
  }
  