import {Component, OnDestroy, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../services/movie.service';
import {Observable} from 'rxjs';
import {MovieInterface} from '../../movie.interface';

@Component({
    selector: 'app-card-movie',
    templateUrl: './card-movie.component.html',
    styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {
    private readonly id;
    data$: Observable<MovieInterface>;
    constructor(route: ActivatedRoute,
                private movieService: MovieService) {
        this.id = route.snapshot.params.id;
    }

    ngOnInit(): void {
        this.data$ = this.movieService.getInfoMovie(this.id);
    }
}

