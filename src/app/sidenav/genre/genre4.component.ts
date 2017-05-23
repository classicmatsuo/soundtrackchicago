import { Component, OnInit } from '@angular/core';
import { RoutesTitles } from '../../app-routes/app-routes-titles.service';

@Component({
  selector: 'genre4',
  templateUrl: './genretemplate.component.html',
  styles: [
  `
  	.genre4 {
		margin: 1% auto;
		max-width: 700px;
	}
	.event1image {
		background-image: url('../../assets/sotclogos/icons/SOTC_icons_blue_folk.png');
		background-size: cover;
	}
	.card-image {
		max-width: 100%;
		margin-bottom: 16px;
	}
  `
  ]
})
export class Genre4Component implements OnInit {
  
  events = [
    {
      genre: 'genre4',
      title: 'Folk Music - Chicago’s Legacy',
      lead: 'Part of Square Roots Festival, a true local music, craft beer and food festival in Lincoln Square presented by Old Town School of Folk Music and Lincoln Square Ravenswood Chamber Of Commerce',
      admission: 'Free & open to the public',
      location: 'Lincoln Avenue between Montrose and Wilson',
      date: 'Sunday, July 9',
      time: 'TBD pm',
      image: '../assets/Win and Frank Opening Night.jpg',
      description: "Join us as we take a look and listen to the welcoming role Chicago played (and still plays) in folk music, from way back to The Peoples' Songs Concerts of the late 1940s with Pete Seeger, Big Bill Broonzy, and Woody Guthrie in Orchestra Hall, to the voices of singers and players over the airwaves with Studs Terkel, to the lore of the historic Chicago venues, and to the hallowed halls of our very own Old Town School of Folk Music. Chicago's beckoning call made this a welcoming hub, bringing folks here to participate: to play and sing and join in this musical community, whether passing through or staying on. Folk music, always the people's songs. Come on!",
      link: '',
      tabs: [
         
      ]
    }
  ]

