import { Component, OnInit } from '@angular/core';
import { RoutesTitles } from '../../app-routes/app-routes-titles.service';

import { Genre } from './genre';
import { GenreService } from '../../services/genre.service';

@Component({
  selector: 'genre5',
  templateUrl: './genretemplate.component.html',
  providers: [ GenreService ],
  styles: [
  `
  	.genre5 {
		margin: 1% auto;
		max-width: 700px;
	}
	.event1image {
		background-image: url('../../assets/sotclogos/icons/SOTC_icons_blue_gospel.png');
		background-size: cover;
	}
	.card-image {
		max-width: 100%;
		margin-bottom: 16px;
	}
  `
  ]
})
export class Genre5Component implements OnInit {

  genres: Genre[];
  errorMessage: string;  

  constructor(private _RouteTitles:RoutesTitles, private genreService:GenreService){
    _RouteTitles.name.next('Gospel and The Freedom Trail');
  }

  ngOnInit() {
    this.getGenres();
  }
  getGenres() {
    this.genreService.getGenres('../assets/json/data5.json')
                    .subscribe(
                       genres => this.genres = genres,
                       error => this.errorMessage = <any>error);
  }

}
