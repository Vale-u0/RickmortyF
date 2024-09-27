import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CharacterEpisodesComponent } from './character-episodes/character-episodes.component';
import { RickAndMortyComponent } from './rick-and-morty/rick-and-morty.component';
import { RickAndMortyService } from './rick-and-morty.service'; // Importa el servicio

@NgModule({
  declarations: [
    AppComponent,
    RickAndMortyComponent,
    CharacterEpisodesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RickAndMortyService], // Añade el servicio aquí
  bootstrap: [AppComponent]
})
export class AppModule { }
