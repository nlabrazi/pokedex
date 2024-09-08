import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import Pokemon from '../../models/pokemon';

@Injectable()
export class PokemonService {
  private jsonUrl = '/assets/data/pokemons-list.json';

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.jsonUrl);
  }

  getPokemonById(id: number): Observable<Pokemon | undefined> {
    return this.getPokemons().pipe(
      map((pokemons: Pokemon[]) => pokemons.find(pokemon => pokemon.id === id))
    );
  }

  getPokemonTypeList(): Observable<string[]> {
    return this.getPokemons().pipe(
      map((pokemons: Pokemon[]) => {
        // Extraire les types et les rendre uniques
        const types = pokemons.flatMap(pokemon => pokemon.types);
        return Array.from(new Set(types));  // Renvoie les types uniques
      })
    );
  }
}
