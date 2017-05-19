import { Component, OnInit } from '@angular/core';
import { AgmCoreModule, AgmMap, AgmMarker } from '@agm/core';
// import { ActivatedRoute }       from '@angular/router';
// import { Observable }           from 'rxjs/Observable';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	zoom: number = 16;
	lat: number = 41.964216;
	lng: number = -87.686021;
	
  constructor() { }

  ngOnInit() {
  }

}
