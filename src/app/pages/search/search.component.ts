import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {MovieService} from '../../services/movie.service';
import {SearchInterface} from '../../movie.interface';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    searchText: string;
    result: Observable<SearchInterface>;

    constructor(private movieService: MovieService) {

    }

    onSearchMovie(): void {
        console.log(this.searchText);
        if (this.searchText.length > 2) {
            this.result = this.movieService.searchMovie(this.searchText);
        }
    }

    ngOnInit(): void {

    }
}
