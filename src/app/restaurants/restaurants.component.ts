import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { catchError, map } from 'rxjs';
import { RootObject } from './models';

@Component({
  selector: 'angular-ssr-restaurants',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent {
  restaurants$ = inject(HttpClient)
    .get<RootObject>('http://127.0.0.1:1337/api/restaurants')
    .pipe(
      map((res) => res.data.map((restaurant) => restaurant)),
      catchError((err) => {
        console.error(err);
        return [];
      })
    );
}
