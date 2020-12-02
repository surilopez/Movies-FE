import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {IndexGenreComponent} from './genre/index-genre/index-genre.component';
import {AddGenreComponent} from './genre/add-genre/add-genre.component';
import {EditGenreComponent} from './genre/edit-genre/edit-genre.component';
import {IndexActorsComponent} from './Actors/index-actors/index-actors.component';
import {AddActorsComponent} from './Actors/add-actors/add-actors.component';
import {EditActorsComponent} from './Actors/edit-actors/edit-actors.component';
import {IndexTheaterComponent} from './Theaters/index-theater/index-theater.component';
import {AddTheaterComponent} from './Theaters/add-theater/add-theater.component';
import {EditTheaterComponent} from './Theaters/edit-theater/edit-theater.component';
import {AddMovieComponent} from './movies/add-movie/add-movie.component';
import {EditMovieComponent} from './movies/edit-movie/edit-movie.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},

  {path:'Genre',component:IndexGenreComponent},
  {path:'Genre/Add',component:AddGenreComponent},
  {path:'Genre/Edit/:id',component:EditGenreComponent},
  {path:'Actors',component:IndexActorsComponent},
  {path:'Actors/Add',component:AddActorsComponent},
  {path:'Actors/Edit/:id',component:EditActorsComponent},
  {path:'Theater',component:IndexTheaterComponent},
  {path:'Theater/Add',component:AddTheaterComponent},
  {path:'Theater/Edit/:id',component:EditTheaterComponent},
   {path:'Movie/Add',component:AddMovieComponent},
   {path:'Movie/Edit/:id',component:EditMovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
