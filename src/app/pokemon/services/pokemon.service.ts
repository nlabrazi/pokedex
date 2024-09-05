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

  getPokemonByTypeList(type: string): Observable<Pokemon[]> {
    return this.getPokemons().pipe(
      map((pokemons: Pokemon[]) => pokemons.filter(pokemon => pokemon.type.includes(type))
      )
    );
  }
}
