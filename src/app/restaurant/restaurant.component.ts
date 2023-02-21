import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../restaurants/models';

@Component({
  selector: 'angular-ssr-restaurant',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent {
  restaurant$ = inject(HttpClient).get<Restaurant>(
    `http://127.0.0.1:1337/api/restaurants/${this.getRestaurantId()}`
  );

  constructor(private route: ActivatedRoute) {}

  getRestaurantId() {
    return this.route.snapshot.paramMap.get('id');
  }
}
