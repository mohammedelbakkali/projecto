import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

interface Project {
    titre:string;
    category:string
    description:string;
    date:string;
    etat:number
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule,RouterOutlet,MatIconModule,RouterLink],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

    
  obj:any[]=[
   {
     label:"test2",
     icone:"icone for test2",
     url:"http://"
  },{
   label:"test2",
   icone:"icone for test2",
   url:"http://"
},{
 label:"test2",
 icone:"icone for test275755757757575",
 url:"http://"
}
 ]



   TABLE_OF_PROJECT :Project[] = [
     {  
     titre:"Best model of Marketing",
     category:"Ecommerce",
     description:"A heading that must span over two lines",
     date:"12/05/2023",
     etat:50
    },
    { 
       titre:"Best model of Marketing",
       category:"marketing digital",
    description:"A heading that must span over two lines",
    date:"12/05/2023",
    etat:10
   },
   {  titre:"Best model of Marketing",
   category:"marketing",
   description:"A heading that must span over two lines",
   date:"12/05/2023",
   etat:1
 },
//   {  titre:"Best model of Marketing",
//   category:"digital",
//   description:"A heading that must span over two lines",
//   date:"12/05/2023",
//   etat:30
//  },
//  {  titre:"Best model of Marketing",
//  category:"WEB",
//  description:"A heading that must span over two lines",
//  date:"12/05/2023",
//  etat:90
// },
// {  titre:"Best model of Marketing",
// category:"réseau",
// description:"A heading that must span over two lines",
// date:"12/05/2023",
// etat:20
// },
// {  titre:"Best model of Marketing",
// category:"Ecommerce",
// description:"A heading that must span over two lines",
// date:"12/05/2023",
// etat:76
// },
// {  titre:"Best model of Marketing",
// category:"Ecommerce",
// description:"A heading that must span over two lines",
// date:"12/05/2023",
// etat:50
// },
{  titre:"Best model of Marketing",
category:"Ecommerce",
description:"A heading that must span over two lines",
date:"12/05/2023",
etat:50
},
   ];

   
}
