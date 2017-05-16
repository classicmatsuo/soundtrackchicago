import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'placeholder',
  templateUrl: './placeholder.component.html',
  styles: [
  `
  .genre-list {
    padding: 20px;
  }
   md-card {
    margin: 20px;
    width: 260px;
    display: inline-grid;
    cursor: pointer;
  }
  .card-image {
    max-width: 100%;
    margin-bottom: 16px;
  }
	`
	]
})
export class PlaceholderComponent implements OnInit {
	genres = [
    {
      name: 'House',
      description: 'House Music Conference, Chicago House Legacy Project',
      image: '',
      link: 'genre1'
    },
    {
      name: 'Blues',
      description: 'Blues’n In Bronzeville, We Bring You Bronzeville',
      image: '',
      link: 'genre2'
    },
    {
      name: 'Jazz',
      description: 'Reginald Robinson, Dee Alexander Quartet',
      image: '',
      link: 'genre3'
    },
    {
      name: 'Folk',
      description: 'Folk Music - Chicago’s Legacy',
      image: '',
      link: 'genre4'
    },
    {
      name: 'Gospel',
      description: 'Gospel & The Freedom Trail',
      image: '',
      link: 'genre5'
    },
    {
      name: 'Duranguense',
      description: 'Title TBD, Rise Of Duranguense Music At Harrison Park',
      image: '',
      link: 'genre6'
    },
    {
      name: 'Country',
      description: 'Title TBD',
      image: '',
      link: 'genre7'
    },

  ];
  constructor() { }

  ngOnInit() {
  }

}
