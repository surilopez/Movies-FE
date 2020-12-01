import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {IndexGenreComponent} from './genre/index-genre/index-genre.component'

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'genre',component:IndexGenreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
