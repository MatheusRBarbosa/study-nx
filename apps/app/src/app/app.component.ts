import { Component } from '@angular/core';
import { PokemonComponent } from '@pokemon/api';
@Component({
  selector: 'pokemon-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  pokemonComponent: PokemonComponent
  constructor(po: PokemonComponent) {
    this.pokemonComponent = po;
  }
}
