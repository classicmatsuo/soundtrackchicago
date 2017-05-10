import { Component, OnInit } from '@angular/core';
import { AgmCoreModule, AgmMap, AgmMarker } from '@agm/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	zoom: number = 16;
	lat: number = 41.964216;
	lng: number = -87.686021;

  constructor() { }

  ngOnInit() {

  }

}
