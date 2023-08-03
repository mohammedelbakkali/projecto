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
  objOfcause: any = {};
  listConsequence: any = [];

  constructor(private service: ProblemCauseConsequenceService) {
    this.dataSource.data = this.service.fetchData();
    this.objOfcause = this.service.fetchData();
    this.listConsequence = this.filterConsequence();
  }

  filterConsequence(): ProblemCauseConsequence[] {
    const result: ProblemCauseConsequence[] = [];

    const traverseNodes = (node: ProblemCauseConsequence) => {
      if (node.Consequence) {
        result.push(node.Consequence);
      }
      if (node.Causes && node.Causes.length > 0) {
        node.Causes.forEach(traverseNodes);
      }
      if (node.subProblem && node..length > 0) {
        node.subProblem.forEach(traverseNodes);
      }
    };

    this.objOfcause.forEach(traverseNodes);

    return result;
  }
}
