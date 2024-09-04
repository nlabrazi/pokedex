import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import Pokemon from '../models/pokemon';
import { PokemonTypeColorPipe } from "../pokemon-type-color.pipe";
import { BorderCardDirective } from '../border-card.directive';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [CommonModule, PokemonTypeColorPipe, BorderCardDirective],
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[] = [];

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((data: Pokemon[]) => {
      this.pokemonList = data;
    });
  }
  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);
  }
}
