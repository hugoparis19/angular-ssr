import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { map } from 'rxjs';

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

@Component({
  selector: 'angular-ssr-blog',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  restaurants$ = inject(HttpClient)
    .get<RootObject>('http://localhost:1337/api/restaurants')
    .pipe(
      map((res) => res.data.map((restaurant) => restaurant.attributes.name))
    );
}
