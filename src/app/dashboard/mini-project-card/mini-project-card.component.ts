import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-mini-project-card',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './mini-project-card.component.html',
  styleUrls: ['./mini-project-card.component.scss']
})
export class MiniProjectCardComponent {
}
