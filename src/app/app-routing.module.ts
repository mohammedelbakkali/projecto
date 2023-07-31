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
import { ProjectsComponent } from './dashboard/projects/projects.component';

import { PageRecentOfdashComponent } from './dashboard/page-recent-ofdash/page-recent-ofdash.component';
import { InstanceOfprojectComponent } from './dashboard/instance-ofproject/instance-ofproject.component';
import { SideBar2Component } from './shared/side-bar2/side-bar2.component';
import { ChartsOfprojectsComponent } from './dashboard/contentOfProject/charts-ofprojects/charts-ofprojects.component';
import { InformationGeneralComponent } from './dashboard/contentOfProject/information-general/information-general.component';
import { ActivitesComponent } from './dashboard/gestions/activites/activites.component';
import { RHComponent } from './dashboard/gestions/activites/rh/rh.component';
import { TasksComponent } from './dashboard/gestions/activites/tasks/tasks.component';
import { FinanciereComponent } from './dashboard/gestions/activites/financiere/financiere.component';
import { RisquesComponent } from './dashboard/gestions/activites/risques/risques.component';
import { ActiviteComponent } from './dashboard/gestions/activites/activite/activite.component';

import { ForumComponent } from './forum/forum.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GanttComponent } from './gantt/gantt.component';



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

      
      },{

        path:'forum',
        component:ForumComponent

      },
      {
       path:'cal',
        component:CalendarComponent
      },
      {
      path:'gant',
      component:GanttComponent
      },

      {
        path:"dash/projects/:id",
        component:InstanceOfprojectComponent,
        children:[{
         path:"",
         component:InformationGeneralComponent
      },{
         path:"gestion-activite",
         component:ActivitesComponent,
         children:[
          {
            path:"",
            component:ActiviteComponent

          },
          {
            path:"rh",
            component:RHComponent
         },{
           path:"tasks",
           component:TasksComponent
         },{
           path:"financiere",
           component:FinanciereComponent
         },{
           path:"risques",
           component:RisquesComponent
         }
         ]
      }
    
    ]

     },

      {
        path:"**",
        component:PageNotFoundComponent
      }
    
     
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
