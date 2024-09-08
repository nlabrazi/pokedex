import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Pokemon from '../../models/pokemon';
import { PokemonService } from '../services/pokemon.service';
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";

@Component({
  selector: 'app-edit-pokemon',
  standalone: true,
  imports: [CommonModule, PokemonFormComponent],
  template: `
    <h2>Editer {{ pokemon?.name?.french }}</h2>
    <p *ngIf="pokemon">
      <img [src]="pokemon.image.hires" alt="pokemon image">
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
    <div class="w-1/2 px-2">
            <a (click)="goBack()"><button
                class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Annuler</button></a>
          </div>
  `,
  styles: ``
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId).subscribe((pokemon) => {
        this.pokemon = pokemon
      });
    }
  }

  goBack() {
    if (this.pokemon) {
      this.router.navigate(['/pokemon/',this.pokemon.id]);
    }
  }
}
