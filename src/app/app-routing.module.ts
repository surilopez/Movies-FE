import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {IndexGenreComponent} from './genre/index-genre/index-genre.component';
import {AddGenreComponent} from './genre/add-genre/add-genre.component';
import {IndexActorsComponent} from './Actors/index-actors/index-actors.component';
import {AddActorsComponent} from './Actors/add-actors/add-actors.component';
import {IndexTheaterComponent} from './Theaters/index-theater/index-theater.component';
import {AddTheaterComponent} from './Theaters/add-theater/add-theater.component';
import {AddMovieComponent} from './movies/add-movie/add-movie.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},

  {path:'Genre',component:IndexGenreComponent},
  {path:'Genre/Add',component:AddGenreComponent},
  {path:'Actors',component:IndexActorsComponent},
  {path:'Actors/Add',component:AddActorsComponent},
  {path:'Theater',component:IndexTheaterComponent},
  {path:'Theater/Add',component:AddTheaterComponent},
   {path:'Movie/Add',component:AddMovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
