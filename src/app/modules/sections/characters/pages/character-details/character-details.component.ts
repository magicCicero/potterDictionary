import { Component } from '@angular/core';
import { PaginationJoinButtonsComponent } from '../../../../shared/buttons/pagination-join-buttons/pagination-join-buttons.component';

@Component({
  selector: 'app-character-details',
  standalone: true,
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css',
  imports: [PaginationJoinButtonsComponent],
})
export class CharacterDetailsComponent {}
