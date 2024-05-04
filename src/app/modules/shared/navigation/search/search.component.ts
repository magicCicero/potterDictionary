import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../../core/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
})
export class SearchComponent implements AfterViewInit {
  currentUrl: string = '';

  constructor(
    private readonly _router: Router,
    private _searchService: SearchService
  ) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.currentUrl = this._router.url;
      console.log(this.currentUrl);
    });
  }

  public onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this._searchService.setInputValue(value);
  }
}
