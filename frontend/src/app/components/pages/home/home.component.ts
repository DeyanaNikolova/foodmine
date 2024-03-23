import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    let foodsObservable$: Observable<Food[]>;

    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        foodsObservable$ = this.foodService.geAllFoodsBySearchTerm(params.searchTerm);
      } else if (params.tag) {
        foodsObservable$ = this.foodService.getAllFoodsByTag(params.tag);
      } else {
        foodsObservable$ = this.foodService.getAll();
      }
      foodsObservable$.subscribe((serverFoods) => {
        this.foods = serverFoods;
      });
    });
  }

  ngOnInit(): void {}
}
