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
<<<<<<< HEAD
	
	events = [
		{
			genre: 'genre6',
			title: 'The Rise of Duranguense Music',
			admission: 'Free & open to the public',
			location: 'National Museum Of Mexican Art (1852 W. 19th St.)',
			date: 'Saturday, August 5',
			time: '2-4pm',
			image: '../assets/Show Revelación.jpg',
			description: '<p>Join us on Saturday, August 5th at the National Museum of Mexican Art for a program that explores the unique history of “Duranguense” music in Chicago. The program will include a short video and bilingual discussion with Jose Luis Terrazas of Montéz de Durango and Chicago Latin music promoter Ivan Fernandez hosted by Mateo Mulcahy of the Old Town School of Folk Music. The program will culminate in a performance by Chicago musical group Show Revelación.</p><p>The style of Chicago Mexican music know as Duranguense music exploded in the 90’s through the seed planted by Montéz de Durango. This style of music caught on in Chicago and spawned dozens of wildly popular bands throughout Mexican communities throughout the U.S. and all over Mexico. This Chicago phenomena exported a Chicago born, Mexican-American genre back to Mexico and became the hottest new style of Mexican music and dance. The Chicago origins of this style of Mexican music are not widely known or understood and this event at the National Museum of Mexican Art aims to educate the Chicago audience and celebrate this extraordinary musical style.</p><p>This event is a precursor to a free concert in Harrison Park on August 13th from 2-6pm headlined by Chicago Duranguense icons Montez de Durango and also featuring Show Revelación and Norteñisimo Zierra Azul.</p>',
			link: 'http://nationalmuseumofmexicanart.org/',
		},
		{
			genre: 'genre6',
			title: 'The Rise of Duranguense Music Music At Harrison Park',
			lead: 'In partnership with Night Out In The Parks, presented by the Chicago Park District',
			admission: 'Free & open to the public, Rain or Shine',
			location: 'Harrison Park (1824 S. Wood St.)',
			date: 'Sunday, August 13',
			time: '2-6pm',
			image: '',
			description: '',
			link: '',
			tabs: [
				{	
					tabname: 'Montéz De Durango',
					title: 'Montéz De Durango',
					image: '../assets/Montez2017-2.jpg',
					content: `<p>Montéz De Durango began in the city of Chicago back in 1996, when its founder and musical director, José Luis Terrazas, brought together a group of talented musicians who, like him, had a strong desire to succeed and make a difference in the Regional Mexican Music industry.</p><p>From 2005 to present day, Montéz De Durango has gone on to sell over seven million albums. They continue to tour countries such as United States, Mexico, Guatemala, El Salvador, and Canada, and have left a legacy in Regional Mexican Music with over twenty Top 40 songs in their twenty-year career.</p>`
				},
				{	
					tabname: 'Norteñisimo Zierra Azul',
					title: 'Norteñisimo Zierra Azul',
					image: '../assets/NZA.jpg',
					content: `<p>Norteñisimo Zierra Azul is a Chicago based Mexican Norteño band founded in 2013. The band has toured and recorded with their mentors, Duranguense super stars Montez de Durango and are working on their fourth studio album.</p>`
				},
				{	
					tabname: 'Show Revelación',
					title: 'Show Revelación',
					image: '../assets/Show Revelación.jpg',
					content: ``
				}
			]
		}
	]
=======
>>>>>>> httprequest

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
