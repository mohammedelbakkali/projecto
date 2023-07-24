import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { RegisterComponent } from './register/register.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { ShowpageComponent } from './showpage/showpage.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { ChartsOfprojectsComponent } from './dashboard/charts-ofprojects/charts-ofprojects.component';
import { ProjectsComponent } from './dashboard/projects/projects.component';
import { PageRecentOfdashComponent } from './dashboard/page-recent-ofdash/page-recent-ofdash.component';
import { GanttChartComponent } from './gantt/gantt.component';
import { InstanceOfprojectComponent } from './dashboard/instance-ofproject/instance-ofproject.component';
import { SideBar2Component } from './shared/side-bar2/side-bar2.component';


const routes: Routes = [
     {
        path:"",
        component:LayoutComponent,
        children:[
           {
             path:"",
             component:LandingPageComponent
           }, {
            path:"show",
            component:ShowpageComponent
          },{
            path:"gantt",
            component:GanttChartComponent
          }
        ]
               
     },
     {
        path:"project",
        loadChildren : ()=>import("./project/project.module").then((mod)=>mod.ProjectModule)
      },
      {
        path:"dash",
        component:DashboardComponent,
        children:[
          {
            path:"",
            component:PageRecentOfdashComponent
          },
          {
          path:"charts",
          component:ChartsOfprojectsComponent
        },{
          path:"projects",
          component:ProjectsComponent,
          
        },

        {
           path:"projects/:id",
           component:InstanceOfprojectComponent,
           children:[{
            path:"",
            component:ChartsOfprojectsComponent
         }]
   
        }
       
      ]
      },
      //Login and Register Pages
      {
        path:"log",
        component:LoginRegisterComponent
      },
      { path:"reg",
         component:RegisterComponent
      },
     
      {
        path:'category/:cat',
        component:CategoryPageComponent
      },{
        path:"side",
        component:SideBar2Component
      },

      {
        path:"**",
        component:PageNotFoundComponent
      },
    
     
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
