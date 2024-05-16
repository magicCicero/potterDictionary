import { Component, Input } from '@angular/core';
import { PaginationData } from '../../../core/types/pagination-data';

@Component({
  selector: 'app-page-stats-box',
  standalone: true,
  imports: [],
  templateUrl: './page-stats-box.component.html',
  styleUrl: './page-stats-box.component.css',
})
export class PageStatsBoxComponent {
  @Input() statsTitle: string = '';
  @Input() pageData: PaginationData | null = null;
}
