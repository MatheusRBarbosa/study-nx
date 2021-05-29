import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pokemon } from '@pokemon/models';


@Injectable({ providedIn: 'root' })
export class ApiService {
    private base_url = 'https://pokeapi.co/api/v2/pokemon';
    constructor(
        private http: HttpClient
    ) { }

    getPokemon(id: number) {
        return this.http.get<Pokemon>(`${this.base_url}/${id}`);
    }
}