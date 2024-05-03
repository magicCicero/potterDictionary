import { Component, EventEmitter, Output } from '@angular/core';

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

  public emitPreviousPageClick(): void {
    this.previousPageClicked.emit();
  }

  public emitNextPageClick(): void {
    this.nextPageClicked.emit();
  }
}
