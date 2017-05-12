import { Component, OnInit } from '@angular/core';
import { RoutesTitles } from '../../app-routes/app-routes-titles.service';

@Component({
  selector: 'genre3',
  templateUrl: './genre3.component.html',
  styles: [
  `
  	.genre3 {
		margin: 1% auto;
		max-width: 700px;
	}
	.event1image {
		background-image: url('http://placehold.it/200/000000/ffffff?text=JAZZ');
		background-size: cover;
	}
	.card-image {
		max-width: 100%;
		margin-bottom: 16px;
	}
  `
  ]
})
export class Genre3Component implements OnInit {

  constructor(private _RouteTitles:RoutesTitles){
    _RouteTitles.name.next('Chicago Jazz');
  }

  ngOnInit() {
  }

}
