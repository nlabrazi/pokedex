import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor',
  standalone: true
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: string): string {
    let colorClass: string;

    switch (type) {
      case 'Feu':
        colorClass = 'bg-feu-500';
        break;
      case 'Eau':
        colorClass = 'bg-eau-500';
        break;
      case 'Electrik':
        colorClass = 'bg-electrik-500';
        break;
      case 'Plante':
        colorClass = 'bg-plante-500';
        break;
      case 'Glace':
        colorClass = 'bg-glace-500';
        break;
      case 'Combat':
        colorClass = 'bg-combat-500';
        break;
      case 'Poison':
        colorClass = 'bg-poison-500';
        break;
      case 'Sol':
        colorClass = 'bg-sol-500';
        break;
      case 'Vol':
        colorClass = 'bg-vol-500';
        break;
      case 'Psy':
        colorClass = 'bg-psy-500';
        break;
      case 'Insecte':
        colorClass = 'bg-insecte-500';
        break;
      case 'Roche':
        colorClass = 'bg-roche-500';
        break;
      case 'Spectre':
        colorClass = 'bg-spectre-500';
        break;
      case 'Dragon':
        colorClass = 'bg-dragon-500';
        break;
      case 'Tenebre':
        colorClass = 'bg-tenebre-500';
        break;
      case 'Acier':
        colorClass = 'bg-acier-500';
        break;
      case 'Fée':
        colorClass = 'bg-fée-500';
        break;
      default:
        colorClass = 'bg-gray-500';
        break;
    }

    return `${colorClass} relative grid select-none items-center whitespace-nowrap rounded-lg py-1.5 px-3 font-sans text-xs font-bold uppercase text-black`;
  }
}
