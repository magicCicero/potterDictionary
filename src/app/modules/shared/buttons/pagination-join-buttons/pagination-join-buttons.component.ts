import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-join-buttons',
  standalone: true,
  imports: [],
  templateUrl: './pagination-join-buttons.component.html',
  styleUrl: './pagination-join-buttons.component.css',
})
export class PaginationJoinButtonsComponent {
  @Output() previousPageClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() nextPageClicked: EventEmitter<void> = new EventEmitter<void>();

  emitPreviousPageClick() {
    this.previousPageClicked.emit();
  }

  emitNextPageClick() {
    this.nextPageClicked.emit();
  }
}
