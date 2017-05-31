import { Component, OnInit } from '@angular/core';
import { RoutesTitles } from '../../app-routes/app-routes-titles.service';

import { Genre } from './genre';
import { GenreService } from '../../services/genre.service';

@Component({
  selector: 'genre6',
  templateUrl: './genretemplate.component.html',
  providers: [ GenreService ],
  styles: [
  `
  	.card-container {
		display: flex !important;
	    flex-wrap: wrap;
	    justify-content: center;
	    align-items: flex-start;
	}
	.genre6 {
		// width: 90%;
		margin: 1% auto;
	}
	@media only screen and (min-width: 900px){
		.genre6 {
			width: 42.5%;
			margin: 1%;
			display: inline-grid;
		}
	}
	.event1image {
		background-image: url('../../assets/sotclogos/icons/SOTC_icons_blue_duranguense.png');
		background-size: cover;
	}
	.event2image {
		background-image: url('../../assets/sotclogos/icons/SOTC_icons_blue_duranguense.png');
		background-size: cover;
	}
	.card-image {
		max-width: 100%;
		margin-bottom: 16px;
	}
  `
  ]
})
export class Genre6Component implements OnInit {

  genres: Genre[];
  errorMessage: string;	

  constructor(private _RouteTitles:RoutesTitles, private genreService:GenreService){
    _RouteTitles.name.next('The Rise of Duranguense Music');
  }

  ngOnInit() {
    this.getGenres();
  }
  getGenres() {
    this.genreService.getGenres('../assets/json/data6.json')
                    .subscribe(
                       genres => this.genres = genres,
                       error => this.errorMessage = <any>error);
  }

}
