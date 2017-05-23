import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'placeholder',
  templateUrl: './placeholder.component.html',
  styles: [
  `
  .genre-list {
    padding: 1%;
    margin: 0 auto;
    text-align: center;
  }
  // .genre-list:after {
  //   content: "";
  //   top: 0;
  //   left: 0;
  //   bottom: 0;
  //   right: 0;
  //   position: absolute;
  //   z-index: -1;
  //   background: url("../../../assets/SOTC_HomepagePlaceholder_051717.png") no-repeat fixed center;
  //   background-size: 400px;
  //   opacity: 0.15;
  // }
  .genre {
    margin: 2px;
    width: 23%;
    cursor: pointer;
    background: #528ec7;
    color: #fff;
    padding: 20px 5px;
    text-align: center;
    display: inline-block;
    // height: 150px;
    vertical-align: top;
  }
  .genre:last-child {
    background: #00b8bc;
  }
  .genre:last-child:hover {
    background: #019598;
  }
  .genre:last-child h4 {
    margin: 5px 0 3px 0;
    text-transform: none;
    letter-spacing: 0.0rem;
    line-height: 1.3rem;
  }
  .genre h4 {
    margin: 5px 0 3px 0;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }
  @media only screen and (max-width: 480px) {
    .genre h4 {
      font-size: 12px;
    }
    .genre {
      width: 45%;
    }
    .genre:last-child h4 {
      margin: 3px 0 3px 0;
    }
  }
  .genre:hover {
    background: #487cab;
  }
  .genre:last-child h4,
  .genre span {
    font-weight: 300;
    font-size: 0.75rem;
  }
  .card-image {
    max-width: 70%;
  }
  .placeholder {
    text-align: center;
    padding: 0;
  }
  .placeholder img {
    max-width: 100%;
    width: 800px;
  }
  .placeholder md-card-content {
    background: #00b8bc;
  }
  .placeholder h1 {
    color: #fff;
    padding: 20px 0px;
  }
	`
	]
})
export class PlaceholderComponent implements OnInit {
	genres = [
    {
      name: 'House',
      description: 'May 25 & 27',
      image: '../../assets/sotclogos/icons/SOTC_icons_house.png',
      link: 'genre1'
    },
    {
      name: 'Blues',
      description: 'June 8',
      image: '../../assets/sotclogos/icons/SOTC_icons_blues.png',
      link: 'genre2'
    },
    {
      name: 'Jazz',
      description: 'June 30',
      image: '../../assets/sotclogos/icons/SOTC_icons_jazz.png',
      link: 'genre3'
    },
    {
      name: 'Folk',
      description: 'July 9',
      image: '../../assets/sotclogos/icons/SOTC_icons_folk.png',
      link: 'genre4'
    },
    {
      name: 'Gospel',
      description: 'July 22',
      image: '../../assets/sotclogos/icons/SOTC_icons_gospel.png',
      link: 'genre5'
    },
    {
      name: 'Duranguense',
      description: 'August 5',
      image: '../../assets/sotclogos/icons/SOTC_icons_duranguense.png',
      link: 'genre6'
    },
    {
      name: 'Country',
      description: 'August 20',
      image: '../../assets/sotclogos/icons/SOTC_icons_country.png',
      link: 'genre7'
    },
    {
      name: 'Learn more about',
      description: 'Soundtrack of the City',
      image: '../../assets/sotclogos/icons/SOTC_icons_OTSFM.png',
      link: '../about'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
