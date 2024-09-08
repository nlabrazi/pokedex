import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
} from "@angular/forms"; // Importer ReactiveFormsModule

import { PokemonService } from "./services/pokemon.service";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { BorderCardDirective } from "./border-card.directive";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { EditPokemonComponent } from "./edit-pokemon/edit-pokemon.component";

const pokemonRoutes: Routes = [
  { path: "edit/pokemon/:id", component: EditPokemonComponent }, // Editer un Pokemon
  { path: "pokemons", component: ListPokemonComponent }, // Liste des Pokémon sous /pokemons
  { path: "pokemon/:id", component: DetailPokemonComponent }, // Détails des Pokémon sous /pokemon/:id
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(pokemonRoutes), // Routes enfants pour /pokemons et /pokemon/:id
    ListPokemonComponent,
    DetailPokemonComponent,
    EditPokemonComponent,
    EditPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
  ],
  providers: [PokemonService],
})
export class PokemonModule {}
