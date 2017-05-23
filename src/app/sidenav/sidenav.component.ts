import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoutesTitles } from '../app-routes/app-routes-titles.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  providers: [RoutesTitles]
})
export class SidenavComponent implements OnInit {

  RoutesTitles = "Events";

  navLinks = [
    {
      name: 'House',
      dates: 'May 25th & 27th',
      link: 'genre1',
      logo: '../assets/sotclogos/icons/SOTC_icons_blue_house.png'
    },
    {
      name: 'Blues',
      dates: 'June 8th',
      link: 'genre2',
      logo: '../assets/sotclogos/icons/SOTC_icons_blue_blues.png'
    },
    {
      name: 'Jazz',
      dates: 'June 30th',
      link: 'genre3',
      logo: '../assets/sotclogos/icons/SOTC_icons_blue_jazz.png'
    },
    {
      name: 'Folk',
      dates: 'July 9th',
      link: 'genre4',
      logo: '../assets/sotclogos/icons/SOTC_icons_blue_folk.png'
    },
    {
      name: 'Gospel',
      dates: 'July 22nd',
      link: 'genre5',
      logo: '../assets/sotclogos/icons/SOTC_icons_blue_gospel.png'
    },
    {
      name: 'Duranguense',
      dates: 'August 5th & 13th',
      link: 'genre6',
      logo: '../assets/sotclogos/icons/SOTC_icons_blue_duranguense.png'
    },
    {
      name: 'Country',
      dates: 'August 20th',
      link: 'genre7',
      logo: '../assets/sotclogos/icons/SOTC_icons_blue_country.png'
    },

  ];


  constructor(private _RoutesTitles: RoutesTitles){
    this._RoutesTitles.name.subscribe(n => this.RoutesTitles = n);
  }

  ngOnInit() {
  }

}
