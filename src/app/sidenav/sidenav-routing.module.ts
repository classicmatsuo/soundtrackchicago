import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlaceholderComponent }  from './genre/placeholder.component';
import { SidenavComponent }  from './sidenav.component';
import { Genre1Component }  from './genre/genre1.component';
import { Genre2Component }  from './genre/genre2.component';
import { Genre3Component }  from './genre/genre3.component';
import { Genre4Component }  from './genre/genre4.component';
import { Genre5Component }  from './genre/genre5.component';
import { Genre6Component }  from './genre/genre6.component';


const genreRoutes: Routes = [
	{ path: 'home', component: SidenavComponent,
    children: [
    	{ path: 'genre1', component: Genre1Component },
    	{ path: 'genre2', component: Genre2Component },
    	{ path: 'genre3', component: Genre3Component },
    	{ path: 'genre4', component: Genre4Component },
    	{ path: 'genre5', component: Genre5Component },
    	{ path: 'genre6', component: Genre6Component },
      { path: '', component: PlaceholderComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(genreRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SidenavRoutingModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/