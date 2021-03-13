import {Component, Input, OnInit} from '@angular/core';
import {Search} from '../../../movie.interface';

@Component({
    selector: 'app-result-item',
    templateUrl: './result-item.component.html',
    styleUrls: ['./result-item.component.css']
})
export class ResultItemComponent implements OnInit {
    constructor() {
    }

    @Input() movie: Search;

    ngOnInit(): void {
    }

}
