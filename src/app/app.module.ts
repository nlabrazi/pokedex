import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { routes } from "./app.routes";
import { PokemonModule } from "./pokemon/pokemon.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    PokemonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppModule { }
