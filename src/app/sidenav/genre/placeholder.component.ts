import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'placeholder',
  templateUrl: './placeholder.component.html',
  styles: [
	`.placeholder {
  	margin-top: 10px;
	text-align: center;
	}
	.placeholder img {
		max-width: 300px;
	}
	md-card img {
	width: 100%;
	}`
	]
})
export class PlaceholderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
