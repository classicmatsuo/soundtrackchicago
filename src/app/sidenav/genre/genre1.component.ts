import { Component, OnInit } from '@angular/core';
import { RoutesTitles } from '../../app-routes/app-routes-titles.service';

@Component({
  selector: 'genre1',
  templateUrl: './genre1.component.html',
  styles: [
  `
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
			margin: auto;
			display: inline-grid;
		}
	}
	.event1image {
		background-image: url('../assets/mdm.jpg');
		background-size: cover;
	}
	.event2image {
		background-image: url('http://placehold.it/200/000000/ffffff?text=CHLP');
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
		font-family: 'Roboto Condensed', sans-serif;
	}
  `
  ]
})
export class Genre1Component implements OnInit {

  constructor(private _RouteTitles:RoutesTitles){
    _RouteTitles.name.next('Chicago House Legacy Project');
  }

  ngOnInit() {
  }

}
