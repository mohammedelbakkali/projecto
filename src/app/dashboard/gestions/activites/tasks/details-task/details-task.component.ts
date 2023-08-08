import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-task.component.html',
  styleUrls: ['./details-task.component.scss']
})
export class DetailsTaskComponent {

}

export interface Project {
  id: number;
  taxonomie: string;
  type: string;
  periode: string;
  dateDemarrage: Date;
  descriptif: string;
  tasks: Task[];
  etatAvancement: number;
  protagonistes: string[];
}

export interface Task {
  nom: string;
  isObligatoire: boolean;
}