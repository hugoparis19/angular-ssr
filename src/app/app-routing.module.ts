import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

const routes: Routes = [
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'restaurant/:id', component: RestaurantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
