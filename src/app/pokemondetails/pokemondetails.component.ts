import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

interface IPokemonDetails {
  name: string;
  abilities: {ability: {name: String}}[];
}

interface IAbility {
  
}

@Component({
  selector: 'app-pokemondetails',
  templateUrl: './pokemondetails.component.html',
  styleUrls: ['./pokemondetails.component.css']
})
export class PokemondetailsComponent implements OnInit {

  pokemonDetails: IPokemonDetails;
  id: number;
  public url: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id'));
    });
    this.getPokemonDetails();
  }

  async getPokemonDetails() {
    this.pokemonDetails = (await this.httpClient.get<IPokemonDetails>(this.url+'/'+this.id).toPromise());
  }
}
