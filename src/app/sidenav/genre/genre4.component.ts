import { Component, OnInit } from '@angular/core';
import { RoutesTitles } from '../../app-routes/app-routes-titles.service';

@Component({
  selector: 'genre4',
  template: `
	<md-card><h1>genre4</h1></md-card>
  `
})
export class Genre4Component implements OnInit {

  constructor(private _RouteTitles:RoutesTitles){
    _RouteTitles.name.next('Folk Music');
  }

  ngOnInit() {
  }

}
