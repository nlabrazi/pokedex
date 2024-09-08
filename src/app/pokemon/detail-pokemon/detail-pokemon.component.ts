import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";

import Pokemon from "../../models/pokemon";
import { PokemonTypeColorPipe } from "../pokemon-type-color.pipe";
import { PokemonService } from "../services/pokemon.service";
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";

@Component({
  selector: "app-detail-pokemon",
  standalone: true,
  imports: [CommonModule, PokemonTypeColorPipe, PokemonFormComponent],
  templateUrl: "./detail-pokemon.component.html",
  styles: ``,
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;
  isModalOpen: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService,
  ) {}

  ngOnInit(): void {
    const pokemonId = +this.route.snapshot.paramMap.get("id")!;
    this.pokemonService.getPokemonById(pokemonId).subscribe((pokemon) => {
      this.pokemon = pokemon;
    });
  }

  goBack() {
    this.router.navigate(["/pokemons"]);
  }

  goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(["edit/pokemon", pokemon.id]);
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
