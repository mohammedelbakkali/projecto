import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { DetailsProjectComponent } from './list-project/details-project/details-project.component';
import { EditProjectComponent } from './list-project/details-project/edit-project/edit-project.component';

const routes: Routes = [
         {
           path:"projects",
           component:ProjectComponent,
           children:[
             { 
               path:"list-project",
               component:ListProjectComponent,
               children:[
                {
                  path:"datails-project/:id",
                  component:DetailsProjectComponent,
                  children : [
                      {
                        path:"edit-project/:id",
                        component:EditProjectComponent,
                      }
                  ]
                }

               ]
             }
           ]
         }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
