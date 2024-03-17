import { Component } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css',
})
export class FoodPageComponent {
  food!: Food;

  constructor(
    activatedRoute: ActivatedRoute,
    private foodService: FoodService
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.food = this.foodService.getFoodById(params.id);
      }
    });
  }
}
