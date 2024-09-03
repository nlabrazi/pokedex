import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { routes } from "./app.routes";
import { BorderCardDirective } from "./border-card.directive";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";

@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
