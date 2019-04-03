import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IPokemon { name: string; url: string; number: number; }

interface IPokemonList{
  count: number;
  results: IPokemon[];
}

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {
  public pokemons: IPokemon[] = [];
  public url: string ='https://pokeapi.co/api/v2/pokemon';
  public limit: number = 100;
  public filter: string = '';
  
  ngOnInit(): void {
    this.getPokemons();
  }
  
  constructor(private httpClient: HttpClient) {}

  async getPokemons(){
    this.pokemons = (await this.httpClient.get<IPokemonList>(this.url + '/?limit='+this.limit).toPromise()).results;
    for(let i=1; i<this.limit; i++){
      this.pokemons[i-1].number = i;
    }
  }
}