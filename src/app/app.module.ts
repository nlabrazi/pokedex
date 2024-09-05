import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';

import { routes } from "./app.routes";
import { PokemonModule } from "./pokemon/pokemon.module";

@NgModule({
  imports: [
    BrowserModule,
    PokemonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppModule { }
