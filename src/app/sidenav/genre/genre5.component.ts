import { Component, OnInit } from '@angular/core';
import { RoutesTitles } from '../../app-routes/app-routes-titles.service';

@Component({
  selector: 'genre5',
  template: `
	<md-card><h1>genre5</h1></md-card>
  `
})
export class Genre5Component implements OnInit {

  constructor(private _RouteTitles:RoutesTitles){
    _RouteTitles.name.next('Gospel & The Freedom Trail');
  }

  ngOnInit() {
  }

}
