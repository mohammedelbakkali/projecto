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
    objOfcause: any = {};
  listImpact: any = [];

  constructor(private service: ProblemCauseConsequenceService) {
    this.objOfcause = this.service.fetchData();
    this.listImpact = this.getAllImpacts(this.objOfcause);
  }

  getAllImpacts(data: ProblemCauseConsequence | ProblemCauseConsequence[]): ProblemCauseConsequence[] {
    if (!Array.isArray(data)) {
      data = [data];
    }

    const impacts: ProblemCauseConsequence[] = [];

    data.forEach((item: ProblemCauseConsequence) => {
      if (item.Impact && item.Impact.length > 0) {
        impacts.push(...item.Impact);
      }

      if (item.Causes && item.Causes.length > 0) {
        impacts.push(...this.getAllImpacts(item.Causes));
      }

      if (item.subProblem && item.subProblem.length > 0) {
        impacts.push(...this.getAllImpacts(item.subProblem));
      }

      if (item.Consequence && item.Consequence.Impact && item.Consequence.Impact.length > 0) {
        impacts.push(...item.Consequence.Impact);
      }
    });

    return impacts;
  }




}
