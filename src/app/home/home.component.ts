import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../card/card.component";
import { MiniProjectCardComponent } from "./mini-project-card/mini-project-card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [CommonModule, CardComponent, MiniProjectCardComponent]
})
export class HomeComponent {

}
