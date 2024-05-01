import { Routes } from '@angular/router';
import { CharacterDetailsComponent } from './modules/sections/character-details/character-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'character', pathMatch: 'full' },
  {
    path: 'character',
    component: CharacterDetailsComponent,
    pathMatch: 'full',
  },

  { path: '**', redirectTo: 'home' },
];
