import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { DetailsProjectComponent } from './list-project/details-project/details-project.component';
import { EditProjectComponent } from './list-project/details-project/edit-project/edit-project.component';
import { MaterialExampleModule } from '../material.module';


@NgModule({
  declarations: [
    ProjectComponent,
    ListProjectComponent,

     DetailsProjectComponent,
     EditProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MaterialExampleModule
  ]
})
export class ProjectModule { }
