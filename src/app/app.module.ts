import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './material/material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListMoviesComponent } from './movies/list-movies/list-movies.component';
import { IndexGenreComponent } from './genre/index-genre/index-genre.component';
import { AddGenreComponent } from './genre/add-genre/add-genre.component';
import { IndexActorsComponent } from './Actors/index-actors/index-actors.component';
import { AddActorsComponent } from './Actors/add-actors/add-actors.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';

import { AddTheaterComponent } from './Theaters/add-theater/add-theater.component';
import { IndexTheaterComponent } from './Theaters/index-theater/index-theater.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavBarComponent,
    ListMoviesComponent,
    IndexGenreComponent,
    AddGenreComponent,
    IndexActorsComponent,
    AddActorsComponent,
    AddMovieComponent,
    AddTheaterComponent,
    IndexTheaterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
