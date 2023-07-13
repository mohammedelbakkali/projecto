import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../card/card.component";
import { MiniProjectCardComponent } from "./mini-project-card/mini-project-card.component";
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [CommonModule, CardComponent, MiniProjectCardComponent,MatIconModule,MatButtonModule]
})
export class HomeComponent {

}
