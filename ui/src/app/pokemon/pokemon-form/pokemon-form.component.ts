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
import { ToastrService } from "ngx-toastr";
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
  @Input() closeModal: () => void; // Ajout de la méthode de fermeture
  pokemonTypes: string[] = [];
  types: string[];

  pokemonForm: FormGroup;

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {
    this.pokemonForm = this.formBuilder.group({
      name: [
        "",
        [Validators.required, Validators.pattern("^[a-zA-Zàéèç]{1,25}$")],
      ],
      HPs: ["", [Validators.required, Validators.min(0), Validators.max(999)]],
      Attack: [
        "",
        [Validators.required, Validators.min(0), Validators.max(999)],
      ],
      Defense: [
        "",
        [Validators.required, Validators.min(0), Validators.max(999)],
      ],
    });

    // Initialize the form with pokemon data if available
    if (this.pokemon) {
      this.pokemonForm.patchValue({
        name: this.pokemon.name.french,
        HPs: this.pokemon.stats.HPs,
        Attack: this.pokemon.stats.Attack,
        Defense: this.pokemon.stats.Defense,
      });
    }
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

  // Getters pour les contrôles du formulaire
  get nameControl() {
    return this.pokemonForm.get("name");
  }

  get HPsControl() {
    return this.pokemonForm.get("HPs");
  }

  get AttackControl() {
    return this.pokemonForm.get("Attack");
  }

  get DefenseControl() {
    return this.pokemonForm.get("Defense");
  }

  onSubmit(): void {
    if (this.pokemonForm.valid) {
      const updatedData = {
        name: { french: this.pokemonForm.get("name")?.value },
        stats: {
          HPs: this.pokemonForm.get("HPs")?.value,
          Attack: this.pokemonForm.get("Attack")?.value,
          Defense: this.pokemonForm.get("Defense")?.value,
        },
      };

      this.pokemonService.updatePokemon(this.pokemon.id, updatedData).subscribe(
        () => {
          this.toastr.success("Pokémon mis à jour avec succès !");
          if (this.closeModal) {
            this.closeModal();
          } else {
            console.error("closeModal is not defined");
          }
        },
        (error) => {
          this.toastr.error("Erreur lors de la mise à jour du Pokémon");
        },
      );
    } else {
      this.toastr.error(
        "Le formulaire est invalide. Veuillez corriger les erreurs.",
      );
    }
  }
}
