import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { SubCategoryComponent } from "../sub-category/sub-category.component";
import { Category } from '../shared/models/category.model';
@Component({
    selector: 'app-category',
    standalone: true,
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss'],
    imports: [CommonModule, MatIconModule, SubCategoryComponent]
})
export class CategoryComponent {
   // subCategories: Category[] = [{icon: "home",label:"home" },{icon: "home",label:"home" }];
display: Boolean =false;
    selectedCategory: string = '';
    subCategories: Category[]=[];
showSubCategory(selectedCategory: string) {
    if(this.selectedCategory == selectedCategory || this.selectedCategory == '')
    this.display= !this.display;
    this.selectedCategory = selectedCategory;
    /** this will be replaced with a service or other method  */
    switch(selectedCategory){
        case 'Home':
            this.subCategories = [{icon: "loan",label:"loan" },{icon: "rent",label:"rent" }];
            break;
        case '':
            this.subCategories = [{icon: "home",label:"home" },{icon: "home",label:"home" }];
            break;

    }
    /** to here */
}

}
