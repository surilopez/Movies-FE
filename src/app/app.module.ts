import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MarkdownModule} from 'ngx-markdown';
import {LeafletModule} from '@asymmetrik/ngx-leaflet'
import "leaflet/dist/images/marker-shadow.png"

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
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';

import { AddTheaterComponent } from './Theaters/add-theater/add-theater.component';
import { IndexTheaterComponent } from './Theaters/index-theater/index-theater.component';
import { EditActorsComponent } from './Actors/edit-actors/edit-actors.component';

import { EditTheaterComponent } from './Theaters/edit-theater/edit-theater.component';
import { EditGenreComponent } from './genre/edit-genre/edit-genre.component';

import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormGenreComponent } from './genre/form-genre/form-genre.component';
import { FilterMovieComponent } from './movies/filter-movie/filter-movie.component';
import { FormActorsComponent } from './Actors/form-actors/form-actors.component';
import { UploadImagesComponent } from './Utils/upload-images/upload-images.component';
import { MarkDownInputComponent } from './Utils/mark-down-input/mark-down-input.component';
import { FormTheaterComponent } from './Theaters/form-theater/form-theater.component';
import { from } from 'rxjs';
import { MapsComponent } from './Utils/maps/maps.component';
import { FormMovieComponent } from './movies/form-movie/form-movie.component';
import { MultipleSelectorComponent } from './Utils/multiple-selector/multiple-selector.component';

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
    EditActorsComponent,
    EditMovieComponent,
    EditTheaterComponent,
    EditGenreComponent,
    FormGenreComponent,
    FilterMovieComponent,
    FormActorsComponent,
    UploadImagesComponent,
    MarkDownInputComponent,
    FormTheaterComponent,
    MapsComponent,
    FormMovieComponent,
    MultipleSelectorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LeafletModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
