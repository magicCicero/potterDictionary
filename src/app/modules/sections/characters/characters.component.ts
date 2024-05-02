import { Component } from '@angular/core';

import { PaginationJoinButtonsComponent } from '../../shared/buttons/pagination-join-buttons/pagination-join-buttons.component';

import { CharacterListComponent } from './components/character-list/character-list.component';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CharacterListComponent, PaginationJoinButtonsComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent {}
