import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Pokemon from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private jsonUrl = '/assets/data/pokemons-list.json';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.jsonUrl);
  }
}
