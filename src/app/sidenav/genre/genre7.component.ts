import { Component, OnInit } from '@angular/core';
import { RoutesTitles } from '../../app-routes/app-routes-titles.service';

@Component({
  selector: 'genre7',
  templateUrl: './genretemplate.component.html',
  styles: [
  `
  	.genre7 {
		margin: 1% auto;
		max-width: 700px;
	}
	.event1image {
		background-image: url('../../assets/sotclogos/icons/SOTC_icons_blue_country.png');
		background-size: cover;
	}
	.card-image {
		max-width: 100%;
		margin-bottom: 16px;
	}
  `
  ]
})
export class Genre7Component implements OnInit {
events = [
    {
      genre: 'genre7',
      title: 'Title TBD',
      lead: '',
      admission: '',
      location: 'Navy Pier, Lake Stage',
      date: 'Sunday, August 20',
      time: '6pm',
      image: '../assets/Robbie_Fulks_Stand_2016_Andy_Goodwin.jpg',
      description: 'TBD',
      link: '',
      tabs: [
        {  
          tabname: 'Robbie Fulks',
          title: '',
          image: '',
          content: `
          <p>
          	Robbie Fulks plays by nobody's rules--except the ones he hears in his head. He is prodigiously talented, with the soul of a country singer and the mind of a vaudevillian.  Besides, his scorn for the music industry makes ours look positively prosaic. But don't let that make you lose sight of THE SONGS.
 					</p>
 					<p>
						Widely regarded by those who monitor such things as one of the most gifted songwriters to ever ply the trade, he can sing the kids ditty "Eggs" and Haggard's "Sing a Sad Song" back to back and mean 'em both. While it is true he started off a honky tonk smartass, it quickly became evident that Robbie was a monster talent and some of his early Bloodshot albums have been rightly elevated to the status of "classic" and serve as their own Greatest Hits collections.  
 					</p>
 					<p>
						“…a masterly, multifaceted songwriter who can belt out hip-shaking honky tonk, honeydew pop and chilling little ballads with an unrivaled skill and spirit. So good, he's scary.” - Chicago Tribune
 					</p>
         `
        },
        {  
          tabname: 'Dr. Dosido',
          title: 'Dr. Dosido aka Paul Tyler, PhD',
          content: `
          <p>
          	Born in 1950, Paul Tyler grew up in rural Indiana, in the small Allen County town of Hoagland, to be exact. After a 5-year stay in Detroit and 8 years in Bloomington, Indiana, DrDosido has lived in Chicago for over a quarter century. He earned a bachelor's degree from Valparaiso University in 1973 and, after much experience as a professional musician and amateur folklorist, he enrolled in the ethnomusicology program at the Folklore Institute at Indiana University, receiving an M.A. in 1982. He was awarded the Ph.D. in 1992 after completing a dissertation: "'Sets on the Floor': Social Dance as an Emblem of Community in Rural Indiana."
 					</p>
 					<p>
						DrDosido started as an amateur folklorist by recording fiddle tunes and other traditional music in the field for a show on public radio station WIPU-Fort Wayne. Indiana Hoedown: Traditional Music from the Hoosier State ran as 26 1-hour broadcasts in 1979-80. Through the 1980s and into the '90s he worked as a contract folklorist. He has done field research for the School of Fine Art at Eastern Illinois University, the University Museum at Southern Illinois University, the Archives of Traditional Music at Indiana University, the Wyoming Arts Foundation, Urban Traditions in Chicago, and the David Adler Cultural Center in Libertyville, Illinois. Paul has produced four documentary albums: Folk Songs of Illinois #2: Fiddlers; Lotus Dickey, Fiddle Tunes from Orange County, Indiana (with booklet); Lonesome Homesteader: Old Time Fiddling in Wyoming (with booklet); and Ethnic Music in Northern Indiana (for the Archives of Traditional Music at Indiana University).
 					</p>
 					<p>
						From 1988-92, Paul was on the administrative staff of the Old Town School of Folk Music as Curator of Collections and Exhibitions. Besides developing the Schools Resource Center, he also curated three exhibitions: The Making of the 5-String Banjo: From Hollowed Gourds to Silvered Rims; Weaving an Identity: Guatemalan Folk Art; and Traditional and Modern Indian Art on the Shores of Lake Michigan. Since 1990, he has taught fiddle and country music classes at the Old Town School of Folk Music, while also teaching world music and world culture courses at four Chicago universities. DrDosido currently teaches anthropology at Wilbur Wright College, part of Chicago City Colleges.
 					</p>
 					<p>
					<a href="http://drdosido.net/" target="_blank">http://drdosido.net/</a>
 					</p>
         `
        },
        {  
          tabname: 'Essay',
          title: 'The National Barn Dance: Chicago and Country Music',
          content: `
            <h5>By Paul L. Tyler (Dr.Dosido)</h5>

            <p>
            A strong argument can be made that Chicago was the capital of country music during the decade leading up to World War II. In the 1920s, when country–AKA hillbilly, old-time, or American folk–emerged as a separate commercial musical form, that designation of “capital” most likely belonged to Atlanta, where much early recording and radio broadcasting of rural artists took place. But Chicago began to make a strong case for itself on April 19, 1924, when brand new radio station WLS broadcast the very first National Barn Dance, with musical appearances by the pseudonymous Cowbell Pete, Kentucky Wonderbean, and fiddler “Timothy Cornrow from Ioway.” 
            </p>
            <p>
            	In the 1920s, radio broadcasting, like commercial country music, was a brand new cultural phenomenon, and Chicago was a center of explosive growth for the new medium. WLS (which stood for World’s Largest Store) was a new station begun by the Sears Roebuck Agricultural Foundation to serve the farm families of Illinois and the Midwest. Old familiar music--which is as good a definition of emergent country music as any--was a natural for helping them reach their target audience. With record-breaking cards, letters, and telegrams, rural and city audiences alike responded enthusiastically to the old-time fiddling, heart songs, and good-natured comedy that became a Saturday night staple on WLS. 
            </p>
            <p>
            	By 1930, Prairie Farmer magazine had purchased WLS, and steadily built the National Barn Dance into a Depression-era media empire. Along with four to five hours of folk and vernacular music programming on the air, the Barn Dance included two 2-hour live shows at the Eighth Street Theatre (weekly sell outs from 1932 to 1957), a one-hour coast-to-coast broadcast on the NBC-Blue network, an active artist bureau that booked personal appearances for Barn Dance stars throughout a five-state region, annual WLS souvenir yearbooks and, from 1935 to 1937, a weekly fan magazine, Stand By, featuring stories and photos of Barn Dance artists. The Stars of the Saturday night program could also be heard throughout the week on WLS, and other entertainers from the weekly schedule joined the “Hayloft Gang” on Saturday nights. At the height of its popularity in the years just before and during World War II, the National Barn Dance cast numbered 70 to 100 entertainers. During this same period, the cast of WSM-Nashville’s Grand Ole Opry was about half as large. 
            </p>
            <p>
            	It should be noted that from the beginning, Chicago was second only to New York as a center of production for the record industry. By the 1930s and ‘40s, some of the biggest names in country music–Bob Wills, Delmore Brothers, Bill Monroe–travelled to the Windy City to record their hits. Nationally, however, the record industry and the broadcast industry saw themselves as rivals. For instance, some country music stars on Cincinnati’s powerful WLW were booted from the airwaves for violating that station’s ban on making records. But not in Chicago, at least not for WLS. National Barn Dance stars were some of the most frequently recorded country musicians prior to 1942. Record labels like Gennett and Conqueror eagerly identified discs as recordings of National Barn Dance artists. Ironically, some of WLS’s earliest recording stars have faded into obscurity: e.g., Tommy Dandurand’s Barn Dance Fiddlers, banjo songster Chubby Parker, or the Three Little Maids (the Overstake sisters from Decatur, Illinois. 
            </p>
            <p>
            	Some WLS stars from the 1930s had a great deal of regional success that propelled them to great popularity at other outlets. The harmony duo of Karl & Harty and their larger ensemble, the Cumberland Ridge Runners, left WLS at the height of their popularity in the mid-30s for WLW-Cincinnati, before coming back to a long stint on the Suppertime Frolic at WJJD-Chicago. Slim Miller, the Ridge Runners’ original fiddler, became a long-time musical and comedic star for the Renfro Valley Barn Dance. The Girls of the Golden West (Milly and Dolly Good) also moved on to WLW, while the Dezurik Sisters, phenomenal yodelers, simutaneously did a series of radio transcriptions series in Nashville as the Cackle Sisters. 
            </p>
            <p>
            	The best known National Barn Dance stars are a few who, after establishing themselves in Chicago, went on to make their marks in other entertainment capitals. Bradley Kincaid, a ballad singer from Kentucky, was a radio fixture in New England. Little Georgie Goebel went from being a ukulele-strumming western singer on the Barn Dance to national fame on television. The Hoosier Hot Shots, a novelty swing band led by clarinet and slide-whistle, grew a national following in Chicago that they took to California after the war. Three country and western singers who established their careers at WLS were later elected to the Country Music Hall of Fame. Gene Autry left Chicago in 1934 for Hollywood, while Red Foley ended up in Nashville after World War II. Patsy Montana (Rubye Blevin) spent the peak years of her career in Chicago, but was still an active performer out West until her death in 1996.
            </p>
            <p>
            	Still, Chicagoans should know the National Barn Dance artists whose careers were centered in Chicago, who were deeply loved by WLS listeners and the thousands of people who streamed to the city Saturday after Saturday in hopes of getting a ticket to the live show at the Eighth Street Theatre. Topping this list are Lulu Belle & Scotty, a sweet-singing and joke-cracking husband and wife team, along with cowboy singer, fiddler, and square dance caller Arkie the Arkansas Woodchopper. Their respective tenures on the Barn Dance lasted through three full decades. Other long-time favorites included the Prairie Ramblers, a western swing band long associated with Patsy Montana, that thrived at WLS even after Patsy headed west. Like the Prairie Ramblers, whose service at WLS was interrupted by engagements in other cities, the harmony duo of Mac & Bob (Lester McFarland & Robert Gardner) were fixtures on WLS and the Barn Dance from the 1930s into the ‘50s. 
            </p>
            <p>
            	This little sketch only scratches the surface. After the war, the National Barn Dance lost its country music dominance to Nashville’s Grand Ole Opry. But such notable musicians as Johnny Frigo (a jazz fiddler who did a country turn with the Sage Riders), Dolph Hewitt, the Beaver Valley Sweethearts, and Captain Stubby & the Buccaneers held forth at the Old Hayloft up through the end of the WLS National Barn Dance in 1960.  	
            </p>
            Reference:
            	Paul Tyler. "The Rise of Rural Rhythm." In Hayloft Gang: The Story of the National Barn Dance, pp. 19-71. Ed. By Chad Berry. University of Illinois Press, 2008.

         `
        }
      ]
    }
  ]
  constructor(private _RouteTitles:RoutesTitles){
    _RouteTitles.name.next('Country Music in Chicago');
  }

  ngOnInit() {
  }

}
