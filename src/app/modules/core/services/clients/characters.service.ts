import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Character } from '../../types/characters-result';
import { PaginationDataService } from '../pagination-data.service';
import { PaginationData } from '../../types/pagination-data';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(
    private _http: HttpClient,
    private _paginationDataService: PaginationDataService
  ) {}

  public async getHogwartsCharacters(pageNumber: number): Promise<Character[]> {
    const url = `https://api.potterdb.com/v1/characters?page[number]=${pageNumber}&page[size]=30`;
    try {
      const result = await firstValueFrom(
        this._http.get<{
          data: Character[];
          meta: { pagination: PaginationData };
        }>(url)
      );
      this._paginationDataService.setPaginationData(result.meta.pagination);
      return result.data;
    } catch (error) {
      console.error('Fehler beim Abrufen der Daten von der API:', error);
      throw error;
    }
  }

  public async getCharacterDetails(
    characterId: string | null
  ): Promise<Character> {
    const url = `https://api.potterdb.com/v1/characters/${characterId}`;
    try {
      const result = await firstValueFrom(
        this._http.get<{ data: Character }>(url)
      );
      return result.data;
    } catch (error) {
      console.error('Fehler beim Abrufen der Daten von der API:', error);
      throw error;
    }
  }
  public async getFilteredCharacters(
    characterName: string | null
  ): Promise<Character[]> {
    const url = `https://api.potterdb.com/v1/characters?filter[name_cont]=${characterName}&page[size]=30`;
    try {
      const result = await firstValueFrom(
        this._http.get<{ data: Character[] }>(url)
      );
      return result.data;
    } catch (error) {
      console.error('Fehler beim Abrufen der Daten von der API:', error);
      throw error;
    }
  }
}
