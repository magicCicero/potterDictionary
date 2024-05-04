import { Component } from '@angular/core';
import { Character } from '../../../../core/types/characters-result';
import { PaginationJoinButtonsComponent } from '../../../../shared/buttons/pagination-join-buttons/pagination-join-buttons.component';
import { CharactersService } from '../../../../core/services/clients/characters.service';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { SkeletonCardComponent } from '../../../../shared/animations/skeletons/skeleton-card/skeleton-card.component';
import { SearchService } from '../../../../core/services/search.service';
import { debounceTime } from 'rxjs';
import { FilterDataService } from '../../../../core/services/filter-data.service';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [
    PaginationJoinButtonsComponent,
    CharacterCardComponent,
    SkeletonCardComponent,
  ],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
})
export class CharacterListComponent {
  private pageNumber: number = 1;
  public characters: Character[] = [];
  public isLoading: boolean = true;

  constructor(
    private _charactersClientService: CharactersService,
    private _searchService: SearchService,
    private _filterDataService: FilterDataService
  ) {}

  ngOnInit() {
    this.fetchCharacters();
    this._searchService
      .getInputValue()
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.getFilteredCharacter(value);
      });
  }

  private async fetchCharacters(): Promise<void> {
    try {
      this.isLoading = true;
      this.characters = await this._charactersClientService
        .getHogwartsCharacters(this.pageNumber)
        .then((characters) => {
          return this._filterDataService.filterCharactersWithImages(characters);
        });
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }

  private async getFilteredCharacter(character: string): Promise<void> {
    try {
      this.isLoading = true;
      this.characters = await this._charactersClientService
        .getFilteredCharacters(character)
        .then((characters) => {
          return this._filterDataService.filterCharactersWithImages(characters);
        });
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }

  public async nextPage(): Promise<void> {
    this.pageNumber++;
    this.fetchCharacters();
  }

  public async previousPage(): Promise<void> {
    if (this.pageNumber === 1) {
      return;
    }
    this.pageNumber--;
    this.fetchCharacters();
  }
}
