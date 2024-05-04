import { Injectable } from '@angular/core';
import { Character } from '../types/characters-result';

@Injectable({
  providedIn: 'root',
})
export class FilterDataService {
  public filterCharactersWithImages(characters: Character[]): Character[] {
    return characters.filter(
      (character) => character.attributes.image !== null
    );
  }
}
