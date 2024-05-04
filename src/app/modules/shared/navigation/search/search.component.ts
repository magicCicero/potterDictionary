import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from '../../../core/services/clients/characters.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
})
export class SearchComponent implements AfterViewInit {
  currentUrl: string = '';
  private searchSubscription: Subscription | undefined;

  constructor(
    private readonly _router: Router,
    private readonly _characterService: CharactersService
  ) {}

  searchCharacter(name: string): void {
    // Überprüfen, ob bereits ein Abonnement vorhanden ist und es kündigen
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }

    // Suchanfrage an den Service senden und das Ergebnis abonnieren
    this.searchSubscription = this._characterService
      .getFilteredCharacters(name)
      .subscribe((result) => {
        // Verarbeiten Sie das Ergebnis hier, z.B. setzen Sie eine Komponentenvariable mit den Ergebnissen
        console.log(result);
      });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.currentUrl = this._router.url;
      console.log(this.currentUrl);
    });
  }
}
