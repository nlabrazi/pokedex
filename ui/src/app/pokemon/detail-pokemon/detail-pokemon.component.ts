import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

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
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    const pokemonId = +this.route.snapshot.paramMap.get("id")!;
    if (pokemonId) {
      this.pokemonService.getPokemonById(pokemonId).subscribe(
        (data) => {
          this.pokemon = data;
        },
        (error) => {
          console.error("Erreur lors de la récupération du Pokemon: ", error);
          this.toastr.error("Erreur lors de la récupération des données");
        },
      );
    }
  }

  openModal(): void {
    if (this.pokemon) {
      this.isModalOpen = true;
    }
  }

  closeModal(): void {
    this.isModalOpen = false;
    const modalElement = document.querySelector(".modal-container"); // To rework
    if (modalElement) {
      modalElement.remove(); // To rework
    }
  }

  goBack() {
    this.router.navigate(["/pokemons"]);
  }

  goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(["edit/pokemon", pokemon.id]);
  }
}
