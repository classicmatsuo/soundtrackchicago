import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'genre1',
  templateUrl: './genre1.component.html',
  styles: [
  `
  md-card {
		display: inline-grid;
	}
	.genre1 {
		width: 45%;
	}
	@media only screen and (max-width: 768px){
		.genre1 {
			width: 92%;
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
  `
  ]
})
export class Genre1Component implements OnInit {
	title = 'stuff';
  constructor() { }

  ngOnInit() {
  }

}
