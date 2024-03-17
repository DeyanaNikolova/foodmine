import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { sample_foods } from '../../data';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): Food[] {
    return sample_foods;
  }

  geAllFoodsBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getFoodById(foodId: string): Food {
    return this.getAll().find((food) => food.id === foodId) ?? new Food();
  }

  getAllTags():Tag[] {
    return [
      {name: 'All', count: 14 },
      {name: 'FastFood', count: 4 },
      {name: 'Pizza', count: 2 },
      {name: 'Lunch', count: 3 },
      {name: 'SlowFood', count: 2 },
      {name: 'Hamburger', count: 1 },
      {name: 'Fry', count: 1 },
      {name: 'Soup', count: 1 },
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }
}
