import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndexGenreComponent } from './genre/index-genre/index-genre.component';
import { AddGenreComponent } from './genre/add-genre/add-genre.component';
import { EditGenreComponent } from './genre/edit-genre/edit-genre.component';
import { IndexActorsComponent } from './Actors/index-actors/index-actors.component';
import { AddActorsComponent } from './Actors/add-actors/add-actors.component';
import { EditActorsComponent } from './Actors/edit-actors/edit-actors.component';
import { IndexTheaterComponent } from './Theaters/index-theater/index-theater.component';
import { AddTheaterComponent } from './Theaters/add-theater/add-theater.component';
import { EditTheaterComponent } from './Theaters/edit-theater/edit-theater.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { FilterMovieComponent } from './movies/filter-movie/filter-movie.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { IsAdminGuard } from './is-admin.guard';
import { LoginComponent } from './security/login/login.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },

  { path: 'Genre', component: IndexGenreComponent, canActivate:[IsAdminGuard] },
  { path: 'Genre/Add', component: AddGenreComponent, canActivate:[IsAdminGuard] },
  { path: 'Genre/Edit/:id', component: EditGenreComponent, canActivate:[IsAdminGuard] },
  { path: 'Actors', component: IndexActorsComponent, canActivate:[IsAdminGuard] },
  { path: 'Actors/Add', component: AddActorsComponent, canActivate:[IsAdminGuard] },
  { path: 'Actors/Edit/:id', component: EditActorsComponent, canActivate:[IsAdminGuard] },
  { path: 'Theater', component: IndexTheaterComponent, canActivate:[IsAdminGuard] },
  { path: 'Theater/Add', component: AddTheaterComponent,canActivate:[IsAdminGuard] },
  { path: 'Theater/Edit/:id', component: EditTheaterComponent, canActivate:[IsAdminGuard] },
  { path: 'Movie/Add', component: AddMovieComponent, canActivate:[IsAdminGuard] },
  { path: 'Movie/Search', component: FilterMovieComponent },
  { path: 'Movie/Edit/:id', component: EditMovieComponent,canActivate:[IsAdminGuard] },
  { path: 'Movie/:id', component: MovieDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
