import { Component, OnInit } from '@angular/core';
import { RoutesTitles } from '../../app-routes/app-routes-titles.service';

@Component({
  selector: 'genre7',
  template: `
	<md-card><h1>genre7</h1></md-card>
  `
})
export class Genre7Component implements OnInit {

  constructor(private _RouteTitles:RoutesTitles){
    _RouteTitles.name.next('Country Music in Chicago');
  }

  ngOnInit() {
  }

}
