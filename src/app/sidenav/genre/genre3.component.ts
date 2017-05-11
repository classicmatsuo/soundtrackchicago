import { Component, OnInit } from '@angular/core';
import { RoutesTitles } from '../../app-routes/app-routes-titles.service';

@Component({
  selector: 'genre3',
  template: `
	<md-card><h1>genre3</h1></md-card>
  `
})
export class Genre3Component implements OnInit {

  constructor(private _RouteTitles:RoutesTitles){
    _RouteTitles.name.next('Chicago Jazz');
  }

  ngOnInit() {
  }

}
