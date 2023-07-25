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
import { ForumComponent } from './forum/forum.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GanttComponent } from './gantt/gantt.component';
import { TreeComponent } from './tree/tree.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ConfirmationResetPasswordComponent } from './confirmation-reset-password/confirmation-reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


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
        children:[{
          path:"charts",
          component:ChartsOfprojectsComponent
        },{
          path:"projects",
          component:ProjectsComponent
        }]
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
       path:'tree',
        component:TreeComponent      
      },
      {
        path:'password-reset',
         component:ForgotPasswordComponent
       },

       {
        path:'confirmation-code',
         component:ConfirmationResetPasswordComponent
       },

       {
        path:'change-password',
         component:ChangePasswordComponent
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
