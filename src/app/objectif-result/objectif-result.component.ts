import { Component, Input } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import {MatTreeNestedDataSource, MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ObjectifResult } from '../models/objectif-result';
import { ObjectifResultService } from '../services/objectif-result.service';
import {CdkAccordionModule} from '@angular/cdk/accordion';
@Component({
  selector: 'app-objectif-result',
  standalone: true,
  imports: [CommonModule,MatTreeModule, MatButtonModule, MatIconModule,CdkAccordionModule],
  templateUrl: './objectif-result.component.html',
  styleUrls: ['./objectif-result.component.scss']
})
export class ObjectifResultComponent {
toggleDescription(node : any) {
  node.toggled = !node.toggled;

}
  @Input() data : ObjectifResult[]= this.ObjectifResultService.fetchData();
  @Input() child: string = "ResultatAssocie";
  treeControl = new NestedTreeControl<ObjectifResult>(node => node[this.child]);
  dataSource = new MatTreeNestedDataSource<ObjectifResult>();

  constructor(private ObjectifResultService : ObjectifResultService) {
    this.dataSource.data =this.data.map((node) => ({ ...node, toggled: false }));
  }

  hasChild= (_: number, node: ObjectifResult) => !!node[this.child] && node[this.child].length > 0;

}

