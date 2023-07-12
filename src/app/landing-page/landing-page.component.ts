import { Component } from '@angular/core';
import { CategoryComponent } from "../category/category.component";
import { CardComponent } from "../card/card.component";

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
    standalone: true,
    imports: [CategoryComponent, CardComponent]
})
export class LandingPageComponent {

}
