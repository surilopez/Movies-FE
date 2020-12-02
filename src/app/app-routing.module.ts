import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {IndexGenreComponent} from './genre/index-genre/index-genre.component';
import {AddGenreComponent} from './genre/add-genre/add-genre.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'Genre',component:IndexGenreComponent},
  {path:'Genre/Add',component:AddGenreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
