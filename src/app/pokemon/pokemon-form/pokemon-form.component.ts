import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { PokemonService } from "../services/pokemon.service";
import Pokemon from "../../models/pokemon";
import { PokemonTypeColorPipe } from "../pokemon-type-color.pipe";

@Component({
  selector: "app-pokemon-form",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PokemonTypeColorPipe,
  ],
  templateUrl: "./pokemon-form.component.html",
  // styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  pokemonTypes: string[] = [];
  types: string[];

  pokemonForm: FormGroup;

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.pokemonForm = this.formBuilder.group({
      name: [
        this.pokemon?.name.french,
        [Validators.required, Validators.pattern("^[a-zA-Zàéèç]{1,25}$")],
      ],
      HPs: [
        this.pokemon?.base.HPs,
        [Validators.required, Validators.min(0), Validators.max(999)],
      ],
      Attack: [
        this.pokemon?.base?.Attack,
        [Validators.required, Validators.min(0), Validators.max(999)],
      ],
      Defense: [
        this.pokemon?.base?.Defense,
        [Validators.required, Validators.min(0), Validators.max(999)],
      ],
    });

    this.pokemonService.getPokemonTypeList().subscribe((types) => {
      this.pokemonTypes = types;
    });
  }

  hasType(pokemonType: string): boolean {
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

  isTypeValid(type: string): boolean {
    if (this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    } else if (this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }
    return true;
  }

  onSubmit() {
    console.log("Submit form!");
    this.router.navigate(["/pokemon", this.pokemon.id]);
  }
}
