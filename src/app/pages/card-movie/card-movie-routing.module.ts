import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardMovieComponent} from './card-movie.component';

const routes: Routes = [
  {
    path: ':id',
    component: CardMovieComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardMovieRoutingModule { }
