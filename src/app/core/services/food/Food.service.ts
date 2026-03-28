import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FoodDtoModel, FoodViewModel } from '@foods/model/Food.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodApiService {
  url = './assets/food.json';
  constructor(private httpClient: HttpClient) {}

  getMockFood(): Observable<FoodViewModel[]> {
    return this.httpClient.get<FoodDtoModel[]>(this.url).pipe(
      map((foodList) =>
        foodList.map((food) => ({
          id: food.id,
          name: food.name,
          portion: food.portion,
          calories: food.calories,
          protein: food.protein_g,
          fat: food.fat_g,
          carb: food.carb_g,
          meal: food.meal_type,
          tags: food.tags,
          image: food.image_url,
        })),
      ),
    );
  }
}
