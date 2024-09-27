import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyService } from '../rick-and-morty.service';

@Component({
  selector: 'app-character-episodes',
  templateUrl: './character-episodes.component.html',
  styleUrls: ['./character-episodes.component.css']
})
export class CharacterEpisodesComponent implements OnInit {
  characterId: number | undefined;
  character: any;
  episodes: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private rickAndMortyService: RickAndMortyService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      this.characterId = +idParam;

      this.rickAndMortyService.getCharacterById(this.characterId).subscribe((characterData: any) => {
        this.character = characterData;
      });

      this.rickAndMortyService.getCharacterEpisodes(this.characterId).subscribe((data: any) => {
        this.episodes = data;
      });
    } else {
      console.error('ID del personaje no encontrado en la ruta.');
    }
  }
}
