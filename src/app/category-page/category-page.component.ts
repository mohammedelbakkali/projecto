import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CategoryComponent } from '../category/category.component';
import { CardComponent } from '../card/card.component';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [CommonModule,CategoryComponent,MatIconModule,CardComponent,MdbRangeModule,MdbAccordionModule],
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent {
  cat ?: string|null
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.cat = this.route.snapshot.paramMap.get('cat')
  }
}
