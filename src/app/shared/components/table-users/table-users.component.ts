import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Result } from 'src/app/core/models/userData';
import { DataApiService } from '../../services/data-api.service';
import {
  EnumSearcht,
  ObjectFilter,
  ObjectTitle,
  TitleTable,
  enumSearchInit,
  objectTitlesInit,
  titleTableInit,
} from 'src/app/core/enums/titleTable';
import { countPage, initEnumCount } from 'src/app/core/models/apiButton';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss'],
})
export class TableUsersComponent implements OnInit, OnChanges {
  userData: Result[] = [];
  userDataCopy: Result[] = [];
  objectTitle: ObjectTitle = objectTitlesInit;
  titleTable: TitleTable[] = titleTableInit;
  changeSortFilter: ObjectFilter = enumSearchInit;
  enumCountPage: countPage[] = initEnumCount;
  countPage = 1;
  @Input() filterString = '';
  @Input() optionSearch: TitleTable = TitleTable.default;

  constructor(private dataApiService: DataApiService) {}

  ngOnInit(): void {
    this.dataApiService.getData(1).subscribe((res) => {
      this.userData = res.results;
      this.userDataCopy = res.results;
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(changes: SimpleChanges): void {
    this.changeSortFilter = {
      enumFilter: EnumSearcht.filter,
      stringSearch: this.filterString,
      optionSearch: this.optionSearch,
    };
    console.log(this.changeSortFilter);
  }

  sortData(title: TitleTable) {
    this.changeSortFilter = {
      ...this.changeSortFilter,
      enumFilter: EnumSearcht.sort,
    };

    if (this.objectTitle.beforeTitle === title)
      this.objectTitle = { ...this.objectTitle, afterTitle: title };

    this.objectTitle = { ...this.objectTitle, beforeTitle: title };
  }

  getApiData(count: countPage) {
    const maxArrayLength = this.userData.length;
    this.countPage += count;
    const countPageA = (this.countPage - 1) * 10;

    if (
      count === countPage.before &&
      (this.countPage - 1) * 10 === maxArrayLength
    ) {
      this.dataApiService.getData(this.countPage).subscribe((res) => {
        this.userData.push(...res.results);
        this.userDataCopy = this.userData.slice(countPageA, countPageA + 10);
      });
    } else if (count === countPage.after) {
      this.userDataCopy = this.userData.slice(countPageA, countPageA + 10);
    } else this.userDataCopy = this.userData.slice(countPageA, countPageA + 10);
  }
}
