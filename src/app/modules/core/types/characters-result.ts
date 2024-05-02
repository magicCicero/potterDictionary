export type Character = {
  id: string;
  type: string;
  attributes: CharacterAttributes;
  links: {
    self: string;
  };
};

type CharacterAttributes = {
  titles: string[];
  id: string;
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: string | null;
  dateOfBirth: string | null;
  yearOfBirth: number | null;
  wizard: boolean;
  ancestry: string | null;
  eyeColour: string | null;
  hairColour: string | null;
  wand: Wand | null;
  patronus: string | null;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
  weight: number | null;
  born: string | null;
  skin_color: string | null;
  hair_color: string | null;
  nationality: string | null;
  eye_color: string | null;
  height: number | null;
  animagus: string | null;
};

type Wand = {
  wood: string;
  core: string;
  length: number;
};
