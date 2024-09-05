import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },  // Redirection vers /pokemons
  {
    path: '',
    loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule)  // Charger toutes les routes Pokémon
  },
  { path: '**', component: PageNotFoundComponent }  // Route 404
];
