import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Recipe } from './Recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  getRecipeList(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('http://82.65.82.1:8080/recipes').pipe(
      tap((res) => console.log(res)),
      catchError((err) => this.handleError(err, []))
    );
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
