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

  RoutesTitles = "Soundtrack of Chicago";

  navLinks = [
    {
      name: 'House',
      dates: 'May 25th & 27th',
      link: 'genre1'
    },
    {
      name: 'Blues',
      dates: 'June 8th',
      link: 'genre2'
    },
    {
      name: 'Jazz',
      dates: 'June 30th',
      link: 'genre3'
    },
    {
      name: 'Folk',
      dates: 'July 9th',
      link: 'genre4'
    },
    {
      name: 'Gospel',
      dates: 'July 22nd',
      link: 'genre5'
    },
    {
      name: 'Duranguense',
      dates: 'August 5th',
      link: 'genre6'
    },
    {
      name: 'Country',
      dates: 'August 20th',
      link: 'genre7'
    },

  ];


  constructor(private _RoutesTitles: RoutesTitles){
    this._RoutesTitles.name.subscribe(n => this.RoutesTitles = n);
  }

  ngOnInit() {
  }

}
