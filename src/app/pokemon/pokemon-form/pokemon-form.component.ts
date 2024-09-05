import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import Pokemon from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pokemon-form.component.html',
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  pokemonTypes: string[] = [];

  constructor(private pokemonService: PokemonService, private router: Router) {

  }

  ngOnInit() {
    this.pokemonService.getPokemonTypeList().subscribe((types) => {
      this.pokemonTypes = types
    })
  }

  hastype(pokemonType: string): boolean {
    return this.pokemon.types.includes(pokemonType);
  }

  selectType($event: Event, checkedType: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.pokemon.types.push(checkedType);
    } else {
      const index = this.pokemon.types.indexOf(checkedType);
      this.pokemon.types.splice(index, 1);
    }
  }

  onSubmit() {
    console.log('Submit form!');
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }

}
