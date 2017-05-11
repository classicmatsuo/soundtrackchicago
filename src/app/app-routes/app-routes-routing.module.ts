import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SidenavComponent } from '../sidenav/sidenav.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { SponsorsComponent } from '../sponsors/sponsors.component';

import { PlaceholderComponent }  from '../sidenav/genre/placeholder.component';


const routes: Routes = [
	{ path: 'home', component: SidenavComponent,
		children: [
			{ path: '', component: PlaceholderComponent }
		]
	},
	{ path: 'about', component: AboutComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'sponsors', component: SponsorsComponent },

	{ path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutesRoutingModule {}
