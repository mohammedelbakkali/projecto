import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectifResultComponent } from "./objectif-result/objectif-result.component";
import { ObjectifResultService } from '../services/objectif-result.service';

@Component({
    selector: 'app-area-objectifs',
    standalone: true,
    templateUrl: './area-objectifs.component.html',
    styleUrls: ['./area-objectifs.component.scss'],
    imports: [CommonModule, ObjectifResultComponent]
})
export class AreaObjectifsComponent {
    globalObjectifs :any ;
constructor(private objectifResultService:ObjectifResultService){
    this.globalObjectifs=this.objectifResultService.fetchGlobalObjectifs();
    console.log(this.globalObjectifs)
}


}
