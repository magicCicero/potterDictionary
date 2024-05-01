import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CharactersService } from '../../core/services/clients/characters.service';
import { Characters } from '../../core/types/characters-result';
import { PaginationJoinButtonsComponent } from '../../shared/buttons/pagination-join-buttons/pagination-join-buttons.component';
@Component({
  selector: 'app-character-details',
  standalone: true,
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css',
  imports: [PaginationJoinButtonsComponent],
})
export class CharacterDetailsComponent {
  @Input() character: any;
  @Output() close = new EventEmitter();

  private pageNumber: number = 1;
  public characters: Characters[] = [];
  constructor(private _charactersClientService: CharactersService) {}

  ngOnInit() {
    this.fetchCharacters();
  }

  private async fetchCharacters(): Promise<void> {
    this.characters = await this._charactersClientService.getHogwartsCharacters(
      this.pageNumber
    );
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
