import { Component, Input } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
@Component({
  selector: 'app-accordion-arrows',
  standalone: true,
  imports: [KeyValuePipe],
  templateUrl: './accordion-arrows.component.html',
  styleUrl: './accordion-arrows.component.css',
})
export class AccordionArrowsComponent {
  @Input() details: any;

  public filteredDetails: any;
  ngOnInit() {
    console.log(this.details);
    this.filteredDetails = Object.fromEntries(
      Object.entries(this.details).filter(([key, value]) => {
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
    );
  }
}
