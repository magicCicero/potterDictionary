import { Component, OnInit } from '@angular/core';
import { PaginationJoinButtonsComponent } from '../../../../shared/buttons/pagination-join-buttons/pagination-join-buttons.component';
import { CharactersService } from '../../../../core/services/clients/characters.service';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../../../core/types/characters-result';
import { LoadingSpinnerComponent } from '../../../../shared/animations/loading-spinner/loading-spinner.component';
import { AccordionArrowsComponent } from '../../../../shared/accordions/accordion-arrows/accordion-arrows.component';
import { TableComponent } from '../../../../shared/tables/table/table.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character-details',
  standalone: true,
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css',
  imports: [
    PaginationJoinButtonsComponent,
    LoadingSpinnerComponent,
    AccordionArrowsComponent,
    TableComponent,
  ],
})
export class CharacterDetailsComponent implements OnInit {
  public character: Character | null = null;
  public isLoading: boolean = false;

  public characterId: string | null = '';
  constructor(
    private readonly _characterService: CharactersService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _location: Location
  ) {}

  ngOnInit(): void {
    this.characterId = this._activatedRoute.snapshot.paramMap.get('id');
    this.getCharacterDetails();
  }

  private async getCharacterDetails(): Promise<void> {
    try {
      this.isLoading = true;
      this.character = await this._characterService.getCharacterDetails(
        this.characterId
      );
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }
  public goBackToPrevPage(): void {
    this._location.back();
  }
}
