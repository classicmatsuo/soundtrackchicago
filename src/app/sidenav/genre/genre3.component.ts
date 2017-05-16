import { Component, OnInit } from '@angular/core';
import { RoutesTitles } from '../../app-routes/app-routes-titles.service';

@Component({
  selector: 'genre3',
  templateUrl: './genretemplate.component.html',
  styles: [
  `
  	.genre3 {
		margin: 1% auto;
		max-width: 700px;
	}
	.event1image {
		background-image: url('http://placehold.it/200/000000/ffffff?text=JAZZ');
		background-size: cover;
	}
	.card-image {
		max-width: 100%;
		margin-bottom: 16px;
	}
  `
  ]
})
export class Genre3Component implements OnInit {
  events = [
    {
      genre: 'genre3',
      title: 'Chicago Jazz',
      lead: 'In partnership with Night Out In The Parks, presented by the Chicago Park District',
      admission: 'Free & open to the public',
      location: 'Ellis Park (535 E. 35th St.)',
      date: 'Friday, June 30',
      time: '6-9pm',
      image: 'http://placehold.it/700x200/000000/ffffff?text=JAZZ',
      description: 'Join Soundtrack Of The City and Old Town School of Folk Music for a night of Chicago Jazz with world renowned ragtime pianist and composer Reginald Robinson with special guest Dee Alexander Quartet.',
      link: '',
      tabs: [
        {  
          tabname: 'Reginald Robinson',
          title: 'Reginald Robinson',
          image: '../../assets/Reginald-Robinson.jpg',
          content: `
            <p>
              20 years after Reginald Robinson’s emergence as a young, self-taught, against the grain pianist and composer, he has become an internationally recognized pianist, recording artist and educator.
            </p>
            <p>
              His love for music started in 1984 with his brother Marlando playing Big band jazz records at home and then on to ragtime two years later in 7th grade when a city funded arts program (Urban Gateways) gave an assembly with a small jazz ensemble. The assembly was led by jazz trumpeter Orbert Davis and included in the band other jazz luminaries like Ari Brown. In the middle of the show the group played a sample of Scott Joplin’s “The Entertainer” and after hearing it Reginald decided this was the kind of music he wanted to play.
            </p>
            <p>
              In 2004, he was awarded the rare and distinguished John D. &amp; Catherine T. MacArthur Award for his innovation in ragtime.
            </p>
            <p>
              Reginald has performed as a soloist internationally and has performed as guest artist with Orbert Davis Chicago Jazz Philharmonic and The Chicago Sinfonietta. In addition he has performed with various smaller ensembles such as: Accessible Contemporary Music, Andrew Bird’s Bowl of Fire, Fulcrum Point and the Arts Center Jazz Ensemble. Reginald occasionally leads his own band The Reginald Robinson Jazztet.
            </p>
         `
        },
        {  
          tabname: 'Dee Alexander Quartet',
          title: 'Dee Alexander Quartet',
          image: '../../assets/deealexander-magnum.jpg',
          content: `
            <p>
              Dee Alexander is one of Chicago’s most gifted and respected female vocalist/songwriters. Her talents span every music genre, from Gospel to R&B, from Blues to Neo-Soul. Yet her true heart and soul are experienced in their purest form through her performance of Jazz music. From a soft, sultry traditional ballad, to a contemporary Jazz-Funk groove; from a high flying swing, to a scat-filled romp, Dee Alexander delivers each style with a passion and love of music that comes across in each and every note, and with a style and grace that is truly her own. Besides being a phenomenal headliner in her own right, Dee has shared the stage with Ahmad Jamal, David Sanborn, Earl Klugh, Gerald Albright, Roy Ayers, Joshua Redman, and the O’Jays. Not being one to ever feel that the spotlight has to belong exclusively to her, Ms. Alexander has lent her considerable talents as a backup vocalist to the live performances of an array of many other well-known artists i.e., Michael Bolton, Phil Perry, Willie Clayton, and Zora Young. Dee has also formed the Evolution Ensemble which is an acoustic group that consists of string instruments and percussion with a strong emphasis on original compositions.
            </p>
         `
        },
        {  
          tabname: 'Essay',
          title: '',
          image: '',
          content: `
            <p>
              In a given week in Chicago, you can readily experience the history of jazz – maybe not the entire history, but pretty darned close – with just a pair of open ears and a Ventra card. And, as a bonus, you can get a few snapshots of America’s social history as well.
            </p>
            <p>
              The earliest jazz migrated from New Orleans north. But while the first jazz recording took place in New York in 1917, it was in Chicago that the music really flowered. In the late 1910s, as jazz venues (primarily brothels) in New Orleans closed their doors, many musicians headed for Chicago, already home to thousands of transplanted African-Americans from the south: the music mirrored the Great Migration. Here the New Orleans cornet master King Oliver established his Creole Jazz Band – soon to feature the music’s first genius, Louis Armstrong – which played regularly at the Lincoln Gardens on the south side. Before long, Oliver’s music had spawned the first early-jazz offshoot, the “Austin High [School] Gang” – a group of white teenagers who emulated the music with enough variety to earn their own sobriquet.
            </p>
            <p>
              Lincoln Gardens, which occupied the 400 block of E. 31st Street in Bronzeville, disappeared decades ago. But Tuesday nights at the Green Mill (Broadway at Lawrence), a band of young Chicagoans called The Fat Babies revisits the music created by Armstrong and the Austin High kids, with the same commitment and urgency that spurred that early jazz. And the Green Mill offers plenty of history of its own. The oldest nightclub in Chicago – and among the oldest Chicago businesses of any kind at its original location – the Mill flourished during Prohibition, when it was partly owned by one of Al Capone’s henchmen. 
            </p>
            <p>
              By then, the music had shifted. Jazz had originally resembled a wild tapestry of different threads, with each instrument playing a separate line; by the 30s, the sound was morphing into a luxurious machine-tooled fabric, as the bands grew bigger and sleeker. New York had Duke Ellington and Kansas City had Count Basie. But a young Chicago clarinetist, Benny Goodman, assembled the orchestra that, in 1935, launched the Swing Era and created the jazz style that became America’s popular music, in the years leading out of the Great Depression and then into World War II. You won’t find too many Swing orchestras of that ilk these days. But you can find artists who, on occasion, channel the small groups that co-existed with those orchestras – artists such as reedmen Eric Schneider and Chris Madsen,  guitarists Andy Brown and Alfonso Ponticelli, vocalists Rose Colella and Kimberly Gordon – at clubs such as Andy’s (11 E. Hubbard); Winter’s (465 N. McClurg); and S.I.P. (4000 N. Southport). 
            </p>
            <p>
              In the 1940s, Bebop – the revolution wrought by Charlie Parker and Dizzy Gillespie – supplanted Swing, and along with such offshoots as Hard-bop and Soul-jazz, it ushered in a Silver Age for jazz. This was the era of Miles Davis and John Coltrane, Cannonball Adderley, the Jazz Messengers, and countless others – preserved on iconic recordings for Blue Note and other noteworthy labels (including Chess Records in Chicago) – that remain a lingua franca for many modern musicians. During this time, Chicago became a revered incubator of influential tenor saxophonists: folks like Von Freeman, John Gilmore, Johnny Griffin, Eddie Harris, and Clifford Jordan. Their legacy lives on at the Jazz Showcase (806 S. Plymouth) – the world’s second-oldest jazz club under the same management – where 91-year-old proprietor Joe Segal still greets patrons at the door.
            </p>
            <p>
              The 1960s saw social upheaval in the U.S. on an unprecedented scale, much of it centered on the historically segregated city of Chicago. The watchword was “freedom,” and jazz responded. In Hyde Park and points south, young musicians intent on experimenting with new and more open approaches to improvisation picked up on the “free jazz” work of Ornette Coleman and the expansive innovations of Cecil Taylor, John Coltrane, and one-time Chicago bandleader Sun Ra, and in 1965 formed the Association for the Advancement of Creative Musicians. It quickly came to symbolize the second wave of the jazz avant-garde; the initials “AACM” after an artist’s name or album’s title conferred a stamp of approval for rule-busting new music. And a commanding quintet, the Art Ensemble of Chicago, became the face of the AACM throughout Europe and then the rest of the world.
            </p>
            <p>
              In keeping with the 60s’ quest for self-determination, the AACM established a school for young musicians and sought to embody community values while raising the artistic awareness of the African-American community. And as one of the earliest musicians’ DIY efforts, the AACM offered a model for other such organizations, most notably the Black Artists Group (BAG) in St. Louis and Asian Improv Arts (AIA) in the San Francisco area. The AACM continues to this day, and affiliated artists with it perform regularly throughout the city, often at Elastic Arts (3429 W. Diversey), Constellation (3111 N. Western), Norman’s Bistro (1001 E. 43rd), and at the University of Chicago – where the Art Ensemble made one of its most famous recordings, in Mandel Hall, in 1972.
            </p>
            <p>
              In the 1990s, the musicians of the AACM – specifically the late saxophonist and mentor Fred Anderson, whose new-music venue the Velvet Lounge still stands at 67 E. Cermak (though now a sports bar) – inspired a new wave of musicians that have once again made Chicago a global nexus for avant-garde experimentation as well as rollicking improvisation. As political and social events have leaned further right, the appetite for music that defies the establishment seems to have grown steadily larger for these artists. Names such as Ken Vandermark, Jeff Parker, Nicole Mitchell, Dave Rempis, Greg Ward, Mike Reed, Dee Alexander, Tim Daisy, and Tomeka Reid now resonate throughout the U.S., Europe, and parts of Asia and Africa. Check the schedules for such hotspots as The Hungry Brain (2319 W. Belmont), the Whistler California Clipper (1002 N. California), and Logan Center at the University of Chicago – as well as Elastic Arts, Constellation, and the Green Mill – and you can take part in the next chapter in Chicago jazz even as it’s being written.
            </p>
         `
        },
      ]
    }
  ]

  constructor(private _RouteTitles:RoutesTitles){
    _RouteTitles.name.next('Chicago Jazz');
  }

  ngOnInit() {
  }

}
