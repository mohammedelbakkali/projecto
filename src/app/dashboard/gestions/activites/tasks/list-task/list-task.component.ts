import { CommonModule, NgFor, NgIf } from '@angular/common';
import {Component, } from '@angular/core';
import { TitreOftaskPipe } from 'src/app/titre-oftask.pipe';
import { AlphaWhitTextPipe } from "../../../../../alpha-whit-text.pipe";
import { Router, RouterLink } from '@angular/router';


@Component({
    selector: 'app-list-task',
    standalone: true,
    templateUrl: './list-task.component.html',
    styleUrls: ['./list-task.component.scss'],
    imports: [
        NgFor,
        CommonModule,
        NgIf,
        AlphaWhitTextPipe,
        RouterLink
    ]
})
export class ListTaskComponent  {
     tasksArray :Task[] = [
        { 
          labelTask: "Preparation du cahier des charges",
          discriptifTask: "",
          isOubligatoire: false,
          pourcentageTask:50,
          id_task:"1789008796"
        },
        { 
          labelTask: "Debut de projet",
          discriptifTask: "",
          isOubligatoire: true,
          pourcentageTask:90,
          id_task:"1424008796"
        },
        { 
          labelTask: "devlope du backend",
          discriptifTask: "",
          isOubligatoire: true,
          pourcentageTask:10,
          id_task:"18787224008796"
        },
        { 
          labelTask: "Creation du base de donnees",
          discriptifTask: "",
          isOubligatoire: false,
          pourcentageTask:20,
          id_task:"19854008796"
        }
     ];
     constructor(private router: Router){

     }

     voirDetails(idTask:any){
       this.router.navigate(['/dash/projects/5/gestion-activite/tasks/'+idTask]);
     }
}

interface Task {
   labelTask: string;
   discriptifTask: string;
   isOubligatoire: boolean;
   pourcentageTask:number;
   id_task: string;
}