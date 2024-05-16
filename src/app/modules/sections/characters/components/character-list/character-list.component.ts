import { Component } from '@angular/core';
import { Character } from '../../../../core/types/characters-result';
import { PaginationJoinButtonsComponent } from '../../../../shared/buttons/pagination-join-buttons/pagination-join-buttons.component';
import { CharactersService } from '../../../../core/services/clients/characters.service';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { SkeletonCardComponent } from '../../../../shared/animations/skeletons/skeleton-card/skeleton-card.component';
import { SearchService } from '../../../../core/services/search.service';
import { Subscription, debounceTime } from 'rxjs';
import { FilterDataService } from '../../../../core/services/filter-data.service';
import { PageStatsBoxComponent } from '../../../../shared/navigation/page-stats-box/page-stats-box.component';
import { PaginationDataService } from '../../../../core/services/pagination-data.service';
import { PaginationData } from '../../../../core/types/pagination-data';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [
    PaginationJoinButtonsComponent,
    CharacterCardComponent,
    SkeletonCardComponent,
    PageStatsBoxComponent,
  ],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
})
export class CharacterListComponent {
  private pageNumber: number = 1;
  public paginationMetaData: PaginationData | null = null;
  public characters: Character[] = [];
  public isLoading: boolean = true;

  constructor(
    private _charactersClientService: CharactersService,
    private _searchService: SearchService,
    private _filterDataService: FilterDataService,
    private readonly _paginationService: PaginationDataService
  ) {}

  ngOnInit() {
    this.fetchCharacters();
    this._searchService
      .getInputValue()
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.getFilteredCharacter(value);
      });
    this._paginationService.getPaginationData().subscribe((value) => {
      this.paginationMetaData = value;
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
