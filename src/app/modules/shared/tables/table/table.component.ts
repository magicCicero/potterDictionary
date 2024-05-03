import { KeyValuePipe, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [KeyValuePipe, NgFor, NgIf],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() details: any;

  public filteredDetails: any;

  ngOnInit() {
    this.filteredDetails = Object.fromEntries(
      Object.entries(this.details)
        .filter(([key, value]) => {
          if (typeof value === 'object' && value !== null) {
            if (Array.isArray(value)) {
              return value.length > 0;
            } else {
              return true;
            }
          } else {
            return value !== undefined && value !== null;
          }
        })
        .map(([key, value]) => {
          const newKey =
            key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
          return [newKey, value];
        })
    );
  }
}
