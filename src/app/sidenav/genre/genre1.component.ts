import { Component, OnInit } from '@angular/core';
import { RoutesTitles } from '../../app-routes/app-routes-titles.service';

import { Genre } from './genre';
import { GenreService } from '../../services/genre.service';

@Component({
  selector: 'genre1',
  templateUrl: './genre1.component.html',
  providers: [ GenreService ],
  styles: [
  `.card-container {
		display: flex !important;
	    flex-wrap: wrap;
	    justify-content: center;
	    align-items: flex-start;
	}
  	md-card {
		margin: 1% auto;
	}
	.genre1-full {
		max-width: 700px;
		margin: 1% auto;
	}
	.genre1 {
		width: 92%;
		margin: 1% auto;
	}
	@media only screen and (min-width: 768px){
		md-card {
			margin: 1%;
		}
		.genre1 {
			width: 40%;
			// margin: auto;
			display: inline-grid;
		}
	}
	.mainevent1 .event1image {
		background-image: url('../../assets/sotclogos/icons/SOTC_icons_blue_house.png');
		background-size: cover;
	}
	.mainevent2 .event1image {
		background-image: url('../../assets/sotclogos/icons/SOTC_icons_blue_house.png');
		background-size: cover;
	}
	.mainevent2 .event2image {
		background-image: url('../../assets/sotclogos/icons/SOTC_icons_blue_house.png');
		background-size: cover;
	}
	.lead {
		display: block;
		color: #555;
	}
	.event-container {
		max-width: 700px;
		margin: 0 auto;
	}
	.card-image {
		max-width: 100%;
		margin-bottom: 16px;
	}
	h2 {
		// font-family: 'Roboto Condensed', sans-serif;
	}
	:host>>>.essay-img {
		width: 100%;
		max-width: 700px;
	}
  `
  ]
})
export class Genre1Component implements OnInit {

  genres: Genre[];
  errorMessage: string; 

  constructor(private _RouteTitles:RoutesTitles, private genreService:GenreService){
    _RouteTitles.name.next('Chicago House Party');
  }

  ngOnInit() {
    this.getGenres();
  }
  getGenres() {
    this.genreService.getGenres('../assets/json/data1.json')
                    .subscribe(
                       genres => this.genres = genres,
                       error => this.errorMessage = <any>error);
  }

}
