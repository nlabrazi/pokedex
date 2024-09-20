import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import Pokemon from "../../models/pokemon";

@Injectable()
export class PokemonService {
  private apiUrl = "http://localhost:3000/api/pokemon"; // URL API NestJS

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl);
  }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/${id}`);
  }

  // Pour la mise à jour d'un Pokémon
  // pokemon.service.ts (Front-end Angular)
  updatePokemon(
    id: number,
    data: Partial<{
      name: { french: string };
      stats: { HPs: number; Attack: number; Defense: number };
    }>,
  ): Observable<Pokemon> {
    return this.http.put<Pokemon>(`${this.apiUrl}/${id}/edit`, data);
  }
}
