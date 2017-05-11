import { Component, OnInit } from '@angular/core';
import { RoutesTitles } from '../../app-routes/app-routes-titles.service';

@Component({
  selector: 'genre1',
  templateUrl: './genre1.component.html',
  styles: [
  `
  md-card {
		margin: 1%;
	}
	.genre1 {
		width: 40%;
		margin: 2%;
		display: inline-grid;
	}
	@media only screen and (max-width: 768px){
		.genre1 {
			width: 90%;
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
