import { CharacterAttributes } from './character-attributes';

export type Character = {
  id: string;
  type: string;
  attributes: CharacterAttributes;
  links: {
    self: string;
  };
};
