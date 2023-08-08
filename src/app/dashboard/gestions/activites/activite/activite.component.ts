import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtagonisteComponent } from "../../protagoniste/protagoniste.component";

@Component({
    selector: 'app-activite',
    standalone: true,
    templateUrl: './activite.component.html',
    styleUrls: ['./activite.component.scss'],
    imports: [CommonModule, ProtagonisteComponent]
})
export class ActiviteComponent {

}
