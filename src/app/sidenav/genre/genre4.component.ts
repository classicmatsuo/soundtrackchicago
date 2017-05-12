import { Component, OnInit } from '@angular/core';
import { RoutesTitles } from '../../app-routes/app-routes-titles.service';

@Component({
  selector: 'genre4',
  templateUrl: './genre4.component.html',
  styles: [
  `
  	.genre4 {
		margin: 1% auto;
		max-width: 700px;
	}
	.event1image {
		background-image: url('http://placehold.it/200/000000/ffffff?text=FOLK');
		background-size: cover;
	}
	.card-image {
		max-width: 100%;
		margin-bottom: 16px;
	}
  `
  ]
})
export class Genre4Component implements OnInit {

  constructor(private _RouteTitles:RoutesTitles){
    _RouteTitles.name.next('Folk Music');
  }

  ngOnInit() {
  }

}
