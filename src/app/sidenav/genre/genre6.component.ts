import { Component, OnInit } from '@angular/core';
import { RoutesTitles } from '../../app-routes/app-routes-titles.service';

@Component({
  selector: 'genre6',
  templateUrl: './genretemplate.component.html',
  styles: [
  `
  	.card-container {
		display: flex !important;
	    flex-wrap: wrap;
	    justify-content: center;
	    align-items: flex-start;
	}
	.genre6 {
		// width: 90%;
		margin: 1% auto;
	}
	@media only screen and (min-width: 900px){
		.genre6 {
			width: 42.5%;
			margin: 1%;
			display: inline-grid;
		}
	}
	.event1image {
		background-image: url('../../assets/sotclogos/icons/SOTC_icons_blue_duranguense.png');
		background-size: cover;
	}
	.event2image {
		background-image: url('../../assets/sotclogos/icons/SOTC_icons_blue_duranguense.png');
		background-size: cover;
	}
	.card-image {
		max-width: 100%;
		margin-bottom: 16px;
	}
  `
  ]
})
export class Genre6Component implements OnInit {
	events = [
		{
			genre: 'genre6',
			title: 'Title TBD',
			admission: 'Free & open to the public',
			location: 'National Museum Of Mexican Art (1852 W. 19th St, 60608)',
			date: 'Saturday, August 5',
			time: '12-4pm',
			image: '../assets/Show Revelación.jpg',
			description: 'Performance from Show Revelación, discussion panel & video presentation from Jose Luis Terrazas &  Ivan Fernandez about the Duranguense movement',
			link: 'http://nationalmuseumofmexicanart.org/',
		},
		{
			genre: 'genre6',
			title: 'Rise Of Duranguense Music At Harrison Park',
			admission: 'Free & open to the public, Rain or Shine',
			location: 'Harrison Park (1824 S. Wood St.)',
			date: 'Sunday, August 13',
			time: '2-6pm',
			image: '../assets/NZA.jpg',
			description: '',
			link: '',
			tabs: [
				{	
					tabname: 'Essay',
					title: 'Duranguense: The Sound of Mexican Chicago that Was Heard Around the World',
					image: '../assets/Montez2017-2.jpg',
					content: `
						<p>Catalina Maria Johnson</p>

						<p>“I have to tell people in Durango all the time, ‘No!, your grandparents did not dance the pasito duranguense! Duranguense was born in Chicago!”, exclaims José Luis Terrazas. Terrazas, is the founder of Montez de Durango, the first band to gain world-wide renown for a style of music known as duranguense, i.e., “from Durango”. And despite a name that seems to bely origins in that northern state, duranguense is one Chicago’s own home-brewed sounds. 
						</p>
						<p>
						Along with its accompanying dance, the pasito duranguense (literally, “little step from Durango”), this style of music took the United States and then Mexico by storm in the mid-nineties. Up until that point, most U.S.born Spanish-language music had come from San Antonio, Miami, New York or Los Angeles. But duranguense, born in Chicago and inspired by Durango, rose meteorically from the mid-nineties to hold as many as five of the top 10 spots on Billboard's Latin charts just a decade later. Most importantly, it was not a music that emigrated from Mexico and then took roots in the U.S., but rather, emerged on this side of the Rio Grande and found its way back, always addressing audiences on both sides of the border.
						</p>
						<p>
						Chicago’s connection to Durango came about early in the 20th century, according to Durango historian Javier Guerrero, when Midwestern railroad companies recruited workers who were highly experienced in laying track in a state that had seen the most railroad development in Mexico at that time. 
						</p>
						<p>
						As a Chicago-born cultural production, duranguense emerged in a fusion of extremely local and more global sounds, as well as a bridge between tradition and modernity. On the musical side, the genre evoked three other older Mexican genres: banda, which was military-band inspired wind ensemble music, norteño, accordion-based polka-heavy tunes that evolved both north and south of the border and grupero, an 80’s sound that also was influenced in rock and cumbia - all of these in and of themselves, hybrid styles that had successfully bridged past and present, as well as rural and urban Mexico.
						</p>
						<p>
						Duranguense, however, marked a turning point for Mexican American music when it became the first genre born on the northern side of the border to become extremely popular all over Mexico.  It was a young people’s music, bringing them back in touch with the roots of the traditional music of their parents and grandparents. 
						</p>
						<p>
						It all started in the mid-nineties, when the seminal Montéz de Durango was formed by Terrazas. Terrazas, who was born in Durango, grew up in Chicago and was a percussionist in his high school marching band. Montez de Durango was the first to exploit what came to be the signature sound of duranguense: bringing together sounds produced by the drum called the tambora and its big, big sound, or tamborazo, adding a hefty dose of brass sounds (especially from the tuba), and either a melodeon or an electronic keyboard. Like many other regional Mexican musics, duranguense’s up-tempo beats also built upon on European polkas, schottisches, and waltzes.  But more than anything, duranguense sped everything up, taking the most beloved traditional elements of regional Mexican music and putting them on steroids.
						</p>
						<p>
						Montez de Durango rose to fame with "Camino a Tepehuanes" ("Road to Tepehuanes") a song that expressed deep nostalgia as the singer returns to the mountaintop town of Tepehuanes, Durango after many years away. Similarly to “Camino a Tepehuanes”, many duranguense songs describe the immigrant lifestyle and its hardships, such as these Montez de Durango songs about leaving your son or father behind in Mexico.
						</p>
						<p>
						Adding to the transnational quality of the music, many duranguense songs use Mexican agrarian imagery juxtaposed with city life as their backdrops, drawing upon both identities. Also popular in duranguense are corridos, epic songs about heroes and outlaws. As many of the musics of Northern Mexico, outlaw songs may make subtle references to the drug trade, but Terrazas comments that Montez de Durango largely avoided that scene in the band’s music.
						</p>
						<p>
						Another one of the notable characteristics of duranguense is its reliance on covers, which no doubt adds to its power to bridge an idealized past to a more difficult present. Terrazas describes how the band began to play reinvented versions of songs from favorite Durango bands such as Patrulla 81. For example, here’s a highly popular Patrulla 31 tune, “Vengo a Buscarte” which in comparison Montez de Durango’s version, loses some sweetness but gains a jauntier, polka-ish edge.  
						</p>
						<p>
						Duranguense also has a characteristic ‘look’, a style worn by band members and audience members. This includes the classic hat (known as a taco hat because of its upturned edges) accompanied by Western-wear such as colorful, chunky buckle belts and cowboy boots. Finally, the pasito duranguense, the dance that accompanies the music was also popularized by Montez de Durango with a polka of the same name composed by the band’s vocalist at the time.
						</p>
						<p>
						The band’s first two albums were a decisive moment for the commercialization of the genre as it put duranguense on the map of Latin american music.  Local Chicago bands playing cotillions, weddings, and rodeos soon incorporated the duranguense sound. Fast forward about a decade, and in August of 2004, Montez de Durango played before an audience of 50,000 at the Viva Chicago festival and received special recognition by Mayor Daley. 
						</p>
						<p>
						Terrazas founded his own Terrazas Records label and the band now has recorded more than two dozen albums. Although much of their fan base is Mexican and in the Mexican diaspora from Arizona to Alaska, the band has enormous followings in different parts of the world,  and not long ago toured Canada and Central America.
						</p>
						<p>
						Montez de Durango also opened the doors to fame for other Chicago bands such as Alacranes Musical y Los Horóscopos de Durango. The latter band, fronted by Vicky and Marisol Terrazas, became the first regional Mexican music band to be fronted by women. Horoscopos has always innovated duranguense in many ways, even covering Cindy Lauper's "Girls Just Want to Have Fun" in a Spanish and English Duranguense version.
						</p>
						<p>
						Although its massive craze-level popularity was short-lived, duranguense remains one of the staple sounds of the bi-national reality of the Latin diaspora, with a widespread following of Central American as well as Mexican and Mexican-American fans. Younger generations in the U.S. still love dancing to this genre that honors the cultural ties of their parents without losing sight of their American experience. 
						</p>
						<p>
						The predominance of covers in most bands’ repertoires, sometimes noted critically, is actually a sign of duranguense’s power and magic, connecting younger people to their past through these well-known, cherished songs. Yet at the same time, duranguense encourages a contemporary dance step with an intertwined embrace, and witnesses the accelerated pace of today’s society. Duranguense may harken back to earlier, simpler times, but it was the Chicago touch that made the tradition sexy, fast and modern.
						</p>
						`
				}
			]
		}
	]
	
  constructor(private _RouteTitles:RoutesTitles){
    _RouteTitles.name.next('Rise Of Duranguense Music');
  }

  ngOnInit() {
  }

}
