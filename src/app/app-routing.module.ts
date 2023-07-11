import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
     {
        path:"",
        component:LandingPageComponent,       
     },
     {
        path:"project",
        loadChildren : ()=>import("./project/project.module").then((mod)=>mod.ProjectModule)
      },
      {
        path:"dash",
        component:DashboardComponent
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
        path:"**",
        component:PageNotFoundComponent
      },
     
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
