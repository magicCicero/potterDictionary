import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { Characters } from '../../types/characters-result';
@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private _http: HttpClient) {}

  public async getHogwartsCharacters(
    pageNumber: number
  ): Promise<Characters[]> {
    const url = `https://api.potterdb.com/v1/characters?page[number]=${pageNumber}&page[size]=25`;
    try {
      const result = await firstValueFrom(
        this._http.get<{ data: Characters[] }>(url)
      );
      const filteredData = result.data.filter(
        (character) => character.attributes.image !== null
      );
      return filteredData;
    } catch (error) {
      console.error('Fehler beim Abrufen der Daten von der API:', error);
      throw error;
    }
  }
}
