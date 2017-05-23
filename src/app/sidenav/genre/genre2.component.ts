import { Component, OnInit } from '@angular/core';
import { RoutesTitles } from '../../app-routes/app-routes-titles.service';

@Component({
  selector: 'genre2',
  templateUrl: './genretemplate.component.html',
  styles: [
  `
  .card-container {
    display: flex !important;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }
	.genre2 {
		// width: 90%;
		margin: 1% auto;
	}
	@media only screen and (min-width: 900px){
		.genre2 {
			width: 42.5%;
			margin: 1%;
			display: inline-grid;
		}
	}
	.event1image {
		background-image: url('../../assets/sotclogos/icons/SOTC_icons_blue_blues.png');
		background-size: cover;
	}
	.event2image {
		background-image: url('../../assets/sotclogos/icons/SOTC_icons_blue_blues.png');
		background-size: cover;
	}
	.card-image {
		max-width: 100%;
		margin-bottom: 16px;
	}
  `
  ]
})
export class Genre2Component implements OnInit {
  
	events = [
    {
      genre: 'genre2',
      title: 'Blues’n In Bronzeville',
      lead: 'In partnership with Night Out In The Parks, presented by the Chicago Park District',
      admission: 'Free & open to the public',
      location: 'Ellis Park Arts & Recreation Center -  3520 S. Cottage Grove Ave',
      date: 'Thursday, June 8',
      time: '6-9pm',
      image: 'http://placehold.it/700x200/000000/ffffff?text=Blues’n In Bronzeville',
      description: "Blues'n In Bronzeville brings authentic blues right back to where it all began. Blocks from Muddy Waters' home and Honorary Sam Cooke Way, this festival will feature performances from old school greats and some new voices on the scene.",
      link: '',
      tabs: [
        {  
          tabname: 'Wayne Baker Brooks',
          title: 'Wayne Baker Brooks',
          image: '../../assets/Wayne Baker Brooks.jpg',
          content: `
            <p>
	          Wayne Baker Brooks is considered one of today’s top guitarists whose signature style combines powerful vocals with liquid fire guitar playing that honors his rich blues heritage yet effortlessly expands the boundaries of the genre.
	        </p>
	        <p>
	          Born and raised in Chicago amongst the most prolific blues legends and blues masters in the world, Wayne Baker Brooks’ blues roots may run deeper and wider than the Great Lakes themselves.
	        </p>
	        <p>
	          Chicago Blues laid the foundation to Wayne's innovative style. Growing up, Brooks was a regular visitor to such historic places as Chess Studios, Checkerboard Lounge, Wise Fools Pub, and many other blues landmarks at which he witnessed many live performances by blues masters like Buddy Guy, Jr. Wells, Luther Allison, KoKo Taylor, the great Muddy Waters, and his father. The youngest son of blues master Lonnie Brooks - Wayne Brooks was literally born into the blues!
	        </p>
         `
        },
        {  
          tabname: 'Doktu Rhute Muuzic',
          title: 'Doktu Rhute Muuzic (formerly known as Roy Hytower)',
          image: '../../assets/Doktu.jpg',
          content: `
            <p>
	          Doktu Rhute Muuzic (formerly Roy Hytower) has enjoyed a full career from his late teens to the present day spanning over fifty years. His first experiences were singing around Mobile, Alabama. In 1962 he came to Chicago, replacing Mighty Joe Young as rhythm guitarist for Otis Rush. Often adopting a soul-slanted sound, Hytower cut a handful of 45rpm singles in the 1960s and '70s for several local labels such as Avin, Expo, Brainstorm, and Jiffy. In recent years Roy Hytower has self-released a couple of CDs under his new moniker, Doktu Rhute Muuzic.
	        </p>
         `
        },
        {  
          tabname: 'Shoji Naito',
          title: 'Shoji Naito',
          image: '../../assets/ShojiNaito.jpg',
          content: `
            <p>
	          “Shoji Naito is an amazing musician who authoritatively knows the delicate nuances of the Chicago blues on both the harmonica and guitar. He is also a kind and generous person, and that comes across on the bandstand. His sterling backing work for his longtime employer, the legendary Eddy Clearwater, stands testament to his professional quality. Shoji can deliver a powerful Little Walter style instrumental on harmonica or flawlessly back other harmonica players on guitar, as he frequently does with Morry Sochat, or any number of great harmonica players at Joe Filisko’s advanced harmonica class at the Old Town School Of Folk Music. Whatever musical situation Shoji finds himself in, he will always rise to the occasion.” - Bob Corritore
	        </p>
         `
        },
      ]
    },
    {
      genre: 'genre2',
      title: 'We Bring You Bronzeville, Salute to Blues at Ellis',
      lead: 'A Chicago Blues History exhibition courtesy of the Chicago Blues Museum',
      admission: 'Free & open to the public',
      location: 'Ellis Park Arts & Recreation Center - 3520 S. Cottage Grove Ave',
      date: 'Thursday, June 8',
      time: '11am-9pm',
      image: 'http://placehold.it/700x200/000000/ffffff?text=We Bring You Bronzeville',
      description: "Chicago Blues Museum's community gathering featuring a blues exhibit and film footage of Blues Greats. The Chicago Blues Museum presents Chicago Blues Legends exhibit on the history of Chicago Blues with 'Nothin But The Blues' film footage of performances of Blues Greats on the big screen. The Chicago Blues Museum's We Bring you Bronzeville: A month-long celebration of the musical heritage and cultural legacy of the historic South Side district through exhibits, film presentations of music performances and programs at Ellis Park exploring significant contributions from musicians, artists, and citizens to the fabric of Bronzeville's deep cultural history.",
      link: '',
      tabs: [
        {  
          tabname: 'About',
          title: 'About the Chicago Blues Museum',
          image: '',
          content: `
            <p>
		          The only music Museum in Chicago and Illinois, the Chicago Blues museum is the only history institution dedicated to the history of the blues and American popular music as it relates to Chicago. Since 1991, the museum has focused on preservation and evolution of the blues and related music genres through education and performance programs.
		          <a href="https://www.facebook.com/Chicago-Blues-Museum-208904142563117/" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
		        </p>
         `
        }
      ]
    }
  ];

