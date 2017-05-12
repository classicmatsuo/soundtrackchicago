import { Component, OnInit } from '@angular/core';
import { RoutesTitles } from '../../app-routes/app-routes-titles.service';

@Component({
  selector: 'genre2',
  templateUrl: './genre2.component.html',
  styles: [
  `
	.genre2 {
		// width: 90%;
		margin: 1% auto;
	}
	@media only screen and (min-width: 900px){
		.genre2 {
			width: 42.5%;
			margin: 1%;
			display: inline-grid;
		}
	}
	.event1image {
		background-image: url('http://placehold.it/200/000000/ffffff?text=BLUES');
		background-size: cover;
	}
	.event2image {
		background-image: url('http://placehold.it/200/000000/ffffff?text=BLUES');
		background-size: cover;
	}
	.card-image {
		max-width: 100%;
		margin-bottom: 16px;
	}
  `
  ]
})
export class Genre2Component implements OnInit {

  constructor(private _RouteTitles:RoutesTitles){
    _RouteTitles.name.next('Blues’n In Bronzeville');
  }

  ngOnInit() {
  }

}
