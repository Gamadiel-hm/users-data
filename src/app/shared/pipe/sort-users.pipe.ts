import { Pipe, PipeTransform } from '@angular/core';
import {
  EnumSearcht,
  ObjectFilter,
  ObjectTitle,
} from 'src/app/core/enums/titleTable';
import { Result } from 'src/app/core/models/userData';
import { filterData, sortData } from './functionSort';

@Pipe({
  name: 'sortUsers',
})
export class SortUsersPipe implements PipeTransform {
  transform(
    value: Result[],
    objTitles: ObjectTitle,
    changeFunc: ObjectFilter
  ): Result[] {
    if (changeFunc.enumFilter === EnumSearcht.sort) sortData(value, objTitles);
    else {
      return filterData(changeFunc, value);
    }

    return value;
  }
}
