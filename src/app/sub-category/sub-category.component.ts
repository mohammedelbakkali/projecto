import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import { Category } from '../shared/models/category.model';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-sub-category',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
     iconRegistry.addSvgIcon('loan', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/loan.svg'));
     iconRegistry.addSvgIcon('rent', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/rent.svg'));
     
  }
 @Input() subCategories: Category[]=[];

}
