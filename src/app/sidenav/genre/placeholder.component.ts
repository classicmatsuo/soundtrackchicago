import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'placeholder',
  templateUrl: './placeholder.component.html',
  styles: [
  `
  .genre-list {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .genre-list:after {
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    background: url("../../../assets/SOTC_HomepagePlaceholder_051717.png") no-repeat fixed center;
    background-size: 400px;
    opacity: 0.15;
  }
  .genre {
    margin: 20px;
    width: 260px;
    display: inline-grid;
    cursor: pointer;
    background-color:rgba(250, 250, 250, 0.5);
  }
  .card-image {
    max-width: 100%;
    margin-bottom: 16px;
  }
  .placeholder {
    text-align: center;
  }
  .placeholder img {
    max-width: 100%;
    width: 400px;
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
