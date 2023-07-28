import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { TreeComponent } from '../tree/tree.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule, MatTreeNestedDataSource } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { ProblemCauseConsequenceService } from '../services/problem-cause-consequence.service';
import { ProblemCauseConsequence } from '../models/problem-cause-consequence';
import { NestedTreeControl } from '@angular/cdk/tree';
@Component({
  selector: 'app-sequence',
  standalone: true,
  imports: [CommonModule,MatListModule,TreeComponent,MatTreeModule,MatButtonModule,MatIconModule],
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.scss']
})
export class SequenceComponent {

treeControl = new NestedTreeControl<ProblemCauseConsequence>(node => node.Causes);
  dataSource = new MatTreeNestedDataSource<ProblemCauseConsequence>();
objOfcause : any = {}
listCause :any = [];
  constructor(private service : ProblemCauseConsequenceService ) {
    this.dataSource.data = this.service.fetchData();
    this.objOfcause=this.service.fetchData();
   this.listCause = this.filterCause();
  }
  
 filterCause(): ProblemCauseConsequence[] {
  const causes = this.objOfcause[0].Causes;
  const consequences: ProblemCauseConsequence[] = [];

  for (const cause of causes) {
    if (cause.Consequence && cause.Consequence.Type === 'Consequence') {
      consequences.push(cause.Consequence);
    }
  }

  return consequences;
}
}
