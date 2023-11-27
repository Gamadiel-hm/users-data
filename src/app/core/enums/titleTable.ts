export enum TitleTable {
  default = 'default',
  name = 'name',
  country = 'country',
  gender = 'gender',
}

export const titleTableInit: TitleTable[] = [
  TitleTable.name,
  TitleTable.country,
  TitleTable.gender,
  TitleTable.default,
];

export interface ObjectTitle {
  afterTitle: TitleTable;
  beforeTitle: TitleTable;
}

export const objectTitlesInit: ObjectTitle = {
  afterTitle: TitleTable.default,
  beforeTitle: TitleTable.default,
};

// code filter

export enum EnumSearcht {
  sort = 'sort',
  filter = 'flter',
}

export interface ObjectFilter {
  enumFilter: EnumSearcht;
  stringSearch: string;
  optionSearch: TitleTable;
}

export const enumSearchInit: ObjectFilter = {
  enumFilter: EnumSearcht.sort,
  stringSearch: '',
  optionSearch: TitleTable.default,
};
