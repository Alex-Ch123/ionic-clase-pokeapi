import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonListResponse } from '../interface/pokemon.interface';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private http: HttpClient) {}

  getPokemonList(limit: number = 20): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(`${this.apiUrl}?limit=${limit}`);
  }

  getPokemonDetail(url: string): Observable<any> {
    return this.http.get(url);
  }
}
