export default class Pokemon {
  // 1. Typage des propiétés d'un pokémon.
  id: number;
  hp: number;
  cp: number;
  name: string;
  picture: string;
  types: Array<string>;
  created: Date;
}
