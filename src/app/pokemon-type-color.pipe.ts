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
        colorClass = 'bg-red-500';
        break;
      case 'Eau':
        colorClass = 'bg-blue-500';
        break;
      case 'Plante':
        colorClass = 'bg-green-500';
        break;
      case 'Insecte':
        colorClass = 'bg-brown-500';
        break;
      case 'Normal':
        colorClass = 'bg-gray-300';
        break;
      case 'Vol':
        colorClass = 'bg-blue-300';
        break;
      case 'Poison':
        colorClass = 'bg-purple-200';
        break;
      case 'Fée':
        colorClass = 'bg-pink-200';
        break;
      case 'Psy':
        colorClass = 'bg-purple-700';
        break;
      case 'Electrik':
        colorClass = 'bg-yellow-300';
        break;
      case 'Combat':
        colorClass = 'bg-orange-500';
        break;
      default:
        colorClass = 'bg-gray-400';
        break;
    }

    return `${colorClass} relative grid select-none items-center whitespace-nowrap rounded-lg py-1.5 px-3 font-sans text-xs font-bold uppercase text-black`;
  }
}
