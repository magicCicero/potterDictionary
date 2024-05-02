import { Routes } from '@angular/router';
import { CharactersComponent } from './modules/sections/characters/characters.component';

export const routes: Routes = [
  { path: '', redirectTo: 'character', pathMatch: 'full' },
  {
    path: 'characters',
    component: CharactersComponent,
    pathMatch: 'full',
  },

  { path: '**', redirectTo: 'home' },
];
