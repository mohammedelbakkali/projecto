import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-mini-project-card',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatMenuModule,MatIconModule,MatButtonModule],
  templateUrl: './mini-project-card.component.html',
  styleUrls: ['./mini-project-card.component.scss']
})
export class MiniProjectCardComponent {
}
