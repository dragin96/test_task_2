import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MovieInterface, SearchInterface} from '../movie.interface';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    private apiUrl = 'http://www.omdbapi.com/?apikey=ae3f4670';

    constructor(private http: HttpClient) {
    }

    searchMovie(textSearch: string): Observable<SearchInterface> {
        textSearch = textSearch.trim();

        const searchURL = `${this.apiUrl}&type=movie&s=${textSearch}`;
        return this.http.get<SearchInterface>(searchURL);
    }

    getInfoMovie(id: string): Observable<MovieInterface>{
        const searchURL = `${this.apiUrl}&i=${id}`;
        return this.http.get<MovieInterface>(searchURL);
    }
}
