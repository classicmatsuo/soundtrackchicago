import { Component, OnInit } from '@angular/core';
import { RoutesTitles } from '../../app-routes/app-routes-titles.service';

@Component({
  selector: 'genre6',
  template: `
	<md-card><h1>genre6</h1></md-card>
  `
})
export class Genre6Component implements OnInit {

  constructor(private _RouteTitles:RoutesTitles){
    _RouteTitles.name.next('Rise Of Duranguense Music');
  }

  ngOnInit() {
  }

}
