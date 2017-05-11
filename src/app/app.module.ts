import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SponsorsComponent } from './sponsors/sponsors.component';

import { SidenavModule } from './sidenav/sidenav.module';
import { AppRoutesModule } from './app-routes/app-routes.module';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    SponsorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NoopAnimationsModule,
    MaterialModule,
    AppRoutesModule,
    // RouterTestingModule,
    RouterModule,
    SidenavModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8MOXk3cul6kap2Lgf9eg7lcM1ZMJ27rY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
