import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-information-general',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './information-general.component.html',
  styleUrls: ['./information-general.component.scss']
})
export class InformationGeneralComponent {

}
