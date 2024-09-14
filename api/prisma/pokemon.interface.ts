export interface Pokemon {
  id: number;
  name: Name;
  types: string[];
  base: Base;
  species: string;
  description: string;
  firstSeen: string;
  evolution?: Evolution;
  profile: Profile;
  image: Image;
}

export interface Name {
  english: string;
  japanese: string;
  chinese: string;
  french: string;
}

export interface Base {
  HPs: number;
  Attack: number;
  Defense: number;
  'Sp. Attack': number;
  'Sp. Defense': number;
  Speed: number;
}

export interface Evolution {
  next?: [string, string][];
  prev?: [string, string];
}

export interface Profile {
  height: string;
  weight: string;
  egg: string[];
  ability: [string, string][];
  gender: string;
}

export interface Image {
  sprite: string;
  thumbnail: string;
  hires: string;
}
