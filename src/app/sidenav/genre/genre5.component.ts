import { Component, OnInit } from '@angular/core';
import { RoutesTitles } from '../../app-routes/app-routes-titles.service';

@Component({
  selector: 'genre5',
  templateUrl: './genretemplate.component.html',
  styles: [
  `
  	.genre5 {
		margin: 1% auto;
		max-width: 700px;
	}
	.event1image {
		background-image: url('../../assets/sotclogos/icons/SOTC_icons_blue_gospel.png');
		background-size: cover;
	}
	.card-image {
		max-width: 100%;
		margin-bottom: 16px;
	}
  `
  ]
})
export class Genre5Component implements OnInit {
  events = [
    {
      genre: 'genre5',
      title: 'Gospel and The Freedom Trail',
      lead: 'In partnership with Night Out In The Parks, presented by the Chicago Park District',
      admission: 'Free & open to the public, Rain or Shine',
      location: 'Marquette Park (6743 S. Kedzie Ave)',
      date: 'Saturday, July 22',
      time: '6-8pm',
      image: '../assets/Holy Vessel Choir.jpg',
      description: 'Gospel and the Freedom Trail features a concert with gospel icon Dr. Lena McLin and various luminary Chicago Gospel artists.',
      link: '',
      tabs: [
        {  
          tabname: 'Bio',
          title: 'Dr. Lena McLin & the Holy Vessel Baptist Church Choir',
          image: '../assets/Dr. Lena.jpg',
          content: `
            <p>
              The Holy Vessel Baptist Church Choir has been inspiring people with the Good News in song since 1981. The HVBCC has performed many times at the Chicago Gospelfest and shared the festival’s main stage with many Gospel music legends including Andraé Crouch, Otis Clay and Jessy Dixon. The HVBCC also has headlined concerts in Wisconsin, Missouri and Georgia. 
            </p>
            <p>
              Members of the HVBCC have performed professionally as Still Water and The Lena McLin Singers.  They were featured in concert at Orchestra Hall, and they regularly appeared on ABC-TV’s “Face To Face” with host Vernon Jarrett.  The HVBCC released its CD “The Spirit of Christmas” in 2002.
            </p>
            <p>
              HVBCC alums include many professional artists, including opera singer Susan Korhonen-Ali, Christian vocalist and “West Coast Praze” TV show executive producer Donna McAfee, international gospel/pop singer Sharon Pass, and Chicago radio broadcaster Roger Plummer.
            </p>
            <p>
              The HVBCC is founded and directed by the award-winning composer, musician and educator Dr. Lena J. McLin. Dr. McLin is the niece of the ‘Father of Gospel Music’ Thomas A Dorsey. Dr. McLin taught in Chicago Public Schools for 36 years, and she was featured in the PBS documentary “This Far By Faith”.
          </p>
         `
        }
      ],
      essays: [
        {  
          tabname: 'Essay',
          title: '',
          content: `
            <p>
              Chicago is the birthplace of modern gospel music.  On the city’s South and West Sides, African American gospel music was first written, arranged, performed, recorded, and broadcast, forever changing the sound of the African American church.  
            </p>
            <p>
              The gospel music story starts with the Great Migration.  Beginning around 1916, African Americans left the South to make a better life for themselves, and Chicago was a popular destination.  Migrants brought with them their beloved hymns, camp meeting songs, and spirituals.  Their singing and musicianship drew largely from traditional West African ceremonial practices that their ancestors passed along through oral tradition.  These techniques included falsetto, polyrhythms, handclapping and foot patting, improvisation, and call-and- response congregational singing.
            </p>
            <p>
              Migrants found some quality of life in Chicago, but they also encountered a more insidious form of prejudice from whites as well as some establishment blacks who seemed embarrassed by their brethren.  Moreover, Chicago’s major black Protestant churches had long abandoned religious folk music for the staid hymnody of their white denominational counterparts.
            </p>
            <p>
              Feeling like strangers in a strange land, migrants clung tightly to their southern traditions, including their soul-stirring worship practices.  They stole away to the city’s Pentecostal, Holiness, and Spiritual churches, where familiar worship experiences reigned supreme.  Two of these South Side churches, All Nations Pentecostal and First Church of Deliverance, were among the first African American churches in the nation to broadcast their worship services on radio.
            </p>
            <p>
              Songwriter, arranger, and pianist Thomas A. Dorsey migrated from Atlanta to Chicago in the early 1920s.  He began writing gospel songs that were steeped in the southern tradition but swung to the vaudeville blues and jazz he performed for a living.  To his dismay, no pastor of a big Chicago Protestant church wanted Dorsey’s so-called “jazz baby” music in his sanctuary.
            </p>
            <p>
              That is, until 1932, when Dr. J. H. L. Smith arrived from Birmingham, Alabama, to lead Chicago’s Ebenezer Baptist Church.  Smith grew up in the southern religious music tradition.  He hired Mississippi-born Theodore Frye to start a group at Ebenezer that sang songs “of the southland.”  Frye asked his friend Dorsey, by now having modest success with his gospel songs, to help him assemble the first modern gospel chorus at Ebenezer.  When the chorus debuted to great accolades in January 1932, many Chicago Protestant churches now wanted a gospel chorus.
            </p>
            <p>
              That included Pilgrim Baptist Church, which hired Dorsey to organize its gospel music program.  Ebenezer replaced Dorsey with Arkansas migrant Roberta Martin.  Martin formed the Roberta Martin Singers from members of Ebenezer’s junior choir.  Between 1933 and 1969, the Roberta Martin Singers were one of the nation’s foremost gospel groups.  Martin’s semi-classical imprint on songwriting and arrangements is the linchpin of the “Chicago School of Gospel.”
            </p>
            <p>
              Tragedy struck in August 1932, when Dorsey’s young wife Nettie died in childbirth and their newborn died a day later.  Dorsey channeled his grief into composing “Take My Hand, Precious Lord.”  “Precious Lord” became one of the most beloved gospel songs of all time and a favorite of Reverend Dr. Martin Luther King Jr.  Dorsey was now the nation’s top gospel songwriter.
            </p>
            <p>
              In 1933, Dorsey, Frye and Magnolia Lewis Butts organized the first national convention of gospel choruses.  Sallie Martin, considered the Mother of Gospel Music, traveled from coast to coast, establishing gospel choruses for the convention and, as an employee of Dorsey’s publishing firm, sold Dorsey sheet music to the newly-minted ensembles.
            </p>
            <p>
              Bronzeville became an epicenter of gospel music publishing.  In the late 1930s, Roberta Martin formed a publishing concern.  Sallie Martin parted ways with Dorsey and joined Kenneth Morris in opening Martin and Morris Music.  For decades, Martin and Morris was the nation’s most successful African American music publishing company.  Frye started his own publishing company, as did singer Myrtle Jackson, the First Church of Deliverance, and several others.
            </p>
            <p>
              Gospel became big business in 1947 when Mahalia Jackson, the Queen of Gospel, recorded “Move On Up a Little Higher.”  The Chicagoan’s single became a best seller and encouraged record company executives to sign other local gospel talent.  These included Alex Bradford (“Too Close to Heaven”), James Cleveland (“Grace is Sufficient”), the Gay Sisters (“God Will Take Care of You”), and the Caravans (“Mary Don’t You Weep”).  Featuring Albertina Walker, the second Queen of Gospel, the Caravans were an all-star group; every member was a seasoned soloist.  Roebuck “Pops” Staple’s reverb-laden electric guitar, daughter Mavis’s alto voice, and the family’s haunting harmonies contributed to the Staple Singers’ popularity.
            </p>
            <p>
              Chicago quartets were top draws during gospel’s golden age (1945-60).  These included the Soul Stirrers, Highway QCs, Pilgrim Jubilees, Christland Singers, and Salem Travelers.  Pop singers emulated their tight harmonies and choreography.  Quartet lead singers Sam Cooke, Lou Rawls, and Johnnie Taylor emerged from Chicago to become 1960s entertainment sensations.
            </p>
            <p>
              Community choirs flourished.  The Thompson Community Singers, Wooten Choral Ensemble, South Side Community Choir, and Helen Robinson Youth Choir gave post-war adolescents a healthy out-of-school outlet and, in the process, became national recording and touring stars.
            </p>
            <p>
              Chicago television provided a new means of disseminating gospel music across racial lines when Jubilee Showcase debuted in 1963.  Every Sunday morning for 21 consecutive years, host Sid Ordower presented national gospel artists and local talent to the Chicagoland area.
            </p>
            <p>
              The winds shifted in 1969 when Edwin Hawkins and the Northern California State Youth Choir inadvertently scored a top five pop hit by giving an old hymn, “Oh Happy Day,” a contemporary feel.  The rise of the Hawkins Family, Andrae Crouch, and the Southern California Community Choir effectively moved the locus of gospel music from Chicago to their home in California.
            </p>
            <p>
              But Chicago maintains a significant presence in gospel music.  Today’s ambassadors include Anita Wilson, VaShawn Mitchell, Chicago Mass Choir, Smokie Norful, Brian Courtney Wilson, Jonathan McReynolds, Reverend Dr. Clay Evans, Reverend Charles Jenkins and Fellowship Chicago, Walt Whitman and the Soul Children of Chicago, Dexter Walker and Zion Movement, and quartets such as the Victory Travelers, Stars of Heaven, and God’s Posse.  The Stellar Awards, gospel’s top awards ceremony, was started by Chicago television entrepreneur Don Jackson.  The joyous sounds debuted by Dorsey and Frye at Ebenezer 85 years ago still reverberate in churches, auditoriums, and festivals worldwide.   -- Robert M. Marovich
            </p>
            <p>Robert Marovich<br>
            Founder and Editor-in-Chief<br>
            Journal of Gospel Music
            </p>
            <p>
              Additional Resources:
              Robert Marovich is the founder and editor-in-chief of Journal of Gospel Music, author of A City Called Heaven: Chicago and the Birth of Gospel Music (University of Illinois Press) and is a 2016 recipient of a Certificate of Merit in Historical Sound Recorded Research from the Association of Recorded Sound Collections.
            </p>
         `
        }
      ]
    }
  ]


  constructor(private _RouteTitles:RoutesTitles){
    _RouteTitles.name.next('Gospel and The Freedom Trail');
  }

  ngOnInit() {
  }

}
