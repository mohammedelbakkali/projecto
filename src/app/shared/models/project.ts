import { Task } from "./task";

export interface Project {
    id: number;
    taxonomie: string;
    type: string;
    periode: string;
    dateDemarrage: Date;
    descriptif: string;
    tasks: Task[];
    etatAvancement: number;
    colabs: string[];
}
