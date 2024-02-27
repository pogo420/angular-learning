import { Pipe, PipeTransform } from '@angular/core';
import { PersonBirthday } from '../models/person-birthday/person-birthday';

@Pipe({
  name: 'filterTable',
  standalone: true
})
export class FilterTablePipe implements PipeTransform {

  transform(rows: PersonBirthday[], name: string): PersonBirthday[] {
    if (!name){
      return rows;
    }
    return rows.filter(
      (row) => {
          if (row.name.toLowerCase().includes(name)){
              return true;
          }
          else {
            return false;
          }
      }
    );
  }

}
