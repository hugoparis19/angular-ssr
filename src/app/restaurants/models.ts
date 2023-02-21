export interface Attributes {
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Datum {
  id: number;
  attributes: Attributes;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface RootObject {
  data: Datum[];
  meta: Meta;
}

export interface Restaurant {
  data: Datum;
  meta: Meta;
}