  essay = {
    tabs: [
      {
        tabname: 'Essay',
        title: '',
        image: '',
        content: `
          <p>
            Chicago Blues is the product of over 100 years of blues music history. Blues music itself can be traced back to the triangle trade of the seventeenth century and rooted in the emancipation of the African slaves. The Africans who crossed the Atlantic Ocean in the bottom of slave ships, brought their distinct music with them. This music was first heard in the fields of servitude as work songs, hollers and arhoolies. These rhythms were used to help the slaves overcome the hardship of working in the fields, from the Piedmont region of the southeast to the cotton fields of the Deep South. The National Geological Society defines the Mississippi Delta Region as the land from Mobile, Alabama to Galveston, Texas with its pinnacle in Memphis, Tennessee. The blues delta itself is the area made up by the confluence of the Yazoo and Mississippi Rivers. It is in the blues delta region where the music of Charley Patton, Son House, Robert Johnson, and Muddy Waters originated on the Dockery and Stovall plantations. It was also in the blues delta region where boogie-woogie piano played a significant role in the turpentine towns. These blues traveled from the Deep South to the South and West sides of Chicago during the Great migration starting in 1916; today, blues music thrives primarily in the clubs of Chicago’s North side.
          </p>
          <p>
            While the blues can be found throughout the Delta, the music and culture progressed north, giving a voice to the African American community when they migrated to Chicago’s Bronzeville during the early part of the twentieth century. It was in the South side brownstones where house parties were prevalent during the twenties and thirties. The piano playing of Jimmy “Papa” Yancey influenced boogie-woogie icons Albert Ammons and Meade Lux Lewis who would bring this rocking rhythm to New York’s Carnegie Hall in 1938 at the “Spirituals to Swing concert” produced by John Hammond. These house parties provided the music that kept a community together through a time of racial strife, through the Race Riots of 1919, and through the Great Depression. Chicago became the “music capital of the world,” and home to musical greats like King Oliver, Louis Armstrong, Jimmy Noone and many other greats. The music could be heard up and down the South side “stroll.” A popular myth was if you just held up a horn at the intersection of 31st and Grand Blvd. the greatest jazz could be heard. Throughout Bronzeville there were many theaters, cabarets, and cafes. In many homes of the black belt, house parties were held as community rituals, which helped the residents bind together to overcome life’s adversity.
          </p>
          <p>
            This foundation made Chicago the “Mecca” or the “Promised Land.” Chicago became a recording center for the musicians, particularly the blues musicians of the South side as well as for many of the southern musicians that would travel north for the opportunity to record. The port of entry was Maxwell Street where Papa Charlie Jackson lived and sang of life in the market. The headquarters at the time was at 35th and State the home of guitar Wizard Tampa Red. It was here a clique of musicians would congregate, rehearse and wait for record producer Lester Melrose to hear these rehearsals and provide the musicians with the opportunity to record. These recording sessions would be commonly referred to as the “Bluebird” sound. The sessions by Tampa, Sonny Boy Williamson #1, Merline Johnson, and Big Bill Broonzy provided the Chicago Blues sound that became the basis for the Chicago blues recording legacy.
          </p>
          <p>
            The “Bluebird” sound became the standard for blues recording, showcasing vocalists, guitar players, piano players, harmonica players, and horn ensembles. This music popularized the blues to the community of the South side and influenced the African-American record buying public from coast to coast. As a result, a market for the blues was created. Although there was a recording ban during World War II the stage was set for Chicago to become a center for independent record production in the Post-War era. With the coming of the Atomic Age came the explosion of Chicago’s electric blues scene. The South side had dozens of blues clubs that provided the platform for the numerous musicians moving to the industrial city in the north after the war. It was an outlet for the booming African American community that not only filled the South side black belt but then moved west from Maxwell Street down Lake and Madison streets.
          </p>
          <p>
            With the advent of the Post-War era, the music changed with the times and could be heard on Maxwell Street, and then recorded by Bernard Abrams for his Ora Nelle Records. The label only operated for a couple of years but it was at his studio where Little Walter first recorded. The blues business became an important Chicago industry when Leonard and Phil Chess, brothers and Polish immigrants, left the scrap yards of the South side and laid the tracks for the archetype of Chicago blues and the foundation for rock and roll. Chess moved their operation from South Cottage Grove Avenue to 2120 S. Michigan Avenue in the area that would later be known as Record Row. The label featured some of the greatest performers in blues history including Muddy Waters, Howlin’ Wolf, Little Walter, Sonny Boy Williamson II, Chuck Berry, Bo Diddley, Etta James, Koko Taylor, and many more post-war blues performers.
          </p>
          <p>
            Following in the footsteps of Chess Records, Vee Jay Records was formed. Vee Jay, the African-American owned and operated label run by Vivian Carter and Jimmy Bracken featured the recordings of Jimmy Reed, John Lee Hooker, and the Staple Singers. The label featured not only blues and gospel artists, but even distributed recordings by the Beatles and the Four Seasons. The industry flourished throughout the fifties. Independent labels like Parrot, J.O.B., and Cobra prompted the electric Chicago blues sound featuring artists like Snooky Pryor, Sunnyland Slim, Otis Rush and Magic Sam. Chicago set the standard for record production, radio play, and distribution for the modern blues scene. Record Row on South Michigan Avenue not only provided headquarters for the labels but record distributors like the Leaner brothers', United Records. Record Row was the music capital of rhythm and blues.
          </p>
          <p>
            The sixties brought a dramatic cultural shift to the blues community. Not only was the nation going through social upheaval, but the blues scene was going through a social change. At a time when the African-American community was looking towards Afro-centric sounds of experimental jazz, blues became a cross-cultural expression for the young white audience, both as listeners and performers. The founding of Delmark Records by Bob Koester and the opening of live blues clubs on North Wells Street created a whole new audience for the blues. Delmark gave a voice to artists like Junior Wells, Magic Sam, Jimmy Dawkins, Luther Allison, Jimmy Johnson, and J.B. Hutto. The discs were sold at the Jazz Record Shop, which became the center for all those who loved the blues. Labels like Alligator, Earwig, and The Sirens were all bit by the blues bug and released records by new or underappreciated artists like Hound Dog Taylor, the Jelly Roll Kings or masters like Homesick James, David Honey Boy Edwards, Sunnyland Slim, and Erwin Helfer. These labels kept the blues flame burning so the next generation would have a place to release their music. Artists like Toronzo Cannon, Sharon Lewis, Linsey Alexander, and Mike Wheeler are now keeping the blues alive for the twenty-first century.
          </p>
       `
      },
      {  
        tabname: 'Barry Dolins',
        title: 'Barry Dolins',
        image: '',
        content: `
          <p>
            Barry Dolins has professionally served the public sector as an educator, arts presenter, and public servant including a long tenure as the Deputy Director of the Mayor’s Office of Special Events. During his time working for the city, he developed the Chicago Blues Festival into an internationally known event and developed a Neighborhood Festival program that served all communities in Chicago. In addition, Mr. Dolins also worked in the music business as record and radio producer. His love for the blues began as a teenager working the Maxwell Street market where he was introduced to the lives of Pork Chop Hines and Blind Jim Brewer, among many others, and he has remained dedicated to presenting an authentic vision of the Chicago Blues tradition in all aspects of his career from the classroom to the festival. Since Mr. Dolins retirement as Deputy Director of the Mayor’s Office of Special Events in 2010, he has been teaching a History of Rock and Roll and Blues and Jazz Appreciation class as an adjunct professor at Dominican University in River Forest, Il. 
          </p>
       `
      }
    ]
  }

  constructor(private _RouteTitles:RoutesTitles){
    _RouteTitles.name.next('Blues’n In Bronzeville');
  }

  ngOnInit() {
  }

}
