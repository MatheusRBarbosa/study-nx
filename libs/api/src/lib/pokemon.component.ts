import { Injectable } from "@angular/core";
import { Pokemon } from "@pokemon/models";
import { ApiService } from "./api.service";

@Injectable({ providedIn: 'root' })
export class PokemonComponent {
    pokemons: Pokemon[] = [];
    constructor(private api: ApiService) { }

    getPokemon = () => this.api.getPokemon(this.getId()).subscribe(pokemon => this.pokemons.push(pokemon));

    private getId() {
        const min = 1;
        const max = 200;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}