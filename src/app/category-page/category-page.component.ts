import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CategoryComponent } from '../category/category.component';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [CommonModule,CategoryComponent,CardComponent],
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