  essay = {
    tabs: [
      {  
        tabname: 'Essay',
        title: 'Folk Music & Chicago',
        content: `
          <h5>by Mark Guarino</h5>
          <p>
            Long before it earned the name “folk,” stringed instruments and traditional songs accompanied life in Chicago for decades. Labor halls, cafes, radical theaters, and living rooms were all places where fiddlers, banjoists, and guitarists performed on instruments that might have been bought locally through Sears-Roebuck and Company catalog. A major figure in the early century folk movement was Illinois poet Carl Sandburg. Through his 1927 anthology American Songbag and subsequent solo recordings, Sandburg is directly responsible for popularizing traditional songs and making song collecting a serious endeavor. 
          </p>
          <p>
            The galvanizing moment for stringed music in Chicago was April 19, 1924, the opening broadcast of what was then called the Barn Dance, a Saturday night program on WLS that station director Edgar L. Bill promoted as presenting “old-time fiddling, banjo and guitar music and cowboy songs,” the kind of entertainment that he felt a farm audience would appreciate. The broadcast made Chicago the nation’s commercial heart of country music through the end of the Second World War and produced stars like Gene Autry, Bradley Kincaid, Red Foley, Patsy Montana, Lily May Ledford, and Lulu Belle and Scotty, all of whom had prodigious recording careers.
          </p>
          <p>
            The Barn Dance presented an imagined portrait of rural life through traditional songs, exaggerated characters, and country humor to both remind urban listeners of home and to affirm the traditional values held firm by listeners in rural outposts. Station folklorist John Lair, a native Kentuckian, is responsible for building this downhome fantasia that tied every song, dance routine, instrumental, and minstrel skit to an imagined mountaintop culture devoid of hardship or worry. 
          </p>
          <p>
            During this period Chicago became home for prestigious music gatherings, starting with the fourth annual National Folk Festival, an international event that used the term “folk” to mean indigenous cultures from the U.S. and abroad. Held at Orchestra Hall in Chicago on May 22-28, 1937, the event represented the first time it traveled north of the Mason-Dixon line. It highlighted folk cultures indigenous to the Midwest. The final night featured the Chicago Negro Group, a special choir of 750 voices featuring song leader Thomas A. Dorsey, the gospel music pioneer.
          </p>
          <p>
            The Chicagoland Music Festival also took root in downtown Chicago starting in 1930. Held in Soldier Field, the early years were devoted to classical music and the patriotic marches of John Philip Sousa, but in later years it prominently entertainment as diverse as black church choirs from Bronzeville, yodelers, a square dance jamboree featuring 1,000 dancers, and a 78-year-old dulcimer player from Catlettsburg, Kentucky named Aunt Polly Triplett.
          </p>
          <p>
            Chicago’s folk music scene thrived starting the 1940s during the American folk revival. A catalyst for folk music’s development in Chicago was “I Come for to Sing,” a successful and long-running folk revue in 1947 featuring Big Bill Broonzy, Studs Terkel, folk singer Win Stracke, and tenor Larry Lane that presented traditional folk and blues songs with Elizabethan ballads grouped under different themes that Terkel would highlight with narration. The revue brought folk music to Chicago’s nightclub scene in 1952 when it debuted at the Blue Note, an integrated jazz club on Madison Street. 
          </p>
          <p>
            That development set the stage for the Gate of Horn, the nation’s first folk music nightclub located in a cellar of the Rice Hotel at 755 N. Dearborn Street. Co-owned by Les Brown, an editor at Downbeat, and Albert Grossman, who would later manage Bob Dylan, the club opened its doors in February 1956. The Gate was meant to appeal to the same well-heeled crowd of after-hours professionals who were packing the downtown supper clubs and jazz lounges that had sprung up that decade. All the marquee artists of the era performed there: Josh White, Big Bill Broonzy, Odetta, Theodore Bikel, Brother John Sellers, Peggy Seeger, Judy Collins, Glenn Yarbrough, Barbara Dane, Martha Schlamme, and others. The Gate served as a showcase for Bob Gibson, one of the most popular artists of the folk revival. Gibson, who grew up in New York but moved to Chicago to play the Gate, was clean-cut, entertaining and slyly risqué – A perfect nightclub act whose virtuoso 12-string guitar playing would influence a later generation of musicians, particularly Roger McGuinn, David Crosby, and Bob Dylan.
          </p>
          <p>
            While the Gate represented the commercial end of the folk boom, the Old Town School of Folk Music represented its traditional counterpart. The school’s founders — Stracke, guitarist Frank Hamilton, organizer Dawn Greening, and administrator Gertrude Soltker, — were opposites in age and temperament, but their efforts created the longest-running folk school of its kind in the U.S. Opening in December 1957, the school would establish a community-based method of teaching based on Bess Lomax Hawes, a pillar of the West Coast folk scene. Instead of the conservancy approach that focused on the individual, the Old Town School emphasized learning by ear though songs, not notes. Instruments were there to accompany the songs and were not a means to an end by themselves, which allowed the music to become a social expression intended to contribute to a heightened sense of community.
          </p>
          <p>
            By 1961, folk music concerts were being held throughout Chicago in prestigious venues like Orchestra Hall and the Ravinia Festival. That year the University of Chicago launched its annual folk festival, an event that, for some performers located in the most remote pockets of the rural South like Frank Proffitt, Almeda Riddle, Elizabeth Cotton, and Mississippi Fred McDowell, served as the first time they performed before a large city audience.
          </p>
          <p>
            The Old Town School is one of the reasons why folk music continued to thrive in Chicago whereas in other places it had died a quick death to rock ‘n’ roll. A second wave of folk singers emerged in the late 1960s and 1970s, a group that included breakout stars John Prine and Steve Goodman. A singer-songwriter scene was sustained through a thriving club scene along Lincoln Avenue and Wells Street, media support like WFMT’s Midnight Special program, and local record labels that nurtured new voices. 
          </p>
          <p>
            That lasted into the 1980s, a period when punk rock bands and outsider artists dominated the clubs. Andrew Calhoun’s cooperative label Waterbug Records gave traditional songwriters a home while a bluegrass revival and the launch of “alternative country” bands helped nurture folk-based artists like Andrew Bird, the Handsome Family, Souled American, Chris Mills, the Texas Rubies, Califone, and Wilco’s Jeff Tweedy, among others. Special Consensus, a four-person bluegrass group that started in 1975, served as a mainstay of bluegrass music throughout this period. Robbie Fulks, a Special Consensus alumni, became the focal point of the singer-songwriter scene starting in the late 1990s. In 2017 he received two Grammy nominations, one for best folk album. The moment shed light on a scene populated by artists who are interested in doing more than uphold tradition. Instead, the one constant running throughout all these periods of Chicago folk music is an allegiance to both experimentation and individualism, a spirit much in line with the city itself.
          </p>
       `
      },
      {
        tabname: 'Mark Guarino',
        title: 'Mark Guarino',
        content: `<p>Mark Guarino is a journalist and playwright in Chicago whose forthcoming book by the University of Chicago Press is an exhaustive history of country and folk music in Chicago over the past 100 years. His byline appears regularly in the Washington Post, Crain’s, and The Guardian. He served as the Midwest bureau chief for The Christian Science Monitor between 2008-14 and his writing on music and politics has appeared in countless outlets including Mojo, Salon, the Chicago Tribune, Al Jazeera America, New York Magazine and the AFP. He is also a playwright with productions in Chicago including “All the Fame of Lofty Deeds,” a collaboration with Jon Langford produced by the House Theater of Chicago and “Take Me,” produced by Strawdog Theatre in late 2018. He teaches writing at UIC and has his MFA from Bennington College in Vermont.</p> 
          <p><a href="http://mark-guarino.com/" target="_blank">Visit mark-guarino.com</a></p>`
       }
    ]
  }

  constructor(private _RouteTitles:RoutesTitles){
    _RouteTitles.name.next('Folk Music');
  }

  ngOnInit() {
  }

}
