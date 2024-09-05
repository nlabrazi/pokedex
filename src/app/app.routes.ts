import { Routes } from '@angular/router';
import { Error404Component } from './shared/components/errors/error404/error404.component';


export const routes: Routes = [
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },  // Redirection vers /pokemons
  {
    path: '',
    loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule)  // Charger toutes les routes Pokémon
  },
  { path: '**', component: Error404Component }  // Route 404
];
