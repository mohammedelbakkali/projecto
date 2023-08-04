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
  selector: 'app-hypothese',
  standalone: true,
  imports: [CommonModule,MatListModule,TreeComponent,MatTreeModule,MatButtonModule,MatIconModule],
  templateUrl: './hypothese.component.html',
  styleUrls: ['./hypothese.component.scss']
})

export class HypotheseComponent {
 treeControl = new NestedTreeControl<ProblemCauseConsequence>(node => node.ElementAssocie);
  dataSource = new MatTreeNestedDataSource<ProblemCauseConsequence>();
  objOfcause: any = {};
  listProblems: any = [];
  listImpacts: any = [];

  constructor(private service: ProblemCauseConsequenceService) {
    this.dataSource.data = this.service.fetchData();
    this.objOfcause = this.service.fetchData();
    this.listImpacts = this.filterImpacts(this.dataSource.data);
  }


  filterImpacts(data: ProblemCauseConsequence[]): ProblemCauseConsequence[] {
    const result: ProblemCauseConsequence[] = [];

    const traverseNodes = (node: ProblemCauseConsequence) => {
      if (node.Type === 'Impact') {
        result.push(node);
      }
      if (node.ElementAssocie && node.ElementAssocie.length > 0) {
        node.ElementAssocie.forEach(traverseNodes);
      }
    };

    data.forEach(traverseNodes);

    return result;
  }


}
