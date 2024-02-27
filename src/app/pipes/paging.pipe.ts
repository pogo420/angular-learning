import { Pipe, PipeTransform } from '@angular/core';
import { PersonBirthday } from '../models/person-birthday/person-birthday';

@Pipe({
  name: 'paging',
  standalone: true
})
export class PagingPipe implements PipeTransform {

  transform(rows: PersonBirthday[], 
    range: any,
    input_text: string ): PersonBirthday[] {

      if (input_text){
        return rows
      }
      return rows.slice(range.start, range.end)

   }
}
