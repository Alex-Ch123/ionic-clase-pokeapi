import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonImg,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Pokemon } from '../interface/pokemon.interface';
import { PokemonService } from '../services/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    IonItem,
    IonLabel,
    IonList,
    IonThumbnail,
    IonImg,
    CommonModule,
  ],
})
export class Tab2Page implements OnInit {
  pokemonList: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadPokemonList();
  }

  loadPokemonList() {
    this.pokemonService.getPokemonList().subscribe((response) => {
      this.pokemonList = response.results.map(pokemon => ({
        name: pokemon.name,
        url: pokemon.url,
        details: null
      }));
      this.pokemonList.forEach(pokemon => this.fetchPokemonDetails(pokemon));
    });
  }

  fetchPokemonDetails(pokemon: any) {
    this.pokemonService.getPokemonDetail(pokemon.url).subscribe(details => {
      pokemon.details = details;
    });
  }
}
