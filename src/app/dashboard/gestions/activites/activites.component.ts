import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ActivationEnd, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-activites',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.scss']
})
export class ActivitesComponent {
  constructor(private route: Router) { 
   

  }

  
}
