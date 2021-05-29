export interface Pokemon {
  name: string;
  sprites: {
    front_default: string
  };
  types: Type[]
}

interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}