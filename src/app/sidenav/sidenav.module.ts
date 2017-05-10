import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { SidenavRoutingModule } from './sidenav-routing.module';
import { MaterialModule } from '@angular/material';

import { PlaceholderComponent }    from './genre/placeholder.component';
import { Genre1Component }  from './genre/genre1.component';
import { Genre2Component }  from './genre/genre2.component';
import { Genre3Component }  from './genre/genre3.component';
import { Genre4Component }  from './genre/genre4.component';
import { Genre5Component }  from './genre/genre5.component';
import { Genre6Component }  from './genre/genre6.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SidenavRoutingModule,
    MaterialModule
  ],
  declarations: [
    PlaceholderComponent,
    Genre1Component,
    Genre2Component,
    Genre3Component,
    Genre4Component,
    Genre5Component,
    Genre6Component,
  ],
  providers: [ ]
})
export class SidenavModule {}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/