// TypeScript interfaces for Pokémon data

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}
export interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  back_default: string;
  back_shiny: string;
}
export interface PokemonType {
  name: string;
  url: string;
}
export interface PokemonTypeMainObject {
  slot: number;
  type: PokemonType;
}
export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonDetail {
  name: string;
  sprites: PokemonSprites;
  height: number;
  weight: number;
  types: PokemonTypeMainObject[];
  stats: PokemonStat[];
  abilities: PokemonAbility[];
  base_experience: number;
}
