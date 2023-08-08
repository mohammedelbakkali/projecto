import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titreOftask'
})
export class TitreOftaskPipe implements PipeTransform {

  transform(titre: string, lengthTitre:number): any {
        return titre.slice(0,lengthTitre);
  }

}
