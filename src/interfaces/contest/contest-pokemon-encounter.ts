export interface PokemonEncounter {
  pokemon: {
    name: string;
    url: string;
  };
  version_details: Array<{
    version: {
      name: string;
      url: string;
    };
    max_chance: number;
    encounter_details: Array<{
      min_level: number;
      max_level: number;
      condition_values: Array<{
        name: string;
        url: string;
      }>;
      chance: number;
      method: {
        name: string;
        url: string;
      };
    }>;
  }>;
}
