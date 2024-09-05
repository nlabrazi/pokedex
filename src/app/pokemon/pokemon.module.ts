import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';

const pokemonRoutes: Routes = [
  { path: 'pokemons', component: ListPokemonComponent },  // Liste des Pokémon sous /pokemons
  { path: 'pokemon/:id', component: DetailPokemonComponent }  // Détails des Pokémon sous /pokemon/:id
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes),  // Routes enfants pour /pokemons et /pokemon/:id
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe
  ]
})
export class PokemonModule { }
