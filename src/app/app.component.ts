import { Component } from '@angular/core';
import { TitleTable, titleTableInit } from './core/enums/titleTable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  titleApp = 'App UserList';
  searchTitle: string = '';
  optionSearch: TitleTable = TitleTable.name;
  enumsTable: TitleTable[] = titleTableInit;

  objectValues = {
    name: TitleTable.name,
    country: TitleTable.country,
    gender: TitleTable.gender,
  };

  constructor() {}

  searchChangeKey(title: string) {
    this.searchTitle = title;
  }

  optionChange(option: string = TitleTable.default) {
    if (option === TitleTable.name) this.optionSearch = option;
    if (option === TitleTable.country) this.optionSearch = option;
    if (option === TitleTable.gender) this.optionSearch = option;
  }
}
