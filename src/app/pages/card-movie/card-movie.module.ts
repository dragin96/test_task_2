import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardMovieRoutingModule } from './card-movie-routing.module';
import { CardMovieComponent } from './card-movie.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [CardMovieComponent],
    imports: [
        CommonModule,
        CardMovieRoutingModule,
        MatGridListModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule,
        MatMenuModule
    ]
})
export class CardMovieModule { }
