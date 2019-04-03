import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonsComponent} from './pokemons/pokemons.component';
import {PokemondetailsComponent} from './pokemondetails/pokemondetails.component';

const routes: Routes = [
  {path: 'pokemons', component: PokemonsComponent},
  {path: 'pokemons/:id', component: PokemondetailsComponent},
  {path: '', redirectTo: '/pokemons', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
