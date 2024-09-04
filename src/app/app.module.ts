import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';

import { routes } from "./app.routes";
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { BorderCardDirective } from "./border-card.directive";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SearchPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
