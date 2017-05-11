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
  constructor(private _RoutesTitles: RoutesTitles){
    this._RoutesTitles.name.subscribe(n => this.RoutesTitles = n);
  }

  ngOnInit() {
  }

}
