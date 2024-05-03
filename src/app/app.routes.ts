import { Routes } from '@angular/router';
import { CharactersComponent } from './modules/sections/characters/characters.component';
import { CharacterDetailsComponent } from './modules/sections/characters/pages/character-details/character-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  {
    path: 'characters',
    component: CharactersComponent,
    pathMatch: 'full',
  },
  {
    path: 'characters/:id',
    component: CharacterDetailsComponent,
  },

  { path: '**', redirectTo: 'home' },
];
