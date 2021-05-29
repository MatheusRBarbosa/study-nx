import { Component } from '@angular/core';
import { ApiService } from '@pokemon/api';
import { Pokemon } from '@pokemon/models';
@Component({
  selector: 'pokemon-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pokemons: Pokemon[] = [];

  constructor(private api: ApiService) { }

  getPokemon = () => this.api.getPokemon(this.getId()).subscribe(pokemon => this.pokemons.push(pokemon));

  private getId() {
    const min = 1;
    const max = 200;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
