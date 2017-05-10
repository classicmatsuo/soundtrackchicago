import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
	foods: any[] = [
	    {name: 'Pizza', rating: 'Excellent'},
	    {name: 'Burritos', rating: 'Great'},
	    {name: 'French fries', rating: 'Pretty good'},
	  ];
  title = 'Soundtrack Chicago';
  constructor() { }

  ngOnInit() {
  }

}
