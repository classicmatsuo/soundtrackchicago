import { Component, OnInit } from '@angular/core';
import { RoutesTitles } from '../../app-routes/app-routes-titles.service';

@Component({
  selector: 'genre1',
  templateUrl: './genre1.component.html',
  styles: [
  `
  	md-card {
		margin: 1% auto;
	}
	.genre1-full {
		max-width: 700px;
		margin: 1% auto;
	}
	.genre1 {
		width: 92%;
		margin: 1% auto;
	}
	@media only screen and (min-width: 768px){
		md-card {
			margin: 1%;
		}
		.genre1 {
			width: 40%;
			margin: auto;
			display: inline-grid;
		}
	}
	.mainevent1 .event1image {
		background-image: url('../assets/mdm.jpg');
		background-size: cover;
	}
	.mainevent2 .event1image {
		background-image: url('http://placehold.it/200/000000/ffffff?text=CHLP');
		background-size: cover;
	}
	.mainevent2 .event2image {
		background-image: url('http://placehold.it/200/000000/ffffff?text=CHLP');
		background-size: cover;
	}
	.lead {
		display: block;
		color: #555;
	}
	.event-container {
		max-width: 700px;
		margin: 0 auto;
	}
	.card-image {
		max-width: 100%;
		margin-bottom: 16px;
	}
	h2 {
		font-family: 'Roboto Condensed', sans-serif;
	}
  `
  ]
})
export class Genre1Component implements OnInit {
	mainevents = [
		{
			title: 'House Music Conference',
			description: `The Chicago Department of Cultural Affairs and Special Events will host a House Music Conference on Thursday, May 25 and Friday, May 26 at the Chicago Cultural Center for musicians, DJs and industry participants. Admission to the conference is free, and registration is not required. Full schedule available <a href="https://www.cityofchicago.org/city/en/depts/dca/supp_info/house_music.html" target="_blank">here</a>`,
			events: [
		    {
		      genre: 'genre1-full',
		      title: 'Panel Discussion: Cultivating The Next Generation Of Practitioners',
		      lead: '',
		      admission: 'Free & open to the public',
		      location: 'Chicago Cultural Center, Claudia Cassidy Theater (2nd Floor North)',
		      date: 'Thursday, May 25',
		      time: '6:00PM',
		      image: '../assets/mdm.jpg',
		      description: `
		      	<p>This panel, moderated by Lauren Lowery, will look back at the history of the scene, ongoing gender inequality, evolving technologies, and industry trends to inform the possible future of House Music as a cultural practice. How are new generations accessing historical knowledge? What are the pioneers of the past, as well as present House Music successors doing to support and cultivate a new generation of practitioner today? It is presented in collaboration with Old Town School of Folk Music’s Soundtrack of the City. </p>
		      	<p>
		      		View the <a href="https://www.cityofchicago.org/city/en/depts/dca/supp_info/house_music.html" target="_blank">full schedule</a> of panels and workshops for House Music Conference on Thursday, May 25 and Friday, May 26
		      	</p>
	      	`,
		      link: ''
		    }
		  ]
		},
		{
			title: 'Chicago House Legacy Project',
			description: 'Throughout the day, DJs and live performances will showcase the various sounds and styles of house music, the musical form born in Chicago that has gone on to revolutionize dance music internationally. ',
			events: [
		    {
		      genre: 'genre1',
		      title: 'House Dance Workshop with Boogie McClarin',
		      lead: '',
		      admission: 'Free & open to the public',
		      location: 'Millennium Park - North Chase Promenade Tent',
		      date: 'Saturday, May 27',
		      time: '2pm - 2:45pm',
		      image: 'http://placehold.it/700x200/000000/ffffff?text=HOUSE DANCE',
		      description: `<p>Boogie McClarin guides an exploration of movement history, concepts, approaches and social dance practices that accompany the global phenomenon born of Chicago's rich heritage - House Music and Dance Culture.</p>`,
		      link: ''
		    },
		    {
		      genre: 'genre1',
		      title: 'Chicago House Legacy Project',
		      lead: '',
		      admission: '',
		      location: 'Millennium Park - Jay Pritzker Pavilion',
		      date: 'Saturday, May 27',
		      time: '6:45pm - 8pm',
		      image: '../../assets/Jerry C. King2.jpg',
		      description:'',
		      link: '',
		      tabs: [
		      	{  
		          tabname: 'About',
		          title: 'Chicago House Legacy Project (featuring special guests) - With Introduction from Old Town School’s Kim Davis',
		          image: '',
		          content: `
				      <p>
				      	Chicago House Legacy Project is a DCASE commissioned band led by musical director Jerry C. King. The project performs classic Chicago House Music hits live using new arrangements and often including the original singers and musicians of those seminal songs. Apart from the classics, the project also looks to develop new emerging talent and write new music to release and debut live at the Chicago House Party event.  
		          </p>
		          <p>
		            The ensemble consists of: Jerry C. King (Musical Director/Keys), Steve “Miggedy” Maestro (DJ/ 106.3/Assistant Musical Director), Day Rock (Bass), Chuck Lacy (drums), Duane "Rude" Jones (guitar), Gus Lacy (keys), Phillip Glover (2nd drum), Sam Eli Glover (2nd bass).
		          </p>
		          <p>
		            Featured artists lineup: Billy Monroe, Faith Howard with dancers Faith Rebecca &amp; Sarah Lloyd, Jameisha Trice, Andrea Love, Dawn Williams, Gus Lacy, Carla Prather, Lorenzo Owens, Kennedy Simone, with special guest performance by Curtis Mcclain and Ivelisse Diaz.
		          </p>
		          <p>
		            Background Vocalists include: Melody Cowan, K'mar, Bernetta Donalson, and Robert Townsend, with special background vocalists modifier Tommy Thumbs "E.S.P."
		          </p>
		          <p>
		            Hosted by: Dana Devine, Kim Jay, and Lady Laronda Maestro
		          </p>
		          <p>
		            <a href='https://www.cityofchicago.org/city/en/depts/dca/supp_info/hlp.html' target='_blank'>Full schedule &amp; lineup</a> 
		          </p>
		         `
		        },
		        {  
		          tabname: 'Essay',
		          title: 'Chicago House',
		          image: '../assets/mdm.jpg',
		          content: `
		          	<h5>Lauren Lowery<br>Co-Founder and Chief Archivist, Dance Music Archive<br>
								housemusicarchive.org</h5>
			          <p>
			          	House Music is a Chicago born musical art form that combines electronically-generated sounds, vocals and samples from genres such as jazz, blues, disco and gospel; which when added to the foundation of the drum beat and synth bass line has become a global juggernaut.  This spiritual force was birthed in Chicago’s underground music scene in the late 70’s and early 80’s in the iconic club The Warehouse. The music brought together cultures, races, ages and alternative orientations like no other medium of that day.
			          </p>
								<p>
									The story of the House Music in Chicago is not short, nevertheless this summary pays homage to the pioneers both dead and alive and the great Chicago institutions that nurtured the genres rise, aided in its fall and supported its resurgence.
								</p>
								<p>
									Black Music Past shapes Chicago’s Black Music Future
								</p>
								<p>
									The sounds of Soul Music from artists like James Brown took a turn in 1967 to a “four-on-the-floor” rhythm that led to the birth of funk, R&B and disco. By the mid 70’s, European influences using electronic sounds from the German group Kraftwerk and disco hit’s including “I Feel Love” from Donna Summer and Giorgio Moroder changed the city and the country’s tone from Civil Rights to Human Rights and the music followed suit.
								</p>
								<p>
									Chicago “House Music” was aptly named for the underground members-only gay club The Warehouse located at 208 South Jefferson. Owner and Businessman Robert Williams arrived from New York City to Chicago and brought the legendary Frankie Knuckles to create a powerful sound-system-fueled dance music scene at what was then an almost empty three story West Loop warehouse. The demise of American disco, a decidedly Black, Gay and Drug associated music form, created an opportunity for those alternative communities to build a new sound and a new era of collaboration. 
								</p>
								<p>
									Chicago House Music Desegregates
								</p>
								<p>
									DJ Frankie Knuckles was a Chicago area superstar when the Warehouse closed in 1982. By 1983, the election of Chicago’s first Black Mayor, Harold Washington created an energy and optimism in Chicago’s youth and alternative communities. Mr. Williams opened a new club The Music Box and in 1983 Frankie took his fame and followers to his own club the Powerplant at 1015 North Halsted.  Like the Warehouse, these Chicago addresses in the late 70’s and early 80’s were industrial, dark and empty, under-the-radar and perfect for after-hour events. These clubs and the sounds that emerged brought teens and twenty-something straight kids together with Black, Gay, Latino and White adults all immersed in lyrics that suggested they should “Bring Down the Walls” and “Brighter Days” were to come. More explicit content included in songs like “Baby Wants to Ride” and “Waiting on My Angel” unified the DJ and dancers in spirit and in movement. The songs were hopeful as was the era. Gays were open and free in a space where straights did not judge, stare or become violent. Blacks, Whites, Asians and Hispanics became one with the music and in-turn created an atmosphere where unity was bigger than difference.
								</p>
								<p>
									The Chicago DJ Becomes the Star
								</p>
								<p>
									Chicago area superstars included DJ Ron Hardy, the resident DJ at the new club the Music Box on 16th & South Indiana, the DJ’s of Chicago radio station WBMX’s Hot Mix 5 including Farley “JackMaster” Funk, Mickey "Mixin" Oliver, Ralphi Rosario, Kenny "Jammin" Jason, and Scott "Smokin" Silz, the creator of the House Music Anthem “Move Your Body” DJ/producer Marshall Jefferson, the House group Fingers Inc. which included DJ and producer Larry Heard, vocalist Robert Owens “Mystery of Love”, DJ Jesse Saunders and Musician Vince Lawrence who pressed the first vinyl House Music record “On and On” in 1984 , vocalist and producer Jamie Principle and DJ/artist/producer Steve “Silk” Hurley whose 1986 hit “Jack Your Body” became the first Chicago House Music artist to have a song hit number one on the UK charts. The DJs used turntables and beat machines including the iconic Roland 808 to launch music careers that many of these ordinary Chicagoans could never have imagined.
								</p>
								<p>
									Chicago House Music though made popular by the early DJs was largely driven into the communities by the radio stations, record stores and teenage word of mouth. Frankie Knuckles and Ron Hardy’s sounds influenced teenagers at Chicago area high schools including Kenwood Academy in Hyde Park - 5015 South Blackstone Avenue, Lindblom Technical in Englewood - 6130 South Wolcott Ave. and Mendel Catholic in Roseland - 111th St & S King Drive. The talent and creativity from South and West Side youth became evident as basement beats led to the brilliance of teenage DJs, vocalists and producers including Kim Salter (K/Joy) “Like This” - Kenwood Academy, Producer/Filmmaker Irwin Eberhart (Chip E.) “If You Only Knew” - Kenwood Academy, heralded female DJ Lori Branch - Lindblom Technical and West Side DJ phenom Gene Hunt - Farragut High. Mendel Catholic High School has a special place in House Music History in that its Mendel Bi-Level parties held from 1976 to 1988 launched the careers of many now heralded House Music DJ’s. Thousands of kids from around the city travelled to Mendel to dance to House Music for over a decade. The founder and producer of the event, Kirkland Townsend who raised millions of dollars for his alma mater, later became the business manager for the legendary DJ Collective “The Chosen Few’s” DJ Jesse Saunders and DJ Wayne Williams and later a radio personality in New York City. 
								</p>
								<p>
									Chicago Supports its New Industry
								</p>
								<p>
									Chicago area radio stations, record stores and record labels including Trax Records (using the old Chess Records pressing equipment) and DJ International were also instrumental in bringing House Music to Chicago area youth. The high powered WBMX 102.7FM in Chicago was the first to highlight Chicago House Music prominently in its weekly rotation. Rarely heralded yet critical marketing for DJ’s, promoters and producers were Chicago’s College radio stations including WNUR 89.3FM, Northwestern University’s Streetbeat show which began highlighting House and Hip Hop Music to the north shore and north suburbs in 1983, WHPK 88.5FM University of Chicago’s radio station and WKKC 89.3FM, Kennedy King Community College’s evening show whose signal reached the south side neighborhoods. WNUR’s T. Chablis (Tim Harris) and WKKC’s PinkHouse became important Chicago area radio personalities by creating events and collaborating with artists. Record stores including Importes Etc. (711 South Dearborn), Wax Trax, Loop Records and Gramaphone Records on the north side are credited with shortening the name of the club The Warehouse, to music heard at “The House,” creating a DJ culture that sold millions of vinyl records throughout Chicago.
								</p>
								<p>
									1988 House Music Party Promotion Poster | Courtesy of @DanceMusicFound – Gene Hunt Collection
								</p>
								<p>
									Chicago’s small venues and clubs including the Playground in Chicago’s South Loop, Jeffery Pub in South Shore (one of the longest running gay clubs in the country) C.O.D’s and AKA’s in Rogers Park the Hyde Park Athletic Club, and many others that have come and gone kept the music alive over the years. The late 80’s and 90’s saw increasing attacks on the underground music scene which was the backbone of the genre. The AIDS epidemic, coupled with dance music drug culture unfortunately ended the lives of many talented artists. Finally, in 2000, Chicago’s City Council enacted an ordinance banning unlicensed dance parties which slowly silenced DJs and promoters forcing them to find new opportunities across the country. Thanks to the overseas success of DJ Frankie Knuckles and the proliferation of cassette tapes, increasing technology, over and under-the-table label deals by label owners Rocky Jones and their representatives including Attorney Jay B. Ross, House Music exploded in Europe providing gigs as artists, executives and remixers.
								</p>
								<p>
									April 2000 Chicago City Council Anti-Rave Ordinance | Courtesy of @DanceMusicFound
								</p>
								<p>
								Chicago politics and Chicago’s mostly segregated neighborhoods shaped how House Music flourished, exploded overseas, then died in its neighborhoods. The proliferation of digital and emerging electronic mediums has catapulted House Music from its Chicago roots into a global power influencing dance, fashion and media. Chicagoans have mastered the genre winning Grammy’s and chart topping hits with international artists including Michael Jackson and most recently Kanye West. Unlike early Chicago culture, in the House Music era, sexuality and heritage were not a deterrent to creativity and learning. This ideology and its transformative muscle has thrust House Music to its current massive pop presence and will undoubtedly continue to drive its future.
		         	`
		        }
		      ]
		    }
		  ]
		}
  ]
  constructor(private _RouteTitles:RoutesTitles){
    _RouteTitles.name.next('Chicago House Legacy Project');
  }

  ngOnInit() {
  }

}
