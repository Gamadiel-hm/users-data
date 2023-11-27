import {
  ObjectFilter,
  ObjectTitle,
  TitleTable,
} from 'src/app/core/enums/titleTable';
import { Result } from 'src/app/core/models/userData';

const funcSort = {
  country: (data: Result[]) =>
    data.sort((a, b) => a.location.country.localeCompare(b.location.country)),

  name: (data: Result[]) =>
    data.sort((a, b) => a.name.first.localeCompare(b.name.first)),

  gender: (data: Result[]) =>
    data.sort((a, b) => a.gender.localeCompare(b.gender)),
};

const funcFilter = {
  name: (data: Result[], search: string) =>
    data.filter((x) => x.name.first.toLowerCase().includes(search)),
  country: (data: Result[], search: string) =>
    data.filter((x) => x.location.country.toLowerCase().includes(search)),
  gender: (data: Result[], search: string) =>
    data.filter((x) => x.gender.toLowerCase().startsWith(search)),
};

export function sortData(data: Result[], obj: ObjectTitle) {
  if (obj.afterTitle === obj.beforeTitle && obj.beforeTitle in funcSort)
    data.reverse();
  else if (
    obj.beforeTitle in funcSort &&
    obj.beforeTitle !== TitleTable.default
  )
    funcSort[obj.beforeTitle](data);
}

export function filterData(search: ObjectFilter, data: Result[]) {
  if (
    search.optionSearch in funcFilter &&
    search.optionSearch !== TitleTable.default
  ) {
    return funcFilter[search.optionSearch](data, search.stringSearch);
  } else return data;
}
