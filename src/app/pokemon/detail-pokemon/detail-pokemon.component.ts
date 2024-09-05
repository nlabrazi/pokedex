import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import Pokemon from '../../models/pokemon';
import { PokemonTypeColorPipe } from "../pokemon-type-color.pipe";
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [CommonModule, PokemonTypeColorPipe],
  templateUrl: './detail-pokemon.component.html',
  styles: ``
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon|undefined

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    const pokemonId = +this.route.snapshot.paramMap.get('id')!;
    this.pokemonService.getPokemonById(pokemonId).subscribe((pokemon) => {
      this.pokemon = pokemon;
    });
  }

  goBack() {
    this.router.navigate(['/pokemons']);
  }
}
