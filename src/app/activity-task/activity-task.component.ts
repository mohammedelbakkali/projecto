import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from '../tree/tree.component';
import {NestedTreeControl} from '@angular/cdk/tree';
import { MatButtonModule } from '@angular/material/button';

import {MatTreeModule, MatTreeNestedDataSource} from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { ProblemCauseConsequenceService } from '../services/problem-cause-consequence.service';
import { ProblemCauseConsequence } from '../models/problem-cause-consequence';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-activity-task',
  standalone: true,
  imports: [CommonModule,MatListModule,TreeComponent,MatTreeModule,MatButtonModule,MatIconModule],
  templateUrl: './activity-task.component.html',
  styleUrls: ['./activity-task.component.scss']
})
export class ActivityTaskComponent {


treeControl = new NestedTreeControl<ProblemCauseConsequence>(node => node.Causes);
  dataSource = new MatTreeNestedDataSource<ProblemCauseConsequence>();
objOfcause : any = {}
listCause :any = [];
  constructor(private service : ProblemCauseConsequenceService ) {
    this.dataSource.data = this.service.fetchData();
    this.objOfcause=this.service.fetchData();
   this.listCause = this.filterCause();
  }
  
  filterCause() {
    const lengthOfCause = this.objOfcause[0].Causes.length;
     for(let i = 0 ; i<= lengthOfCause;i++){
   //  this.listCause.push(this.objOfcause[0].Causes[i].Titre) ;
   if(this.objOfcause[0].Causes[i].Type == 'Cause'){

   return this.objOfcause[0].Causes;
   }
     }
    

  }

 









}
