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
	}
	md-grid-tile {
		margin: 1% auto;
	}
	`
	]
})
export class PlaceholderComponent implements OnInit {
	row1 = [
    {text: 'One', cols: 2, rows: 2, color: '#666'},
    {text: 'Two', cols: 2, rows: 2, color: '#555'},
    {text: 'Three', cols: 2, rows: 2, color: '#444'},
    {text: 'Four', cols: 2, rows: 2, color: '#333'}
  ];
  row2 = [
    {text: 'Five', cols: 2, rows: 2, color: '#999'},
    {text: 'Six', cols: 2, rows: 2, color: '#888'},
    {text: 'Seven', cols: 2, rows: 2, color: '#777'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
