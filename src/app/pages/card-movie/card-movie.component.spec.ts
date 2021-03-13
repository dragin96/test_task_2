import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CardMovieComponent} from './card-movie.component';
import {ActivatedRoute} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';

describe('CardMovieComponent', () => {
    let component: CardMovieComponent;
    let fixture: ComponentFixture<CardMovieComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {params: {id: '11'}}
                    }
                }
            ],
            declarations: [CardMovieComponent],
            imports: [
                HttpClientTestingModule,
                MatGridListModule,
                MatCardModule,
                MatButtonModule,
                MatTableModule,
                MatMenuModule
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CardMovieComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

