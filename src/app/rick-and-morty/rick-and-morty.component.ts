import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../rick-and-morty.service';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.css']
})
export class RickAndMortyComponent implements OnInit {

  characters: any[] = [];
  selectedCharacterId: number | null = null;
  characterEpisodes: any[] = [];

  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.rickAndMortyService.getCharacters().subscribe((data: any) => {
      this.characters = data.results;
    });
  }

  onCharacterClick(character: any): void {
    if (this.selectedCharacterId === character.id) {
      // Si el personaje ya está seleccionado, deseleccionarlo (ocultar episodios)
      this.selectedCharacterId = null;
      this.characterEpisodes = [];
    } else {
      // Seleccionar el personaje y cargar los episodios
      this.selectedCharacterId = character.id;
      this.loadCharacterEpisodes(character.id);
    }
  }

  loadCharacterEpisodes(characterId: number): void {
    this.rickAndMortyService.getCharacterById(characterId).subscribe((character: any) => {
      const episodeUrls = character.episode;
      this.characterEpisodes = [];

      // Hacer una petición a cada URL de episodio
      episodeUrls.forEach((url: string) => {
        this.rickAndMortyService.getEpisodeByUrl(url).subscribe((episode: any) => {
          this.characterEpisodes.push(episode);
        });
      });
    });
  }
}