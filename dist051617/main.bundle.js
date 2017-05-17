webpackJsonp([1,4],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(route) {
        this.route = route;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__(276),
        styles: [__webpack_require__(267)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object])
], AboutComponent);

var _a;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
        this.zoom = 16;
        this.lat = 41.964216;
        this.lng = -87.686021;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__(278),
        styles: [__webpack_require__(269)]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routes_app_routes_titles_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Genre1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Genre1Component = (function () {
    function Genre1Component(_RouteTitles) {
        this._RouteTitles = _RouteTitles;
        this.mainevents = [
            {
                title: 'House Music Conference',
                description: "The Chicago Department of Cultural Affairs and Special Events will host a House Music Conference on Thursday, May 25 and Friday, May 26 at the Chicago Cultural Center for musicians, DJs and industry participants. Admission to the conference is free, and registration is not required. Full schedule available <a href=\"https://www.cityofchicago.org/city/en/depts/dca/supp_info/house_music.html\" target=\"_blank\">here</a>",
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
                        description: "\n\t\t      \t<p>This panel, moderated by Lauren Lowery, will look back at the history of the scene, ongoing gender inequality, evolving technologies, and industry trends to inform the possible future of House Music as a cultural practice. How are new generations accessing historical knowledge? What are the pioneers of the past, as well as present House Music successors doing to support and cultivate a new generation of practitioner today? It is presented in collaboration with Old Town School of Folk Music\u2019s Soundtrack of the City. </p>\n\t\t      \t<p>\n\t\t      \t\tView the <a href=\"https://www.cityofchicago.org/city/en/depts/dca/supp_info/house_music.html\" target=\"_blank\">full schedule</a> of panels and workshops for House Music Conference on Thursday, May 25 and Friday, May 26\n\t\t      \t</p>\n\t      \t",
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
                        description: "<p>Boogie McClarin guides an exploration of movement history, concepts, approaches and social dance practices that accompany the global phenomenon born of Chicago's rich heritage - House Music and Dance Culture.</p>",
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
                        description: '',
                        link: '',
                        tabs: [
                            {
                                tabname: 'About',
                                title: 'Chicago House Legacy Project (featuring special guests) - With Introduction from Old Town School’s Kim Davis',
                                image: '',
                                content: "\n\t\t\t\t      <p>\n\t\t\t\t      \tChicago House Legacy Project is a DCASE commissioned band led by musical director Jerry C. King. The project performs classic Chicago House Music hits live using new arrangements and often including the original singers and musicians of those seminal songs. Apart from the classics, the project also looks to develop new emerging talent and write new music to release and debut live at the Chicago House Party event.  \n\t\t          </p>\n\t\t          <p>\n\t\t            The ensemble consists of: Jerry C. King (Musical Director/Keys), Steve \u201CMiggedy\u201D Maestro (DJ/ 106.3/Assistant Musical Director), Day Rock (Bass), Chuck Lacy (drums), Duane \"Rude\" Jones (guitar), Gus Lacy (keys), Phillip Glover (2nd drum), Sam Eli Glover (2nd bass).\n\t\t          </p>\n\t\t          <p>\n\t\t            Featured artists lineup: Billy Monroe, Faith Howard with dancers Faith Rebecca &amp; Sarah Lloyd, Jameisha Trice, Andrea Love, Dawn Williams, Gus Lacy, Carla Prather, Lorenzo Owens, Kennedy Simone, with special guest performance by Curtis Mcclain and Ivelisse Diaz.\n\t\t          </p>\n\t\t          <p>\n\t\t            Background Vocalists include: Melody Cowan, K'mar, Bernetta Donalson, and Robert Townsend, with special background vocalists modifier Tommy Thumbs \"E.S.P.\"\n\t\t          </p>\n\t\t          <p>\n\t\t            Hosted by: Dana Devine, Kim Jay, and Lady Laronda Maestro\n\t\t          </p>\n\t\t          <p>\n\t\t            <a href='https://www.cityofchicago.org/city/en/depts/dca/supp_info/hlp.html' target='_blank'>Full schedule &amp; lineup</a> \n\t\t          </p>\n\t\t         "
                            },
                            {
                                tabname: 'Essay',
                                title: 'Chicago House',
                                image: '../assets/mdm.jpg',
                                content: "\n\t\t          \t<h5>Lauren Lowery<br>Co-Founder and Chief Archivist, Dance Music Archive<br>\n\t\t\t\t\t\t\t\thousemusicarchive.org</h5>\n\t\t\t          <p>\n\t\t\t          \tHouse Music is a Chicago born musical art form that combines electronically-generated sounds, vocals and samples from genres such as jazz, blues, disco and gospel; which when added to the foundation of the drum beat and synth bass line has become a global juggernaut.  This spiritual force was birthed in Chicago\u2019s underground music scene in the late 70\u2019s and early 80\u2019s in the iconic club The Warehouse. The music brought together cultures, races, ages and alternative orientations like no other medium of that day.\n\t\t\t          </p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tThe story of the House Music in Chicago is not short, nevertheless this summary pays homage to the pioneers both dead and alive and the great Chicago institutions that nurtured the genres rise, aided in its fall and supported its resurgence.\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tBlack Music Past shapes Chicago\u2019s Black Music Future\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tThe sounds of Soul Music from artists like James Brown took a turn in 1967 to a \u201Cfour-on-the-floor\u201D rhythm that led to the birth of funk, R&B and disco. By the mid 70\u2019s, European influences using electronic sounds from the German group Kraftwerk and disco hit\u2019s including \u201CI Feel Love\u201D from Donna Summer and Giorgio Moroder changed the city and the country\u2019s tone from Civil Rights to Human Rights and the music followed suit.\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tChicago \u201CHouse Music\u201D was aptly named for the underground members-only gay club The Warehouse located at 208 South Jefferson. Owner and Businessman Robert Williams arrived from New York City to Chicago and brought the legendary Frankie Knuckles to create a powerful sound-system-fueled dance music scene at what was then an almost empty three story West Loop warehouse. The demise of American disco, a decidedly Black, Gay and Drug associated music form, created an opportunity for those alternative communities to build a new sound and a new era of collaboration. \n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tChicago House Music Desegregates\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tDJ Frankie Knuckles was a Chicago area superstar when the Warehouse closed in 1982. By 1983, the election of Chicago\u2019s first Black Mayor, Harold Washington created an energy and optimism in Chicago\u2019s youth and alternative communities. Mr. Williams opened a new club The Music Box and in 1983 Frankie took his fame and followers to his own club the Powerplant at 1015 North Halsted.  Like the Warehouse, these Chicago addresses in the late 70\u2019s and early 80\u2019s were industrial, dark and empty, under-the-radar and perfect for after-hour events. These clubs and the sounds that emerged brought teens and twenty-something straight kids together with Black, Gay, Latino and White adults all immersed in lyrics that suggested they should \u201CBring Down the Walls\u201D and \u201CBrighter Days\u201D were to come. More explicit content included in songs like \u201CBaby Wants to Ride\u201D and \u201CWaiting on My Angel\u201D unified the DJ and dancers in spirit and in movement. The songs were hopeful as was the era. Gays were open and free in a space where straights did not judge, stare or become violent. Blacks, Whites, Asians and Hispanics became one with the music and in-turn created an atmosphere where unity was bigger than difference.\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tThe Chicago DJ Becomes the Star\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tChicago area superstars included DJ Ron Hardy, the resident DJ at the new club the Music Box on 16th & South Indiana, the DJ\u2019s of Chicago radio station WBMX\u2019s Hot Mix 5 including Farley \u201CJackMaster\u201D Funk, Mickey \"Mixin\" Oliver, Ralphi Rosario, Kenny \"Jammin\" Jason, and Scott \"Smokin\" Silz, the creator of the House Music Anthem \u201CMove Your Body\u201D DJ/producer Marshall Jefferson, the House group Fingers Inc. which included DJ and producer Larry Heard, vocalist Robert Owens \u201CMystery of Love\u201D, DJ Jesse Saunders and Musician Vince Lawrence who pressed the first vinyl House Music record \u201COn and On\u201D in 1984 , vocalist and producer Jamie Principle and DJ/artist/producer Steve \u201CSilk\u201D Hurley whose 1986 hit \u201CJack Your Body\u201D became the first Chicago House Music artist to have a song hit number one on the UK charts. The DJs used turntables and beat machines including the iconic Roland 808 to launch music careers that many of these ordinary Chicagoans could never have imagined.\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tChicago House Music though made popular by the early DJs was largely driven into the communities by the radio stations, record stores and teenage word of mouth. Frankie Knuckles and Ron Hardy\u2019s sounds influenced teenagers at Chicago area high schools including Kenwood Academy in Hyde Park - 5015 South Blackstone Avenue, Lindblom Technical in Englewood - 6130 South Wolcott Ave. and Mendel Catholic in Roseland - 111th St & S King Drive. The talent and creativity from South and West Side youth became evident as basement beats led to the brilliance of teenage DJs, vocalists and producers including Kim Salter (K/Joy) \u201CLike This\u201D - Kenwood Academy, Producer/Filmmaker Irwin Eberhart (Chip E.) \u201CIf You Only Knew\u201D - Kenwood Academy, heralded female DJ Lori Branch - Lindblom Technical and West Side DJ phenom Gene Hunt - Farragut High. Mendel Catholic High School has a special place in House Music History in that its Mendel Bi-Level parties held from 1976 to 1988 launched the careers of many now heralded House Music DJ\u2019s. Thousands of kids from around the city travelled to Mendel to dance to House Music for over a decade. The founder and producer of the event, Kirkland Townsend who raised millions of dollars for his alma mater, later became the business manager for the legendary DJ Collective \u201CThe Chosen Few\u2019s\u201D DJ Jesse Saunders and DJ Wayne Williams and later a radio personality in New York City. \n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tChicago Supports its New Industry\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tChicago area radio stations, record stores and record labels including Trax Records (using the old Chess Records pressing equipment) and DJ International were also instrumental in bringing House Music to Chicago area youth. The high powered WBMX 102.7FM in Chicago was the first to highlight Chicago House Music prominently in its weekly rotation. Rarely heralded yet critical marketing for DJ\u2019s, promoters and producers were Chicago\u2019s College radio stations including WNUR 89.3FM, Northwestern University\u2019s Streetbeat show which began highlighting House and Hip Hop Music to the north shore and north suburbs in 1983, WHPK 88.5FM University of Chicago\u2019s radio station and WKKC 89.3FM, Kennedy King Community College\u2019s evening show whose signal reached the south side neighborhoods. WNUR\u2019s T. Chablis (Tim Harris) and WKKC\u2019s PinkHouse became important Chicago area radio personalities by creating events and collaborating with artists. Record stores including Importes Etc. (711 South Dearborn), Wax Trax, Loop Records and Gramaphone Records on the north side are credited with shortening the name of the club The Warehouse, to music heard at \u201CThe House,\u201D creating a DJ culture that sold millions of vinyl records throughout Chicago.\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t1988 House Music Party Promotion Poster | Courtesy of @DanceMusicFound \u2013 Gene Hunt Collection\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tChicago\u2019s small venues and clubs including the Playground in Chicago\u2019s South Loop, Jeffery Pub in South Shore (one of the longest running gay clubs in the country) C.O.D\u2019s and AKA\u2019s in Rogers Park the Hyde Park Athletic Club, and many others that have come and gone kept the music alive over the years. The late 80\u2019s and 90\u2019s saw increasing attacks on the underground music scene which was the backbone of the genre. The AIDS epidemic, coupled with dance music drug culture unfortunately ended the lives of many talented artists. Finally, in 2000, Chicago\u2019s City Council enacted an ordinance banning unlicensed dance parties which slowly silenced DJs and promoters forcing them to find new opportunities across the country. Thanks to the overseas success of DJ Frankie Knuckles and the proliferation of cassette tapes, increasing technology, over and under-the-table label deals by label owners Rocky Jones and their representatives including Attorney Jay B. Ross, House Music exploded in Europe providing gigs as artists, executives and remixers.\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tApril 2000 Chicago City Council Anti-Rave Ordinance | Courtesy of @DanceMusicFound\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tChicago politics and Chicago\u2019s mostly segregated neighborhoods shaped how House Music flourished, exploded overseas, then died in its neighborhoods. The proliferation of digital and emerging electronic mediums has catapulted House Music from its Chicago roots into a global power influencing dance, fashion and media. Chicagoans have mastered the genre winning Grammy\u2019s and chart topping hits with international artists including Michael Jackson and most recently Kanye West. Unlike early Chicago culture, in the House Music era, sexuality and heritage were not a deterrent to creativity and learning. This ideology and its transformative muscle has thrust House Music to its current massive pop presence and will undoubtedly continue to drive its future.\n\t\t         \t"
                            }
                        ]
                    }
                ]
            }
        ];
        _RouteTitles.name.next('Chicago House Legacy Project');
    }
    Genre1Component.prototype.ngOnInit = function () {
    };
    return Genre1Component;
}());
Genre1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'genre1',
        template: __webpack_require__(281),
        styles: [
            "\n  \tmd-card {\n\t\tmargin: 1% auto;\n\t}\n\t.genre1-full {\n\t\tmax-width: 700px;\n\t\tmargin: 1% auto;\n\t}\n\t.genre1 {\n\t\twidth: 92%;\n\t\tmargin: 1% auto;\n\t}\n\t@media only screen and (min-width: 768px){\n\t\tmd-card {\n\t\t\tmargin: 1%;\n\t\t}\n\t\t.genre1 {\n\t\t\twidth: 40%;\n\t\t\tmargin: auto;\n\t\t\tdisplay: inline-grid;\n\t\t}\n\t}\n\t.mainevent1 .event1image {\n\t\tbackground-image: url('../assets/mdm.jpg');\n\t\tbackground-size: cover;\n\t}\n\t.mainevent2 .event1image {\n\t\tbackground-image: url('http://placehold.it/200/000000/ffffff?text=CHLP');\n\t\tbackground-size: cover;\n\t}\n\t.mainevent2 .event2image {\n\t\tbackground-image: url('http://placehold.it/200/000000/ffffff?text=CHLP');\n\t\tbackground-size: cover;\n\t}\n\t.lead {\n\t\tdisplay: block;\n\t\tcolor: #555;\n\t}\n\t.event-container {\n\t\tmax-width: 700px;\n\t\tmargin: 0 auto;\n\t}\n\t.card-image {\n\t\tmax-width: 100%;\n\t\tmargin-bottom: 16px;\n\t}\n\th2 {\n\t\tfont-family: 'Roboto Condensed', sans-serif;\n\t}\n  "
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_routes_app_routes_titles_service__["a" /* RoutesTitles */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_routes_app_routes_titles_service__["a" /* RoutesTitles */]) === "function" && _a || Object])
], Genre1Component);

var _a;
//# sourceMappingURL=genre1.component.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routes_app_routes_titles_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Genre2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Genre2Component = (function () {
    function Genre2Component(_RouteTitles) {
        this._RouteTitles = _RouteTitles;
        this.events = [
            {
                genre: 'genre2',
                title: 'Blues’n In Bronzeville',
                lead: 'In partnership with Night Out In The Parks, presented by the Chicago Park District',
                admission: 'Free & open to the public',
                location: 'Ellis Park (535 E. 35th St.)',
                date: 'Thursday, June 8',
                time: '6-8pm',
                image: 'http://placehold.it/700x200/000000/ffffff?text=Blues’n In Bronzeville',
                description: "Blues'n In Bronzeville brings authentic blues right back to where it all began. Blocks from Muddy Waters' home and Honorary Sam Cooke Way, this festival will feature performances from old school greats and some new voices on the scene.",
                link: '',
                tabs: [
                    {
                        tabname: 'Wayne Baker Brooks',
                        title: 'Wayne Baker Brooks',
                        image: '../../assets/Wayne Baker Brooks.jpg',
                        content: "\n            <p>\n\t          Wayne Baker Brooks is considered one of today\u2019s top guitarists whose signature style combines powerful vocals with liquid fire guitar playing that honors his rich blues heritage yet effortlessly expands the boundaries of the genre.\n\t        </p>\n\t        <p>\n\t          Born and raised in Chicago amongst the most prolific blues legends and blues masters in the world, Wayne Baker Brooks\u2019 blues roots may run deeper and wider than the Great Lakes themselves.\n\t        </p>\n\t        <p>\n\t          Chicago Blues laid the foundation to Wayne's innovative style. Growing up, Brooks was a regular visitor to such historic places as Chess Studios, Checkerboard Lounge, Wise Fools Pub, and many other blues landmarks at which he witnessed many live performances by blues masters like Buddy Guy, Jr. Wells, Luther Allison, KoKo Taylor, the great Muddy Waters, and his father. The youngest son of blues master Lonnie Brooks - Wayne Brooks was literally born into the blues!\n\t        </p>\n         "
                    },
                    {
                        tabname: 'Doktu Thute Muuzic',
                        title: 'Doktu Thute Muuzic (formerly known as Roy Hightower)',
                        image: '../../assets/Doktu.jpg',
                        content: "\n            <p>\n\t          Doktu Rhute Muuzic (formerly Roy Hytower) has enjoyed a full career from his late teens to the present day spanning over fifty years. His first experiences were singing around Mobile, Alabama. In 1962 he came to Chicago, replacing Mighty Joe Young as rhythm guitarist for Otis Rush. Often adopting a soul-slanted sound, Hytower cut a handful of 45rpm singles in the 1960s and '70s for several local labels such as Avin, Expo, Brainstorm, and Jiffy. In recent years Roy Hytower has self-released a couple of CDs under his new moniker, Doktu Rhute Muuzic.\n\t        </p>\n         "
                    },
                    {
                        tabname: 'Shoji Naito',
                        title: 'Shoji Naito',
                        image: '../../assets/ShojiNaito.jpg',
                        content: "\n            <p>\n\t          \u201CShoji Naito is an amazing musician who authoritatively knows the delicate nuances of the Chicago blues on both the harmonica and guitar. He is also a kind and generous person, and that comes across on the bandstand. His sterling backing work for his longtime employer, the legendary Eddy Clearwater, stands testament to his professional quality. Shoji can deliver a powerful Little Walter style instrumental on harmonica or flawlessly back other harmonica players on guitar, as he frequently does with Morry Sochat, or any number of great harmonica players at Joe Filisko\u2019s advanced harmonica class at the Old Town School Of Folk Music. Whatever musical situation Shoji finds himself in, he will always rise to the occasion.\u201D - Bob Corritore\n\t        </p>\n         "
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
                        content: "\n            <p>\n\t\t          The only music museum in Chicago and Illinois, the Chicago Blues museum is the only history institution dedicated to the history of the blues and American popular music as it relates to Chicago. Since 1991, the museum has focused on preservation and evolution of the blues and related music genres through education and performance programs.\n\t\t          <a href=\"https://www.facebook.com/Chicago-Blues-Museum-208904142563117/\" target=\"_blank\"><i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i></a>\n\t\t        </p>\n         "
                    },
                    {
                        tabname: 'Barry Dolins',
                        title: 'Barry Dolins',
                        image: '',
                        content: "\n            <p>\n\t\t          Barry Dolins professionally served the public sector as educator, arts presenter and public servant. Mr. Dolins also worked in the music business as record and radio producer. His love for the blues began as a teenager working the Maxwell Street market as a teenager and was dedicated to presenting an authentic vision of the Chicago Blues tradition in all he did from the classroom to a festival location.\n\t\t        </p>\n\t\t        <p>\n\t\t          Mr. Dolins first blues experience was at the Maxwell Street market where he was introduced to the lives of Pork Chop Hines and Blind Jim Brewer to name a few. His experiences also brought him in contact with the recorded music of Lightnin\u2019 Hopkins, Gene Ammons, Duke Pearson, and many other blues and jazz greats via the sounds playing from the back of Rev. Johnnie Johnson\u2019s station wagon where much of the music was played to entice the potential consumers on the street. Retail provided a unique perspective in the buying habits of the public and an inside look at the commercial aspect of the record industry while serving as special products buyer at hear Here Records in Evanston, Il.\n\t\t        </p>\n\t\t        <p>\n\t\t          This experience motivated Mr. Dolins to investigate the roots of Chicago\u2019s musical heritage. As a graduate student at DePaul University he completed his Master\u2019s degree in history where he wrote his thesis titled House party Piano: an Underground Music in Chicago, 1913-1928.  As an educator Mr. Dolins taught middle school, high school, and adult education at Loyola University. He also helped found The Sirens records with his brother Steven. Mr. Dolins continued his graduate work at the University of Pennsylvania studying Folklore and Folklife.\n\t\t        </p>\n\t\t        <p>\n\t\t          Returning to Chicago Mr. Dolins was granted an Illinois Arts grant to create a series of blues festivals. This program gave him the opportunity to work for the Mayor\u2019s Office of Special Events in 1984. Here he developed the Chicago Blues Festival into an internationally known festival as well as develop a Neighborhood Festival program that serves all communities in Chicago. While working for the city Mr. Dolins returned to academia and taught presenting and producing events for the Arts management Department at Columbia College of Chicago. \n\t\t        </p>\n\t\t        <p>\n\t\t          Since Mr. Dolins retirement as Deputy Director of the Mayor\u2019s Office of Special Events in 2010 he has been teaching a History of Rock and Roll and Blues and Jazz Appreciation class as an adjunct professor at Dominican University in River Forest, Il. During his retirement he has also created a Chicago Blues tour of city blues landmarks, a blues series at the Old Town School of Folk Music, traveled to Shanghai, China for the World Expo, Aomori, Japan to celebrate the 10th Anniversary of the Japan Blues Festival he created as well as Prague Czech Republic and Cognac, France to present blues programs.\n\t\t        </p>\n         "
                    },
                    {
                        tabname: 'Essay',
                        title: '',
                        image: '',
                        content: "\n            <p>\n\t\t          Chicago Blues is the product of over 100 years of blues music history. Blues music itself can be traced back to the triangle trade of the seventeenth century and rooted in the emancipation of the African slaves.  The Africans, who crossed the Atlantic Ocean in the bottom of slave ships brought their distinct music with them. This music was first heard in the fields of servitude as work songs, hollers and arhoolies. These rhythms were used to help the slaves overcome the hardship of working in the fields, from the Piedmont region of the southeast to the cotton fields of the Deep South. The National Geological Society defines the Mississippi Delta Region as the land from Mobile, Alabama to Galveston, Texas with its pinnacle in Memphis, Tennessee. The blues delta itself is the area made up by the confluence of the Yazoo and Mississippi Rivers. It is in the blues delta region where the music of Charley Patton, Son House, Robert Johnson, and Muddy Waters originated on the Dockery and Stovall plantations. It was also in the blues delta region where boogie-woogie piano played a significant role in the Turpentine towns. These blues traveled from the Deep South to the south and west sides of Chicago during the Great migration starting in 1916; today, blues music thrives primarily in the clubs of Chicago\u2019s north side.\n\t\t        </p>\n\t\t        <p>\n\t\t          While the blues can be found throughout the Delta, the music and culture progressed north, giving a voice to the African American community when they migrated to Chicago\u2019s Bronzeville during the early part of the twentieth century. It was in the south side brownstones where house parties were prevalent during the twenties and thirties. The piano playing of Jimmy \u201CPapa\u201D Yancey influenced boogie-woogie icons Albert Ammons and Meade Lux Lewis who would bring this rocking rhythm to New York\u2019s Carnegie Hall in 1938 at the \u201CSpirituals to Swing concert\u201D produced by John Hammond. These house parties provided the music that kept a community together through a time of racial strife, through the Race Riots of 1919, and through the Great Depression. Chicago became the \u201Cmusic capital of the world,\u201D and home to musical greats like King Oliver, Louis Armstrong, Jimmy Noone and many other greats during the twenties and thirties. The music can be heard up and down the south side \u201Cstroll.\u201D A known myth was if you just held up a horn at the intersection of 31st and Grand blvd. the greatest jazz could be heard from that horn. Throughout Bronzeville there were many theaters, cabarets, and cafes. In many homes of the black belt, house parties were held as community rituals, which helped the residents bind together to overcome life\u2019s adversity.\n\t\t        </p>\n\t\t        <p>\n\t\t          This foundation made Chicago the \u201CMecca\u201D or the \u201CPromised Land.\u201D Chicago became a recording center for the musicians, particularly the blues musicians of the south side as well as for many of the southern musicians that would travel north for the opportunity to record. The port of entry was Maxwell Street where Papa Charlie Jackson lived and sang of life in the market. The headquarters at the time was at 35th and State the home of Tampa Red, the Guitar Wizard Tampa Red, the Guitar Wizard\u2019s. It was here a clique of musicians would congregate, rehearse and wait for record producer Lester Melrose to hear these rehearsals and provide the musicians with the opportunity to record. These recording sessions would be commonly referred to as the \u201CBluebird\u201D sound. The sessions by Tampa, Sonny Boy Williamson #1, Merline Johnson, and Big Bill Broonzy provided the Chicago Blues sound that became the basis for the Chicago blues recording legacy.\n\t\t        </p>\n\t\t        <p>\n\t\t          The \u201CBluebird\u201D sound became the standard for blues recording, showcasing vocalists, guitar players, piano players, harmonica players, and horn ensembles. This music popularized the blues to the community of the south side and influenced the African American record buying public from coast to coast. As a result a market for the blues was created. Although there was a recording ban during World War II the scene was set for Chicago to become a center for independent record production in the Post War era. With the coming of the Atomic Age came the explosion of Chicago\u2019s electric blues scene. The south side had dozens of blues clubs that provided the platform for the numerous musicians moving to the industrial city in the north after the war. It was an outlet for the booming African American community that not only filled the south side black belt but then moved west from Maxwell Street down Lake and Madison streets.\n\t\t        </p>\n\t\t        <p>\n\t\t          With the advent of the Post War era, African American recording blues performers brought their music from the south to the industrial north. The music changed with the times and could be heard on the streets of Maxwell Street and then recorded by Bernard Abrams for his Ora Nelle Records, which was located at his Maxwell Street Radio and Record shop. The label only operated for a couple of years but it was at his studio where Little Walter first recorded. The blues business became an important Chicago industry when Leonard and Phil Chess, brothers and Polish immigrants, left the scrap yards of the south side and laid the tracks for the archetype of Chicago blues and the foundation for Rock and Roll. Chess moved their operation from South Cottage Grove Avenue to 2120 S. Michigan Avenue in the area that would later be known as Record Row. The label featured some of the greatest blues performers in blues history. The label became the home for Muddy Waters, Howlin\u2019 Wolf, Little Walter, Sonny Boy Williamson II, Chuck Berry, Bo Diddley, Etta James, Koko Taylor and many more post war blues performers.\n\t\t        </p>\n\t\t        <p>\n\t\t          Following in the footsteps of Chess Records, Vee Jay Records was formed. Vee Jay, the African American owned and operated label run by Vivian Carter and Jimmy Bracken featured the recordings of Jimmy Reed, John Lee Hooker, and the Staple Singers. The label featured artists that not only were blues, but gospel and even in the sixties distributed recordings by the Beatles and the Four Seasons. The industry flourished throughout the fifties. Independent labels like Parrot, J.O.B., and Cobra set the standard for the electric Chicago blues sound featuring artists like Snooky Pryor, Sunnyland Slim, Otis Rush and Magic Sam. Chicago set the standard for record production, radio play, and distribution for the modern blues scene. Record Row on south Michigan Avenue not only provided headquarters for the labels but record distributors like the Leaner brothers, United Records. Record Row was the music capital of Rhythm and Blues. \n\t\t        </p>\n\t\t        <p>\n\t\t          The sixties brought a dramatic cultural shift to the blues community. Not only was the nation going through social upheaval, but the blues scene was going through a social change. At a time when the African American community was looking towards Afro-centric sounds of experimental jazz, blues became a cross-cultural expression for the young white audience, both as listeners and performers. The founding of Delmark Records by Bob Koester and the opening of live blues clubs on north Wells street created a whole new audience for the blues. Delmark gave a voice to artists like Junior Wells, Magic Sam, Jimmy Dawkins, Luther Allison, Jimmy Johnson, and J.B. Hutto. The discs could be sold at the Jazz Record Shop, which became the center for all those who loved the blues. Labels like Alligator, Earwig and The Sirens were all bit by the blues bug and released records by new or under appreciated artists like Hound Dog Taylor, the Jelly Roll Kings or masters like Homesick James, David Honey Boy Edwards, Sunnyland Slim, and Erwin Helfer. These labels kept the blues flame burning so the next generation would have a place to release their music. Artists like Toronzo Cannon, Sharon Lewis, Linsey Alexander, and Mike Wheeler are now keeping the blues alive for the twenty-first century.\n\t\t        </p>\n         "
                    },
                ]
            }
        ];
        _RouteTitles.name.next('Blues’n In Bronzeville');
    }
    Genre2Component.prototype.ngOnInit = function () {
    };
    return Genre2Component;
}());
Genre2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'genre2',
        template: __webpack_require__(32),
        styles: [
            "\n\t.genre2 {\n\t\t// width: 90%;\n\t\tmargin: 1% auto;\n\t}\n\t@media only screen and (min-width: 900px){\n\t\t.genre2 {\n\t\t\twidth: 42.5%;\n\t\t\tmargin: 1%;\n\t\t\tdisplay: inline-grid;\n\t\t}\n\t}\n\t.event1image {\n\t\tbackground-image: url('http://placehold.it/200/000000/ffffff?text=BLUES');\n\t\tbackground-size: cover;\n\t}\n\t.event2image {\n\t\tbackground-image: url('http://placehold.it/200/000000/ffffff?text=BLUES');\n\t\tbackground-size: cover;\n\t}\n\t.card-image {\n\t\tmax-width: 100%;\n\t\tmargin-bottom: 16px;\n\t}\n  "
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_routes_app_routes_titles_service__["a" /* RoutesTitles */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_routes_app_routes_titles_service__["a" /* RoutesTitles */]) === "function" && _a || Object])
], Genre2Component);

var _a;
//# sourceMappingURL=genre2.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routes_app_routes_titles_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Genre3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Genre3Component = (function () {
    function Genre3Component(_RouteTitles) {
        this._RouteTitles = _RouteTitles;
        this.events = [
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
                        content: "\n            <p>\n              20 years after Reginald Robinson\u2019s emergence as a young, self-taught, against the grain pianist and composer, he has become an internationally recognized pianist, recording artist and educator.\n            </p>\n            <p>\n              His love for music started in 1984 with his brother Marlando playing Big band jazz records at home and then on to ragtime two years later in 7th grade when a city funded arts program (Urban Gateways) gave an assembly with a small jazz ensemble. The assembly was led by jazz trumpeter Orbert Davis and included in the band other jazz luminaries like Ari Brown. In the middle of the show the group played a sample of Scott Joplin\u2019s \u201CThe Entertainer\u201D and after hearing it Reginald decided this was the kind of music he wanted to play.\n            </p>\n            <p>\n              In 2004, he was awarded the rare and distinguished John D. &amp; Catherine T. MacArthur Award for his innovation in ragtime.\n            </p>\n            <p>\n              Reginald has performed as a soloist internationally and has performed as guest artist with Orbert Davis Chicago Jazz Philharmonic and The Chicago Sinfonietta. In addition he has performed with various smaller ensembles such as: Accessible Contemporary Music, Andrew Bird\u2019s Bowl of Fire, Fulcrum Point and the Arts Center Jazz Ensemble. Reginald occasionally leads his own band The Reginald Robinson Jazztet.\n            </p>\n         "
                    },
                    {
                        tabname: 'Dee Alexander Quartet',
                        title: 'Dee Alexander Quartet',
                        image: '../../assets/deealexander-magnum.jpg',
                        content: "\n            <p>\n              Dee Alexander is one of Chicago\u2019s most gifted and respected female vocalist/songwriters. Her talents span every music genre, from Gospel to R&B, from Blues to Neo-Soul. Yet her true heart and soul are experienced in their purest form through her performance of Jazz music. From a soft, sultry traditional ballad, to a contemporary Jazz-Funk groove; from a high flying swing, to a scat-filled romp, Dee Alexander delivers each style with a passion and love of music that comes across in each and every note, and with a style and grace that is truly her own. Besides being a phenomenal headliner in her own right, Dee has shared the stage with Ahmad Jamal, David Sanborn, Earl Klugh, Gerald Albright, Roy Ayers, Joshua Redman, and the O\u2019Jays. Not being one to ever feel that the spotlight has to belong exclusively to her, Ms. Alexander has lent her considerable talents as a backup vocalist to the live performances of an array of many other well-known artists i.e., Michael Bolton, Phil Perry, Willie Clayton, and Zora Young. Dee has also formed the Evolution Ensemble which is an acoustic group that consists of string instruments and percussion with a strong emphasis on original compositions.\n            </p>\n         "
                    },
                    {
                        tabname: 'Essay',
                        title: '',
                        image: '',
                        content: "\n            <p>\n              In a given week in Chicago, you can readily experience the history of jazz \u2013 maybe not the entire history, but pretty darned close \u2013 with just a pair of open ears and a Ventra card. And, as a bonus, you can get a few snapshots of America\u2019s social history as well.\n            </p>\n            <p>\n              The earliest jazz migrated from New Orleans north. But while the first jazz recording took place in New York in 1917, it was in Chicago that the music really flowered. In the late 1910s, as jazz venues (primarily brothels) in New Orleans closed their doors, many musicians headed for Chicago, already home to thousands of transplanted African-Americans from the south: the music mirrored the Great Migration. Here the New Orleans cornet master King Oliver established his Creole Jazz Band \u2013 soon to feature the music\u2019s first genius, Louis Armstrong \u2013 which played regularly at the Lincoln Gardens on the south side. Before long, Oliver\u2019s music had spawned the first early-jazz offshoot, the \u201CAustin High [School] Gang\u201D \u2013 a group of white teenagers who emulated the music with enough variety to earn their own sobriquet.\n            </p>\n            <p>\n              Lincoln Gardens, which occupied the 400 block of E. 31st Street in Bronzeville, disappeared decades ago. But Tuesday nights at the Green Mill (Broadway at Lawrence), a band of young Chicagoans called The Fat Babies revisits the music created by Armstrong and the Austin High kids, with the same commitment and urgency that spurred that early jazz. And the Green Mill offers plenty of history of its own. The oldest nightclub in Chicago \u2013 and among the oldest Chicago businesses of any kind at its original location \u2013 the Mill flourished during Prohibition, when it was partly owned by one of Al Capone\u2019s henchmen. \n            </p>\n            <p>\n              By then, the music had shifted. Jazz had originally resembled a wild tapestry of different threads, with each instrument playing a separate line; by the 30s, the sound was morphing into a luxurious machine-tooled fabric, as the bands grew bigger and sleeker. New York had Duke Ellington and Kansas City had Count Basie. But a young Chicago clarinetist, Benny Goodman, assembled the orchestra that, in 1935, launched the Swing Era and created the jazz style that became America\u2019s popular music, in the years leading out of the Great Depression and then into World War II. You won\u2019t find too many Swing orchestras of that ilk these days. But you can find artists who, on occasion, channel the small groups that co-existed with those orchestras \u2013 artists such as reedmen Eric Schneider and Chris Madsen,  guitarists Andy Brown and Alfonso Ponticelli, vocalists Rose Colella and Kimberly Gordon \u2013 at clubs such as Andy\u2019s (11 E. Hubbard); Winter\u2019s (465 N. McClurg); and S.I.P. (4000 N. Southport). \n            </p>\n            <p>\n              In the 1940s, Bebop \u2013 the revolution wrought by Charlie Parker and Dizzy Gillespie \u2013 supplanted Swing, and along with such offshoots as Hard-bop and Soul-jazz, it ushered in a Silver Age for jazz. This was the era of Miles Davis and John Coltrane, Cannonball Adderley, the Jazz Messengers, and countless others \u2013 preserved on iconic recordings for Blue Note and other noteworthy labels (including Chess Records in Chicago) \u2013 that remain a lingua franca for many modern musicians. During this time, Chicago became a revered incubator of influential tenor saxophonists: folks like Von Freeman, John Gilmore, Johnny Griffin, Eddie Harris, and Clifford Jordan. Their legacy lives on at the Jazz Showcase (806 S. Plymouth) \u2013 the world\u2019s second-oldest jazz club under the same management \u2013 where 91-year-old proprietor Joe Segal still greets patrons at the door.\n            </p>\n            <p>\n              The 1960s saw social upheaval in the U.S. on an unprecedented scale, much of it centered on the historically segregated city of Chicago. The watchword was \u201Cfreedom,\u201D and jazz responded. In Hyde Park and points south, young musicians intent on experimenting with new and more open approaches to improvisation picked up on the \u201Cfree jazz\u201D work of Ornette Coleman and the expansive innovations of Cecil Taylor, John Coltrane, and one-time Chicago bandleader Sun Ra, and in 1965 formed the Association for the Advancement of Creative Musicians. It quickly came to symbolize the second wave of the jazz avant-garde; the initials \u201CAACM\u201D after an artist\u2019s name or album\u2019s title conferred a stamp of approval for rule-busting new music. And a commanding quintet, the Art Ensemble of Chicago, became the face of the AACM throughout Europe and then the rest of the world.\n            </p>\n            <p>\n              In keeping with the 60s\u2019 quest for self-determination, the AACM established a school for young musicians and sought to embody community values while raising the artistic awareness of the African-American community. And as one of the earliest musicians\u2019 DIY efforts, the AACM offered a model for other such organizations, most notably the Black Artists Group (BAG) in St. Louis and Asian Improv Arts (AIA) in the San Francisco area. The AACM continues to this day, and affiliated artists with it perform regularly throughout the city, often at Elastic Arts (3429 W. Diversey), Constellation (3111 N. Western), Norman\u2019s Bistro (1001 E. 43rd), and at the University of Chicago \u2013 where the Art Ensemble made one of its most famous recordings, in Mandel Hall, in 1972.\n            </p>\n            <p>\n              In the 1990s, the musicians of the AACM \u2013 specifically the late saxophonist and mentor Fred Anderson, whose new-music venue the Velvet Lounge still stands at 67 E. Cermak (though now a sports bar) \u2013 inspired a new wave of musicians that have once again made Chicago a global nexus for avant-garde experimentation as well as rollicking improvisation. As political and social events have leaned further right, the appetite for music that defies the establishment seems to have grown steadily larger for these artists. Names such as Ken Vandermark, Jeff Parker, Nicole Mitchell, Dave Rempis, Greg Ward, Mike Reed, Dee Alexander, Tim Daisy, and Tomeka Reid now resonate throughout the U.S., Europe, and parts of Asia and Africa. Check the schedules for such hotspots as The Hungry Brain (2319 W. Belmont), the Whistler California Clipper (1002 N. California), and Logan Center at the University of Chicago \u2013 as well as Elastic Arts, Constellation, and the Green Mill \u2013 and you can take part in the next chapter in Chicago jazz even as it\u2019s being written.\n            </p>\n         "
                    },
                ]
            }
        ];
        _RouteTitles.name.next('Chicago Jazz');
    }
    Genre3Component.prototype.ngOnInit = function () {
    };
    return Genre3Component;
}());
Genre3Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'genre3',
        template: __webpack_require__(32),
        styles: [
            "\n  \t.genre3 {\n\t\tmargin: 1% auto;\n\t\tmax-width: 700px;\n\t}\n\t.event1image {\n\t\tbackground-image: url('http://placehold.it/200/000000/ffffff?text=JAZZ');\n\t\tbackground-size: cover;\n\t}\n\t.card-image {\n\t\tmax-width: 100%;\n\t\tmargin-bottom: 16px;\n\t}\n  "
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_routes_app_routes_titles_service__["a" /* RoutesTitles */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_routes_app_routes_titles_service__["a" /* RoutesTitles */]) === "function" && _a || Object])
], Genre3Component);

var _a;
//# sourceMappingURL=genre3.component.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routes_app_routes_titles_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Genre4Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Genre4Component = (function () {
    function Genre4Component(_RouteTitles) {
        this._RouteTitles = _RouteTitles;
        this.events = [
            {
                genre: 'genre4',
                title: 'Folk Music - Chicago’s Legacy',
                lead: 'Part of Square Roots Festival, A true local music, craft beer and food festival in Lincoln Square presented by Old Town School of Folk Music and Lincoln Square Ravenswood Chamber Of Commerce',
                admission: 'Free & open to the public',
                location: 'Lincoln Avenue between Montrose and Wilson',
                date: 'Sunday, July 9',
                time: 'TBD pm',
                image: '../assets/Win and Frank Opening Night.jpg',
                description: 'TBD',
                link: '',
                tabs: [
                    {
                        tabname: 'Essay',
                        title: 'Folk Music & Chicago',
                        content: "\n            <h5>by Mark Guarino</h5>\n            <p>\n              Long before it earned the name \u201Cfolk,\u201D stringed instruments and traditional songs accompanied life in Chicago for decades. Labor halls, cafes, radical theaters, and living rooms were all places where fiddlers, banjoists, and guitarists performed on instruments that might have been bought locally through Sears-Roebuck and Company catalog. A major figure in the early century folk movement was Illinois poet Carl Sandburg. Through his 1927 anthology American Songbag and subsequent solo recordings, Sandburg is directly responsible for popularizing traditional songs and making song collecting a serious endeavor. \n            </p>\n            <p>\n              The galvanizing moment for stringed music in Chicago was April 19, 1924, the opening broadcast of what was then called the Barn Dance, a Saturday night program on WLS that station director Edgar L. Bill promoted as presenting \u201Cold-time fiddling, banjo and guitar music and cowboy songs,\u201D the kind of entertainment that he felt a farm audience would appreciate. The broadcast made Chicago the nation\u2019s commercial heart of country music through the end of the Second World War and produced stars like Gene Autry, Bradley Kincaid, Red Foley, Patsy Montana, Lily May Ledford, and Lulu Belle and Scotty, all of whom had prodigious recording careers.\n            </p>\n            <p>\n              The Barn Dance presented an imagined portrait of rural life through traditional songs, exaggerated characters, and country humor to both remind urban listeners of home and to affirm the traditional values held firm by listeners in rural outposts. Station folklorist John Lair, a native Kentuckian, is responsible for building this downhome fantasia that tied every song, dance routine, instrumental, and minstrel skit to an imagined mountaintop culture devoid of hardship or worry. \n            </p>\n            <p>\n              During this period Chicago became home for prestigious music gatherings, starting with the fourth annual National Folk Festival, an international event that used the term \u201Cfolk\u201D to mean indigenous cultures from the U.S. and abroad. Held at Orchestra Hall in Chicago on May 22-28, 1937, the event represented the first time it traveled north of the Mason-Dixon line. It highlighted folk cultures indigenous to the Midwest. The final night featured the Chicago Negro Group, a special choir of 750 voices featuring song leader Thomas A. Dorsey, the gospel music pioneer.\n            </p>\n            <p>\n              The Chicagoland Music Festival also took root in downtown Chicago starting in 1930. Held in Soldier Field, the early years were devoted to classical music and the patriotic marches of John Philip Sousa, but in later years it prominently entertainment as diverse as black church choirs from Bronzeville, yodelers, a square dance jamboree featuring 1,000 dancers, and a 78-year-old dulcimer player from Catlettsburg, Kentucky named Aunt Polly Triplett.\n            </p>\n            <p>\n              Chicago\u2019s folk music scene thrived starting the 1940s during the American folk revival. A catalyst for folk music\u2019s development in Chicago was \u201CI Come for to Sing,\u201D a successful and long-running folk revue in 1947 featuring Big Bill Broonzy, Studs Terkel, folk singer Win Stracke, and tenor Larry Lane that presented traditional folk and blues songs with Elizabethan ballads grouped under different themes that Terkel would highlight with narration. The revue brought folk music to Chicago\u2019s nightclub scene in 1952 when it debuted at the Blue Note, an integrated jazz club on Madison Street. \n            </p>\n            <p>\n              That development set the stage for the Gate of Horn, the nation\u2019s first folk music nightclub located in a cellar of the Rice Hotel at 755 N. Dearborn Street. Co-owned by Les Brown, an editor at Downbeat, and Albert Grossman, who would later manage Bob Dylan, the club opened its doors in February 1956. The Gate was meant to appeal to the same well-heeled crowd of after-hours professionals who were packing the downtown supper clubs and jazz lounges that had sprung up that decade. All the marquee artists of the era performed there: Josh White, Big Bill Broonzy, Odetta, Theodore Bikel, Brother John Sellers, Peggy Seeger, Judy Collins, Glenn Yarbrough, Barbara Dane, Martha Schlamme, and others. The Gate served as a showcase for Bob Gibson, one of the most popular artists of the folk revival. Gibson, who grew up in New York but moved to Chicago to play the Gate, was clean-cut, entertaining and slyly risqu\u00E9 \u2013 A perfect nightclub act whose virtuoso 12-string guitar playing would influence a later generation of musicians, particularly Roger McGuinn, David Crosby, and Bob Dylan.\n            </p>\n            <p>\n              While the Gate represented the commercial end of the folk boom, the Old Town School of Folk Music represented its traditional counterpart. The school\u2019s founders \u2014 Stracke, guitarist Frank Hamilton, organizer Dawn Greening, and administrator Gertrude Soltker, \u2014 were opposites in age and temperament, but their efforts created the longest-running folk school of its kind in the U.S. Opening in December 1957, the school would establish a community-based method of teaching based on Bess Lomax Hawes, a pillar of the West Coast folk scene. Instead of the conservancy approach that focused on the individual, the Old Town School emphasized learning by ear though songs, not notes. Instruments were there to accompany the songs and were not a means to an end by themselves, which allowed the music to become a social expression intended to contribute to a heightened sense of community.\n            </p>\n            <p>\n              By 1961, folk music concerts were being held throughout Chicago in prestigious venues like Orchestra Hall and the Ravinia Festival. That year the University of Chicago launched its annual folk festival, an event that, for some performers located in the most remote pockets of the rural South like Frank Proffitt, Almeda Riddle, Elizabeth Cotton, and Mississippi Fred McDowell, served as the first time they performed before a large city audience.\n            </p>\n            <p>\n              The Old Town School is one of the reasons why folk music continued to thrive in Chicago whereas in other places it had died a quick death to rock \u2018n\u2019 roll. A second wave of folk singers emerged in the late 1960s and 1970s, a group that included breakout stars John Prine and Steve Goodman. A singer-songwriter scene was sustained through a thriving club scene along Lincoln Avenue and Wells Street, media support like WFMT\u2019s Midnight Special program, and local record labels that nurtured new voices. \n            </p>\n            <p>\n              That lasted into the 1980s, a period when punk rock bands and outsider artists dominated the clubs. Andrew Calhoun\u2019s cooperative label Waterbug Records gave traditional songwriters a home while a bluegrass revival and the launch of \u201Calternative country\u201D bands helped nurture folk-based artists like Andrew Bird, the Handsome Family, Souled American, Chris Mills, the Texas Rubies, Califone, and Wilco\u2019s Jeff Tweedy, among others. Special Consensus, a four-person bluegrass group that started in 1975, served as a mainstay of bluegrass music throughout this period. Robbie Fulks, a Special Consensus alumni, became the focal point of the singer-songwriter scene starting in the late 1990s. In 2017 he received two Grammy nominations, one for best folk album. The moment shed light on a scene populated by artists who are interested in doing more than uphold tradition. Instead, the one constant running throughout all these periods of Chicago folk music is an allegiance to both experimentation and individualism, a spirit much in line with the city itself.\n            </p>\n         "
                    }
                ]
            }
        ];
        _RouteTitles.name.next('Folk Music');
    }
    Genre4Component.prototype.ngOnInit = function () {
    };
    return Genre4Component;
}());
Genre4Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'genre4',
        template: __webpack_require__(32),
        styles: [
            "\n  \t.genre4 {\n\t\tmargin: 1% auto;\n\t\tmax-width: 700px;\n\t}\n\t.event1image {\n\t\tbackground-image: url('../assets/Win and Frank Opening Night.jpg');\n\t\tbackground-size: cover;\n\t}\n\t.card-image {\n\t\tmax-width: 100%;\n\t\tmargin-bottom: 16px;\n\t}\n  "
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_routes_app_routes_titles_service__["a" /* RoutesTitles */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_routes_app_routes_titles_service__["a" /* RoutesTitles */]) === "function" && _a || Object])
], Genre4Component);

var _a;
//# sourceMappingURL=genre4.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routes_app_routes_titles_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Genre5Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Genre5Component = (function () {
    function Genre5Component(_RouteTitles) {
        this._RouteTitles = _RouteTitles;
        this.events = [
            {
                genre: 'genre5',
                title: 'Gospel & The Freedom Trail',
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
                        content: "\n            <p>\n              The Holy Vessel Baptist Church Choir has been inspiring people with the Good News in song since 1981. The HVBCC has performed many times at the Chicago Gospelfest and shared the festival\u2019s main stage with many Gospel music legends including Andra\u00E9 Crouch, Otis Clay and Jessy Dixon. The HVBCC also has headlined concerts in Wisconsin, Missouri and Georgia. \n            </p>\n            <p>\n              Members of the HVBCC have performed professionally as Still Water and The Lena McLin Singers.  They were featured in concert at Orchestra Hall, and they regularly appeared on ABC-TV\u2019s \u201CFace To Face\u201D with host Vernon Jarrett.  The HVBCC released its CD \u201CThe Spirit of Christmas\u201D in 2002.\n            </p>\n            <p>\n              HVBCC alums include many professional artists, including opera singer Susan Korhonen-Ali, Christian vocalist and \u201CWest Coast Praze\u201D TV show executive producer Donna McAfee, international gospel/pop singer Sharon Pass, and Chicago radio broadcaster Roger Plummer.\n            </p>\n            <p>\n              The HVBCC is founded and directed by the award-winning composer, musician and educator Dr. Lena J. McLin. Dr. McLin is the niece of the \u2018Father of Gospel Music\u2019 Thomas A Dorsey. Dr. McLin taught in Chicago Public Schools for 36 years, and she was featured in the PBS documentary \u201CThis Far By Faith\u201D.\n          </p>\n         "
                    },
                    {
                        tabname: 'Essay',
                        title: '',
                        content: "\n            <p>\n              Chicago is the birthplace of modern gospel music.  On the city\u2019s South and West Sides, African American gospel music was first written, arranged, performed, recorded, and broadcast, forever changing the sound of the African American church.  \n            </p>\n            <p>\n              The gospel music story starts with the Great Migration.  Beginning around 1916, African Americans left the South to make a better life for themselves, and Chicago was a popular destination.  Migrants brought with them their beloved hymns, camp meeting songs, and spirituals.  Their singing and musicianship drew largely from traditional West African ceremonial practices that their ancestors passed along through oral tradition.  These techniques included falsetto, polyrhythms, handclapping and foot patting, improvisation, and call-and- response congregational singing.\n            </p>\n            <p>\n              Migrants found some quality of life in Chicago, but they also encountered a more insidious form of prejudice from whites as well as some establishment blacks who seemed embarrassed by their brethren.  Moreover, Chicago\u2019s major black Protestant churches had long abandoned religious folk music for the staid hymnody of their white denominational counterparts.\n            </p>\n            <p>\n              Feeling like strangers in a strange land, migrants clung tightly to their southern traditions, including their soul-stirring worship practices.  They stole away to the city\u2019s Pentecostal, Holiness, and Spiritual churches, where familiar worship experiences reigned supreme.  Two of these South Side churches, All Nations Pentecostal and First Church of Deliverance, were among the first African American churches in the nation to broadcast their worship services on radio.\n            </p>\n            <p>\n              Songwriter, arranger, and pianist Thomas A. Dorsey migrated from Atlanta to Chicago in the early 1920s.  He began writing gospel songs that were steeped in the southern tradition but swung to the vaudeville blues and jazz he performed for a living.  To his dismay, no pastor of a big Chicago Protestant church wanted Dorsey\u2019s so-called \u201Cjazz baby\u201D music in his sanctuary.\n            </p>\n            <p>\n              That is, until 1932, when Dr. J. H. L. Smith arrived from Birmingham, Alabama, to lead Chicago\u2019s Ebenezer Baptist Church.  Smith grew up in the southern religious music tradition.  He hired Mississippi-born Theodore Frye to start a group at Ebenezer that sang songs \u201Cof the southland.\u201D  Frye asked his friend Dorsey, by now having modest success with his gospel songs, to help him assemble the first modern gospel chorus at Ebenezer.  When the chorus debuted to great accolades in January 1932, many Chicago Protestant churches now wanted a gospel chorus.\n            </p>\n            <p>\n              That included Pilgrim Baptist Church, which hired Dorsey to organize its gospel music program.  Ebenezer replaced Dorsey with Arkansas migrant Roberta Martin.  Martin formed the Roberta Martin Singers from members of Ebenezer\u2019s junior choir.  Between 1933 and 1969, the Roberta Martin Singers were one of the nation\u2019s foremost gospel groups.  Martin\u2019s semi-classical imprint on songwriting and arrangements is the linchpin of the \u201CChicago School of Gospel.\u201D\n            </p>\n            <p>\n              Tragedy struck in August 1932, when Dorsey\u2019s young wife Nettie died in childbirth and their newborn died a day later.  Dorsey channeled his grief into composing \u201CTake My Hand, Precious Lord.\u201D  \u201CPrecious Lord\u201D became one of the most beloved gospel songs of all time and a favorite of Reverend Dr. Martin Luther King Jr.  Dorsey was now the nation\u2019s top gospel songwriter.\n            </p>\n            <p>\n              In 1933, Dorsey, Frye and Magnolia Lewis Butts organized the first national convention of gospel choruses.  Sallie Martin, considered the Mother of Gospel Music, traveled from coast to coast, establishing gospel choruses for the convention and, as an employee of Dorsey\u2019s publishing firm, sold Dorsey sheet music to the newly-minted ensembles.\n            </p>\n            <p>\n              Bronzeville became an epicenter of gospel music publishing.  In the late 1930s, Roberta Martin formed a publishing concern.  Sallie Martin parted ways with Dorsey and joined Kenneth Morris in opening Martin and Morris Music.  For decades, Martin and Morris was the nation\u2019s most successful African American music publishing company.  Frye started his own publishing company, as did singer Myrtle Jackson, the First Church of Deliverance, and several others.\n            </p>\n            <p>\n              Gospel became big business in 1947 when Mahalia Jackson, the Queen of Gospel, recorded \u201CMove On Up a Little Higher.\u201D  The Chicagoan\u2019s single became a best seller and encouraged record company executives to sign other local gospel talent.  These included Alex Bradford (\u201CToo Close to Heaven\u201D), James Cleveland (\u201CGrace is Sufficient\u201D), the Gay Sisters (\u201CGod Will Take Care of You\u201D), and the Caravans (\u201CMary Don\u2019t You Weep\u201D).  Featuring Albertina Walker, the second Queen of Gospel, the Caravans were an all-star group; every member was a seasoned soloist.  Roebuck \u201CPops\u201D Staple\u2019s reverb-laden electric guitar, daughter Mavis\u2019s alto voice, and the family\u2019s haunting harmonies contributed to the Staple Singers\u2019 popularity.\n            </p>\n            <p>\n              Chicago quartets were top draws during gospel\u2019s golden age (1945-60).  These included the Soul Stirrers, Highway QCs, Pilgrim Jubilees, Christland Singers, and Salem Travelers.  Pop singers emulated their tight harmonies and choreography.  Quartet lead singers Sam Cooke, Lou Rawls, and Johnnie Taylor emerged from Chicago to become 1960s entertainment sensations.\n            </p>\n            <p>\n              Community choirs flourished.  The Thompson Community Singers, Wooten Choral Ensemble, South Side Community Choir, and Helen Robinson Youth Choir gave post-war adolescents a healthy out-of-school outlet and, in the process, became national recording and touring stars.\n            </p>\n            <p>\n              Chicago television provided a new means of disseminating gospel music across racial lines when Jubilee Showcase debuted in 1963.  Every Sunday morning for 21 consecutive years, host Sid Ordower presented national gospel artists and local talent to the Chicagoland area.\n            </p>\n            <p>\n              The winds shifted in 1969 when Edwin Hawkins and the Northern California State Youth Choir inadvertently scored a top five pop hit by giving an old hymn, \u201COh Happy Day,\u201D a contemporary feel.  The rise of the Hawkins Family, Andrae Crouch, and the Southern California Community Choir effectively moved the locus of gospel music from Chicago to their home in California.\n            </p>\n            <p>\n              But Chicago maintains a significant presence in gospel music.  Today\u2019s ambassadors include Anita Wilson, VaShawn Mitchell, Chicago Mass Choir, Smokie Norful, Brian Courtney Wilson, Jonathan McReynolds, Reverend Dr. Clay Evans, Reverend Charles Jenkins and Fellowship Chicago, Walt Whitman and the Soul Children of Chicago, Dexter Walker and Zion Movement, and quartets such as the Victory Travelers, Stars of Heaven, and God\u2019s Posse.  The Stellar Awards, gospel\u2019s top awards ceremony, was started by Chicago television entrepreneur Don Jackson.  The joyous sounds debuted by Dorsey and Frye at Ebenezer 85 years ago still reverberate in churches, auditoriums, and festivals worldwide.   -- Robert M. Marovich\n            </p>\n            <p>Robert Marovich<br>\n            Founder and Editor-in-Chief<br>\n            Journal of Gospel Music\n            </p>\n            <p>\n              Additional Resources:\n              Robert Marovich is the founder and editor-in-chief of Journal of Gospel Music, author of A City Called Heaven: Chicago and the Birth of Gospel Music (University of Illinois Press) and is a 2016 recipient of a Certificate of Merit in Historical Sound Recorded Research from the Association of Recorded Sound Collections.\n            </p>\n         "
                    }
                ]
            }
        ];
        _RouteTitles.name.next('Gospel & The Freedom Trail');
    }
    Genre5Component.prototype.ngOnInit = function () {
    };
    return Genre5Component;
}());
Genre5Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'genre5',
        template: __webpack_require__(32),
        styles: [
            "\n  \t.genre5 {\n\t\tmargin: 1% auto;\n\t\tmax-width: 700px;\n\t}\n\t.event1image {\n\t\tbackground-image: url('../assets/Holy Vessel Choir.jpg');\n\t\tbackground-size: cover;\n\t}\n\t.card-image {\n\t\tmax-width: 100%;\n\t\tmargin-bottom: 16px;\n\t}\n  "
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_routes_app_routes_titles_service__["a" /* RoutesTitles */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_routes_app_routes_titles_service__["a" /* RoutesTitles */]) === "function" && _a || Object])
], Genre5Component);

var _a;
//# sourceMappingURL=genre5.component.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routes_app_routes_titles_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Genre6Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Genre6Component = (function () {
    function Genre6Component(_RouteTitles) {
        this._RouteTitles = _RouteTitles;
        this.events = [
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
                        content: "\n\t\t\t\t\t\t<p>Catalina Maria Johnson</p>\n\n\t\t\t\t\t\t<p>\u201CI have to tell people in Durango all the time, \u2018No!, your grandparents did not dance the pasito duranguense! Duranguense was born in Chicago!\u201D, exclaims Jos\u00E9 Luis Terrazas. Terrazas, is the founder of Montez de Durango, the first band to gain world-wide renown for a style of music known as duranguense, i.e., \u201Cfrom Durango\u201D. And despite a name that seems to bely origins in that northern state, duranguense is one Chicago\u2019s own home-brewed sounds. \n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\tAlong with its accompanying dance, the pasito duranguense (literally, \u201Clittle step from Durango\u201D), this style of music took the United States and then Mexico by storm in the mid-nineties. Up until that point, most U.S.born Spanish-language music had come from San Antonio, Miami, New York or Los Angeles. But duranguense, born in Chicago and inspired by Durango, rose meteorically from the mid-nineties to hold as many as five of the top 10 spots on Billboard's Latin charts just a decade later. Most importantly, it was not a music that emigrated from Mexico and then took roots in the U.S., but rather, emerged on this side of the Rio Grande and found its way back, always addressing audiences on both sides of the border.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\tChicago\u2019s connection to Durango came about early in the 20th century, according to Durango historian Javier Guerrero, when Midwestern railroad companies recruited workers who were highly experienced in laying track in a state that had seen the most railroad development in Mexico at that time. \n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\tAs a Chicago-born cultural production, duranguense emerged in a fusion of extremely local and more global sounds, as well as a bridge between tradition and modernity. On the musical side, the genre evoked three other older Mexican genres: banda, which was military-band inspired wind ensemble music, norte\u00F1o, accordion-based polka-heavy tunes that evolved both north and south of the border and grupero, an 80\u2019s sound that also was influenced in rock and cumbia - all of these in and of themselves, hybrid styles that had successfully bridged past and present, as well as rural and urban Mexico.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\tDuranguense, however, marked a turning point for Mexican American music when it became the first genre born on the northern side of the border to become extremely popular all over Mexico.  It was a young people\u2019s music, bringing them back in touch with the roots of the traditional music of their parents and grandparents. \n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\tIt all started in the mid-nineties, when the seminal Mont\u00E9z de Durango was formed by Terrazas. Terrazas, who was born in Durango, grew up in Chicago and was a percussionist in his high school marching band. Montez de Durango was the first to exploit what came to be the signature sound of duranguense: bringing together sounds produced by the drum called the tambora and its big, big sound, or tamborazo, adding a hefty dose of brass sounds (especially from the tuba), and either a melodeon or an electronic keyboard. Like many other regional Mexican musics, duranguense\u2019s up-tempo beats also built upon on European polkas, schottisches, and waltzes.  But more than anything, duranguense sped everything up, taking the most beloved traditional elements of regional Mexican music and putting them on steroids.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\tMontez de Durango rose to fame with \"Camino a Tepehuanes\" (\"Road to Tepehuanes\") a song that expressed deep nostalgia as the singer returns to the mountaintop town of Tepehuanes, Durango after many years away. Similarly to \u201CCamino a Tepehuanes\u201D, many duranguense songs describe the immigrant lifestyle and its hardships, such as these Montez de Durango songs about leaving your son or father behind in Mexico.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\tAdding to the transnational quality of the music, many duranguense songs use Mexican agrarian imagery juxtaposed with city life as their backdrops, drawing upon both identities. Also popular in duranguense are corridos, epic songs about heroes and outlaws. As many of the musics of Northern Mexico, outlaw songs may make subtle references to the drug trade, but Terrazas comments that Montez de Durango largely avoided that scene in the band\u2019s music.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\tAnother one of the notable characteristics of duranguense is its reliance on covers, which no doubt adds to its power to bridge an idealized past to a more difficult present. Terrazas describes how the band began to play reinvented versions of songs from favorite Durango bands such as Patrulla 81. For example, here\u2019s a highly popular Patrulla 31 tune, \u201CVengo a Buscarte\u201D which in comparison Montez de Durango\u2019s version, loses some sweetness but gains a jauntier, polka-ish edge.  \n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\tDuranguense also has a characteristic \u2018look\u2019, a style worn by band members and audience members. This includes the classic hat (known as a taco hat because of its upturned edges) accompanied by Western-wear such as colorful, chunky buckle belts and cowboy boots. Finally, the pasito duranguense, the dance that accompanies the music was also popularized by Montez de Durango with a polka of the same name composed by the band\u2019s vocalist at the time.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\tThe band\u2019s first two albums were a decisive moment for the commercialization of the genre as it put duranguense on the map of Latin american music.  Local Chicago bands playing cotillions, weddings, and rodeos soon incorporated the duranguense sound. Fast forward about a decade, and in August of 2004, Montez de Durango played before an audience of 50,000 at the Viva Chicago festival and received special recognition by Mayor Daley. \n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\tTerrazas founded his own Terrazas Records label and the band now has recorded more than two dozen albums. Although much of their fan base is Mexican and in the Mexican diaspora from Arizona to Alaska, the band has enormous followings in different parts of the world,  and not long ago toured Canada and Central America.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\tMontez de Durango also opened the doors to fame for other Chicago bands such as Alacranes Musical y Los Hor\u00F3scopos de Durango. The latter band, fronted by Vicky and Marisol Terrazas, became the first regional Mexican music band to be fronted by women. Horoscopos has always innovated duranguense in many ways, even covering Cindy Lauper's \"Girls Just Want to Have Fun\" in a Spanish and English Duranguense version.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\tAlthough its massive craze-level popularity was short-lived, duranguense remains one of the staple sounds of the bi-national reality of the Latin diaspora, with a widespread following of Central American as well as Mexican and Mexican-American fans. Younger generations in the U.S. still love dancing to this genre that honors the cultural ties of their parents without losing sight of their American experience. \n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\tThe predominance of covers in most bands\u2019 repertoires, sometimes noted critically, is actually a sign of duranguense\u2019s power and magic, connecting younger people to their past through these well-known, cherished songs. Yet at the same time, duranguense encourages a contemporary dance step with an intertwined embrace, and witnesses the accelerated pace of today\u2019s society. Duranguense may harken back to earlier, simpler times, but it was the Chicago touch that made the tradition sexy, fast and modern.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t"
                    }
                ]
            }
        ];
        _RouteTitles.name.next('Rise Of Duranguense Music');
    }
    Genre6Component.prototype.ngOnInit = function () {
    };
    return Genre6Component;
}());
Genre6Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'genre6',
        template: __webpack_require__(32),
        styles: [
            "\n\t.genre6 {\n\t\t// width: 90%;\n\t\tmargin: 1% auto;\n\t}\n\t@media only screen and (min-width: 900px){\n\t\t.genre6 {\n\t\t\twidth: 42.5%;\n\t\t\tmargin: 1%;\n\t\t\tdisplay: inline-grid;\n\t\t}\n\t}\n\t.event1image {\n\t\tbackground-image: url('../assets/Show Revelacio\u0301n.jpg');\n\t\tbackground-size: cover;\n\t}\n\t.event2image {\n\t\tbackground-image: url('../assets/NZA.jpg');\n\t\tbackground-size: cover;\n\t}\n\t.card-image {\n\t\tmax-width: 100%;\n\t\tmargin-bottom: 16px;\n\t}\n  "
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_routes_app_routes_titles_service__["a" /* RoutesTitles */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_routes_app_routes_titles_service__["a" /* RoutesTitles */]) === "function" && _a || Object])
], Genre6Component);

var _a;
//# sourceMappingURL=genre6.component.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routes_app_routes_titles_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Genre7Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Genre7Component = (function () {
    function Genre7Component(_RouteTitles) {
        this._RouteTitles = _RouteTitles;
        this.events = [
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
                        content: "\n          <p>\n          \tRobbie Fulks plays by nobody's rules--except the ones he hears in his head. He is prodigiously talented, with the soul of a country singer and the mind of a vaudevillian.  Besides, his scorn for the music industry makes ours look positively prosaic. But don't let that make you lose sight of THE SONGS.\n \t\t\t\t\t</p>\n \t\t\t\t\t<p>\n\t\t\t\t\t\tWidely regarded by those who monitor such things as one of the most gifted songwriters to ever ply the trade, he can sing the kids ditty \"Eggs\" and Haggard's \"Sing a Sad Song\" back to back and mean 'em both. While it is true he started off a honky tonk smartass, it quickly became evident that Robbie was a monster talent and some of his early Bloodshot albums have been rightly elevated to the status of \"classic\" and serve as their own Greatest Hits collections.  \n \t\t\t\t\t</p>\n \t\t\t\t\t<p>\n\t\t\t\t\t\t\u201C\u2026a masterly, multifaceted songwriter who can belt out hip-shaking honky tonk, honeydew pop and chilling little ballads with an unrivaled skill and spirit. So good, he's scary.\u201D - Chicago Tribune\n \t\t\t\t\t</p>\n         "
                    },
                    {
                        tabname: 'Dr. Dosido',
                        title: 'Dr. Dosido aka Paul Tyler, PhD',
                        content: "\n          <p>\n          \tBorn in 1950, Paul Tyler grew up in rural Indiana, in the small Allen County town of Hoagland, to be exact. After a 5-year stay in Detroit and 8 years in Bloomington, Indiana, DrDosido has lived in Chicago for over a quarter century. He earned a bachelor's degree from Valparaiso University in 1973 and, after much experience as a professional musician and amateur folklorist, he enrolled in the ethnomusicology program at the Folklore Institute at Indiana University, receiving an M.A. in 1982. He was awarded the Ph.D. in 1992 after completing a dissertation: \"'Sets on the Floor': Social Dance as an Emblem of Community in Rural Indiana.\"\n \t\t\t\t\t</p>\n \t\t\t\t\t<p>\n\t\t\t\t\t\tDrDosido started as an amateur folklorist by recording fiddle tunes and other traditional music in the field for a show on public radio station WIPU-Fort Wayne. Indiana Hoedown: Traditional Music from the Hoosier State ran as 26 1-hour broadcasts in 1979-80. Through the 1980s and into the '90s he worked as a contract folklorist. He has done field research for the School of Fine Art at Eastern Illinois University, the University Museum at Southern Illinois University, the Archives of Traditional Music at Indiana University, the Wyoming Arts Foundation, Urban Traditions in Chicago, and the David Adler Cultural Center in Libertyville, Illinois. Paul has produced four documentary albums: Folk Songs of Illinois #2: Fiddlers; Lotus Dickey, Fiddle Tunes from Orange County, Indiana (with booklet); Lonesome Homesteader: Old Time Fiddling in Wyoming (with booklet); and Ethnic Music in Northern Indiana (for the Archives of Traditional Music at Indiana University).\n \t\t\t\t\t</p>\n \t\t\t\t\t<p>\n\t\t\t\t\t\tFrom 1988-92, Paul was on the administrative staff of the Old Town School of Folk Music as Curator of Collections and Exhibitions. Besides developing the Schools Resource Center, he also curated three exhibitions: The Making of the 5-String Banjo: From Hollowed Gourds to Silvered Rims; Weaving an Identity: Guatemalan Folk Art; and Traditional and Modern Indian Art on the Shores of Lake Michigan. Since 1990, he has taught fiddle and country music classes at the Old Town School of Folk Music, while also teaching world music and world culture courses at four Chicago universities. DrDosido currently teaches anthropology at Wilbur Wright College, part of Chicago City Colleges.\n \t\t\t\t\t</p>\n \t\t\t\t\t<p>\n\t\t\t\t\t<a href=\"http://drdosido.net/\" target=\"_blank\">http://drdosido.net/</a>\n \t\t\t\t\t</p>\n         "
                    },
                    {
                        tabname: 'Essay',
                        title: 'The National Barn Dance: Chicago and Country Music',
                        content: "\n            <h5>By Paul L. Tyler (Dr.Dosido)</h5>\n\n            <p>\n            A strong argument can be made that Chicago was the capital of country music during the decade leading up to World War II. In the 1920s, when country\u2013AKA hillbilly, old-time, or American folk\u2013emerged as a separate commercial musical form, that designation of \u201Ccapital\u201D most likely belonged to Atlanta, where much early recording and radio broadcasting of rural artists took place. But Chicago began to make a strong case for itself on April 19, 1924, when brand new radio station WLS broadcast the very first National Barn Dance, with musical appearances by the pseudonymous Cowbell Pete, Kentucky Wonderbean, and fiddler \u201CTimothy Cornrow from Ioway.\u201D \n            </p>\n            <p>\n            \tIn the 1920s, radio broadcasting, like commercial country music, was a brand new cultural phenomenon, and Chicago was a center of explosive growth for the new medium. WLS (which stood for World\u2019s Largest Store) was a new station begun by the Sears Roebuck Agricultural Foundation to serve the farm families of Illinois and the Midwest. Old familiar music--which is as good a definition of emergent country music as any--was a natural for helping them reach their target audience. With record-breaking cards, letters, and telegrams, rural and city audiences alike responded enthusiastically to the old-time fiddling, heart songs, and good-natured comedy that became a Saturday night staple on WLS. \n            </p>\n            <p>\n            \tBy 1930, Prairie Farmer magazine had purchased WLS, and steadily built the National Barn Dance into a Depression-era media empire. Along with four to five hours of folk and vernacular music programming on the air, the Barn Dance included two 2-hour live shows at the Eighth Street Theatre (weekly sell outs from 1932 to 1957), a one-hour coast-to-coast broadcast on the NBC-Blue network, an active artist bureau that booked personal appearances for Barn Dance stars throughout a five-state region, annual WLS souvenir yearbooks and, from 1935 to 1937, a weekly fan magazine, Stand By, featuring stories and photos of Barn Dance artists. The Stars of the Saturday night program could also be heard throughout the week on WLS, and other entertainers from the weekly schedule joined the \u201CHayloft Gang\u201D on Saturday nights. At the height of its popularity in the years just before and during World War II, the National Barn Dance cast numbered 70 to 100 entertainers. During this same period, the cast of WSM-Nashville\u2019s Grand Ole Opry was about half as large. \n            </p>\n            <p>\n            \tIt should be noted that from the beginning, Chicago was second only to New York as a center of production for the record industry. By the 1930s and \u201840s, some of the biggest names in country music\u2013Bob Wills, Delmore Brothers, Bill Monroe\u2013travelled to the Windy City to record their hits. Nationally, however, the record industry and the broadcast industry saw themselves as rivals. For instance, some country music stars on Cincinnati\u2019s powerful WLW were booted from the airwaves for violating that station\u2019s ban on making records. But not in Chicago, at least not for WLS. National Barn Dance stars were some of the most frequently recorded country musicians prior to 1942. Record labels like Gennett and Conqueror eagerly identified discs as recordings of National Barn Dance artists. Ironically, some of WLS\u2019s earliest recording stars have faded into obscurity: e.g., Tommy Dandurand\u2019s Barn Dance Fiddlers, banjo songster Chubby Parker, or the Three Little Maids (the Overstake sisters from Decatur, Illinois. \n            </p>\n            <p>\n            \tSome WLS stars from the 1930s had a great deal of regional success that propelled them to great popularity at other outlets. The harmony duo of Karl & Harty and their larger ensemble, the Cumberland Ridge Runners, left WLS at the height of their popularity in the mid-30s for WLW-Cincinnati, before coming back to a long stint on the Suppertime Frolic at WJJD-Chicago. Slim Miller, the Ridge Runners\u2019 original fiddler, became a long-time musical and comedic star for the Renfro Valley Barn Dance. The Girls of the Golden West (Milly and Dolly Good) also moved on to WLW, while the Dezurik Sisters, phenomenal yodelers, simutaneously did a series of radio transcriptions series in Nashville as the Cackle Sisters. \n            </p>\n            <p>\n            \tThe best known National Barn Dance stars are a few who, after establishing themselves in Chicago, went on to make their marks in other entertainment capitals. Bradley Kincaid, a ballad singer from Kentucky, was a radio fixture in New England. Little Georgie Goebel went from being a ukulele-strumming western singer on the Barn Dance to national fame on television. The Hoosier Hot Shots, a novelty swing band led by clarinet and slide-whistle, grew a national following in Chicago that they took to California after the war. Three country and western singers who established their careers at WLS were later elected to the Country Music Hall of Fame. Gene Autry left Chicago in 1934 for Hollywood, while Red Foley ended up in Nashville after World War II. Patsy Montana (Rubye Blevin) spent the peak years of her career in Chicago, but was still an active performer out West until her death in 1996.\n            </p>\n            <p>\n            \tStill, Chicagoans should know the National Barn Dance artists whose careers were centered in Chicago, who were deeply loved by WLS listeners and the thousands of people who streamed to the city Saturday after Saturday in hopes of getting a ticket to the live show at the Eighth Street Theatre. Topping this list are Lulu Belle & Scotty, a sweet-singing and joke-cracking husband and wife team, along with cowboy singer, fiddler, and square dance caller Arkie the Arkansas Woodchopper. Their respective tenures on the Barn Dance lasted through three full decades. Other long-time favorites included the Prairie Ramblers, a western swing band long associated with Patsy Montana, that thrived at WLS even after Patsy headed west. Like the Prairie Ramblers, whose service at WLS was interrupted by engagements in other cities, the harmony duo of Mac & Bob (Lester McFarland & Robert Gardner) were fixtures on WLS and the Barn Dance from the 1930s into the \u201850s. \n            </p>\n            <p>\n            \tThis little sketch only scratches the surface. After the war, the National Barn Dance lost its country music dominance to Nashville\u2019s Grand Ole Opry. But such notable musicians as Johnny Frigo (a jazz fiddler who did a country turn with the Sage Riders), Dolph Hewitt, the Beaver Valley Sweethearts, and Captain Stubby & the Buccaneers held forth at the Old Hayloft up through the end of the WLS National Barn Dance in 1960.  \t\n            </p>\n            Reference:\n            \tPaul Tyler. \"The Rise of Rural Rhythm.\" In Hayloft Gang: The Story of the National Barn Dance, pp. 19-71. Ed. By Chad Berry. University of Illinois Press, 2008.\n\n         "
                    }
                ]
            }
        ];
        _RouteTitles.name.next('Country Music in Chicago');
    }
    Genre7Component.prototype.ngOnInit = function () {
    };
    return Genre7Component;
}());
Genre7Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'genre7',
        template: __webpack_require__(32),
        styles: [
            "\n  \t.genre7 {\n\t\tmargin: 1% auto;\n\t\tmax-width: 700px;\n\t}\n\t.event1image {\n\t\tbackground-image: url('../assets/Robbie_Fulks_Stand_2016_Andy_Goodwin.jpg');\n\t\tbackground-size: cover;\n\t}\n\t.card-image {\n\t\tmax-width: 100%;\n\t\tmargin-bottom: 16px;\n\t}\n  "
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_routes_app_routes_titles_service__["a" /* RoutesTitles */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_routes_app_routes_titles_service__["a" /* RoutesTitles */]) === "function" && _a || Object])
], Genre7Component);

var _a;
//# sourceMappingURL=genre7.component.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SponsorsComponent = (function () {
    function SponsorsComponent() {
    }
    SponsorsComponent.prototype.ngOnInit = function () {
    };
    return SponsorsComponent;
}());
SponsorsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-sponsors',
        template: __webpack_require__(284),
        styles: [__webpack_require__(273)]
    }),
    __metadata("design:paramtypes", [])
], SponsorsComponent);

//# sourceMappingURL=sponsors.component.js.map

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 190;


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(212);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidenav_sidenav_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sponsors_sponsors_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidenav_genre_placeholder_component__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutesRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__sidenav_sidenav_component__["a" /* SidenavComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_6__sidenav_genre_placeholder_component__["a" /* PlaceholderComponent */] }
        ]
    },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'sponsors', component: __WEBPACK_IMPORTED_MODULE_5__sponsors_sponsors_component__["a" /* SponsorsComponent */] },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];
var AppRoutesRoutingModule = (function () {
    function AppRoutesRoutingModule() {
    }
    return AppRoutesRoutingModule;
}());
AppRoutesRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutesRoutingModule);

//# sourceMappingURL=app-routes-routing.module.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routes_routing_module__ = __webpack_require__(204);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppRoutesModule = (function () {
    function AppRoutesModule() {
    }
    return AppRoutesModule;
}());
AppRoutesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routes_routing_module__["a" /* AppRoutesRoutingModule */]
        ],
        declarations: []
    })
], AppRoutesModule);

//# sourceMappingURL=app-routes.module.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* unused harmony export stuff */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var stuff = (function () {
    function stuff() {
    }
    return stuff;
}());

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(277),
        styles: [__webpack_require__(268)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sidenav_sidenav_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_about_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__contact_contact_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sponsors_sponsors_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sidenav_sidenav_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routes_app_routes_module__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_router__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__agm_core__ = __webpack_require__(197);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// import { RouterTestingModule } from '@angular/router/testing';


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__sidenav_sidenav_component__["a" /* SidenavComponent */],
            __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_12__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_13__sponsors_sponsors_component__["a" /* SponsorsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_15__app_routes_app_routes_module__["a" /* AppRoutesModule */],
            // RouterTestingModule,
            __WEBPACK_IMPORTED_MODULE_16__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_14__sidenav_sidenav_module__["a" /* SidenavModule */],
            __WEBPACK_IMPORTED_MODULE_17__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyB8MOXk3cul6kap2Lgf9eg7lcM1ZMJ27rY'
            })
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(279),
        styles: [__webpack_require__(270)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(280),
        styles: [__webpack_require__(271)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__genre_placeholder_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidenav_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__genre_genre1_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__genre_genre2_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__genre_genre3_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__genre_genre4_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__genre_genre5_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__genre_genre6_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__genre_genre7_component__ = __webpack_require__(124);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var genreRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__sidenav_component__["a" /* SidenavComponent */],
        children: [
            { path: 'genre1', component: __WEBPACK_IMPORTED_MODULE_4__genre_genre1_component__["a" /* Genre1Component */] },
            { path: 'genre2', component: __WEBPACK_IMPORTED_MODULE_5__genre_genre2_component__["a" /* Genre2Component */] },
            { path: 'genre3', component: __WEBPACK_IMPORTED_MODULE_6__genre_genre3_component__["a" /* Genre3Component */] },
            { path: 'genre4', component: __WEBPACK_IMPORTED_MODULE_7__genre_genre4_component__["a" /* Genre4Component */] },
            { path: 'genre5', component: __WEBPACK_IMPORTED_MODULE_8__genre_genre5_component__["a" /* Genre5Component */] },
            { path: 'genre6', component: __WEBPACK_IMPORTED_MODULE_9__genre_genre6_component__["a" /* Genre6Component */] },
            { path: 'genre7', component: __WEBPACK_IMPORTED_MODULE_10__genre_genre7_component__["a" /* Genre7Component */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__genre_placeholder_component__["a" /* PlaceholderComponent */] }
        ]
    }
];
var SidenavRoutingModule = (function () {
    function SidenavRoutingModule() {
    }
    return SidenavRoutingModule;
}());
SidenavRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(genreRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], SidenavRoutingModule);

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=sidenav-routing.module.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidenav_routing_module__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__genre_placeholder_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__genre_genre1_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__genre_genre2_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__genre_genre3_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__genre_genre4_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__genre_genre5_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__genre_genre6_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__genre_genre7_component__ = __webpack_require__(124);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var SidenavModule = (function () {
    function SidenavModule() {
    }
    return SidenavModule;
}());
SidenavModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__sidenav_routing_module__["a" /* SidenavRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__genre_placeholder_component__["a" /* PlaceholderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__genre_genre1_component__["a" /* Genre1Component */],
            __WEBPACK_IMPORTED_MODULE_7__genre_genre2_component__["a" /* Genre2Component */],
            __WEBPACK_IMPORTED_MODULE_8__genre_genre3_component__["a" /* Genre3Component */],
            __WEBPACK_IMPORTED_MODULE_9__genre_genre4_component__["a" /* Genre4Component */],
            __WEBPACK_IMPORTED_MODULE_10__genre_genre5_component__["a" /* Genre5Component */],
            __WEBPACK_IMPORTED_MODULE_11__genre_genre6_component__["a" /* Genre6Component */],
            __WEBPACK_IMPORTED_MODULE_12__genre_genre7_component__["a" /* Genre7Component */]
        ],
        providers: []
    })
], SidenavModule);

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=sidenav.module.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutesTitles; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RoutesTitles = (function () {
    function RoutesTitles() {
        // public paramSource: Subject<any> = new Subject<any>();
        // public getParams(params) {
        //   this.paramSource.next(params);
        // }
        this.name = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
    }
    return RoutesTitles;
}());
RoutesTitles = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], RoutesTitles);

//# sourceMappingURL=app-routes-titles.service.js.map

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "/* sticky footer */\n.main-content {\n\tmin-height: calc(100vh - 116px);\n}\n@media (max-width: 600px){\n    .main-content {\n        min-height: calc(100vh - 108px);\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "/*h1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}*/\n\napp-root:host {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "/* sticky footer */\n.main-content {\n\tmin-height: calc(100vh - 116px);\n}\n@media (max-width: 600px){\n    .main-content {\n        min-height: calc(100vh - 108px);\n    }\n}\n\n\n.sebm-google-map-container {\n\theight: 300px;\n}\n.contact-info {\n\tmargin: 2em 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "footer {\n    background: #00bcd4;\n    color: #fff;\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\n    /*margin-top: 40px;*/\n    padding: 12px;\n    font-size: 12px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, ".docs-navbar {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-wrap: wrap;\n\tflex-wrap: wrap;\n\tpadding: 8px 16px;\n}\n.docs-navbar > .mat-button:last-child {\n    margin-left: auto;\n}\n.mat-button {\n\tpadding: 0 2%;\n\tmin-width: 60px;\n}\n:host .docs-navbar {\n\tbackground: #00bcd4;\n}\n:host {\n  color: #fff;\n  position: relative;\n  z-index: 10;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, ".mat-button {\n\tpadding: 0 2%;\n\tmin-width: 40px;\n}\n.app-sidenav {\n\twidth: 240px;\n\tbox-shadow: 3px 0 6px rgba(0,0,0,.24);\n}\n.app-toolbar-filler {\n\t-webkit-box-flex: 1;\n\t    -ms-flex: 1 1 auto;\n\t        flex: 1 1 auto;\n}\n.app-sidenav ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n.app-sidenav li {\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    margin: 0;\n    padding: 0;\n    border-color: rgba(0,0,0,.06);\n    color: rgba(0,0,0,.54);\n}\n.app-sidenav li:hover a{\n\tbackground: rgba(0,0,0,.25);\n\tcolor: #fff;\n}\n.app-sidenav li a:focus{\n    outline: none;\n}\n.app-sidenav li:last-child {\n    border-color: transparent;\n}\n.app-sidenav li>a {\n    box-sizing: border-box;\n    display: block;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 47px;\n    text-decoration: none;\n    transition: all .3s;\n    padding: 0 16px;\n    position: relative;\n    color: rgba(0,0,0,.54);\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\n}\n\n/* sticky footer */\n.main-content {\n    min-height: calc(100vh - 180px);\n}\n@media (max-width: 600px){\n    .main-content {\n        min-height: calc(100vh - 172px);\n    }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "/* sticky footer */\n.main-content {\n\tmin-height: calc(100vh - 116px);\n}\n@media (max-width: 600px){\n    .main-content {\n        min-height: calc(100vh - 108px);\n    }\n}\n.sebm-google-map-container {\n\theight: 300px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 276:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  \t<div class=\"app-content\">\n\t    <md-card>\n\t    \t<h3>\n\t\t\t  About\n\t\t\t</h3>\n\t\t\t<p>Retro readymade fingerstache truffaut. Skateboard gentrify crucifix, taxidermy paleo kitsch drinking vinegar dreamcatcher selfies 8-bit. Pork belly gluten-free jean shorts hella, artisan direct trade marfa aesthetic irony chia plaid. Tacos kitsch master cleanse, yr cray tattooed ennui snackwave edison bulb tote bag. Semiotics cornhole brooklyn put a bird on it. Cold-pressed chartreuse 8-bit stumptown whatever, godard blue bottle affogato.</p>\n\t\t\t<p>Ennui sartorial aesthetic, succulents vaporware XOXO la croix viral roof party flexitarian keffiyeh gentrify fingerstache fam. PBR&B squid vegan, marfa 90's microdosing single-origin coffee edison bulb tote bag jianbing literally street art cornhole portland. Polaroid health goth everyday carry banjo mixtape cronut. Jianbing leggings swag, pitchfork crucifix church-key cardigan tousled bushwick bitters fashion axe slow-carb kickstarter next level messenger bag. Portland vegan venmo photo booth gluten-free. Vice chillwave cray, keffiyeh intelligentsia kinfolk hell of hoodie meditation edison bulb. Tattooed fanny pack sartorial vegan chillwave.</p>\n\t    </md-card>\n\n\t    <!-- <router-outlet>\n\t    </router-outlet> -->\n    </div>\n</div>\n\n<app-footer>\n\tLoading...\n</app-footer>"

/***/ }),

/***/ 277:
/***/ (function(module, exports) {

module.exports = "<app-navbar class=\"mat-elevation-z6\">\n</app-navbar>\n\n<router-outlet>\n</router-outlet>\n"

/***/ }),

/***/ 278:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  \t<div class=\"app-content\">\n\t    <md-card>\n\t    \t<h3>\n\t\t\t  Contact\n\t\t\t</h3>\n\t\t\t<div class=\"contact-info\">\n\t\t\t\t4544 North Lincoln Avenue, Chicago, IL 60625<br>\n\t\t\t\tMon – Thurs: 9AM - 10PM | Fri – Sun: 9AM - 10PM<br>\n\t\t\t\t<button md-icon-button>\n\t\t\t\t\t<a href=\"tel:+1-773-728-6000\">(773) 728-6000</a>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [disableDefaultUI]=\"false\" >\n\t\t\t  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n\t\t\t</agm-map>\n\t    </md-card>\n\t\t\n\t    <!-- <router-outlet>\n\t    </router-outlet> -->\n    </div>\n</div>\n\n<app-footer>\n\tLoading...\n</app-footer>"

/***/ }),

/***/ 279:
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"footer-list\">\n    <!-- <div class=\"footer-logo\">\n      <img alt=\"Angular\" class=\"docs-footer-angular-logo\" src=\"\">\n    </div> -->\n\n    <!-- <div class=\"footer-links\">\n      <a class=\"\" href=\"\">Learn Angular</a>\n    </div> -->\n\n    <div class=\"footer-copyright\">\n      <p>Powered by OTSFM ©2017</p>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ 280:
/***/ (function(module, exports) {

module.exports = "<nav class=\"docs-navbar navbar-fixed\">\n\t<a aria-label=\"Menu Item 1\" class=\"docs-button mat-button\" md-button=\"\" [routerLink]=\"['/']\" routerLinkActive=\"active\" aria-disabled=\"false\" tabindex=\"0\">\n\t\t<span class=\"mat-button-wrapper\">\n\t    \t<span>HOME</span>\n\t \t</span>\n\t\t<div class=\"mat-button-ripple mat-ripple\" md-ripple=\"\"></div>\n\t\t<div class=\"mat-button-focus-overlay\"></div>\n\t</a>\n\t<a aria-label=\"Menu Item 2\" class=\"docs-button mat-button\" md-button=\"\" [routerLink]=\"['about']\" routerLinkActive=\"active\" aria-disabled=\"false\" tabindex=\"0\">\n\t\t<span class=\"mat-button-wrapper\">\n\t    \t<span>ABOUT</span>\n\t \t</span>\n\t\t<div class=\"mat-button-ripple mat-ripple\" md-ripple=\"\"></div>\n\t\t<div class=\"mat-button-focus-overlay\"></div>\n\t</a>\n\t<a aria-label=\"Menu Item 3\" class=\"docs-button mat-button\" md-button=\"\" routerLink=\"/contact\" routerLinkActive=\"active\" aria-disabled=\"false\" tabindex=\"0\">\n\t\t<span class=\"mat-button-wrapper\">\n\t    \t<span>CONTACT</span>\n\t \t</span>\n\t\t<div class=\"mat-button-ripple mat-ripple\" md-ripple=\"\"></div>\n\t\t<div class=\"mat-button-focus-overlay\"></div>\n\t</a>\n\t<a aria-label=\"Menu Item 4\" class=\"docs-button mat-button\" md-button=\"\" routerLink=\"/sponsors\" routerLinkActive=\"active\" aria-disabled=\"false\" tabindex=\"0\">\n\t\t<span class=\"mat-button-wrapper\">\n\t    \t<span>SPONSORS</span>\n\t \t</span>\n\t\t<div class=\"mat-button-ripple mat-ripple\" md-ripple=\"\"></div>\n\t\t<div class=\"mat-button-focus-overlay\"></div>\n\t</a>\n</nav>\n"

/***/ }),

/***/ 281:
/***/ (function(module, exports) {

module.exports = "<md-card *ngFor=\"let mainevent of mainevents; index as j\">\n  <div class=\"event-container\">\n    <h2>{{mainevent.title}}</h2>\n    <p [innerHTML]=\"mainevent.description\">\n    </p>\n  </div>\n  <md-card *ngFor=\"let event of mainevent.events; index as i;\" class=\"{{event.genre}} mainevent{{j +1}}\">\n    <md-card-header>\n      <div md-card-avatar class=\"event{{i +1}}image\"></div>\n      <md-card-title>{{event.title}}<br>{{event.lead}}<br><em>{{event.admission}}</em></md-card-title>\n      <md-card-subtitle>{{event.location}}<br>\n      {{event.date}} {{event.time}}</md-card-subtitle>\n    </md-card-header>\n    <img class=\"card-image\" src=\"{{event.image}}\">\n    <md-card-content>\n      <div [innerHTML]=\"event.description\">\n      </div>\n      <p *ngIf=\"event.link\">\n        <a href=\"{{event.link}}\" target=\"_blank\">{{event.link}}</a>\n      </p>\n      <md-tab-group dynamicHeight *ngIf=\"event.tabs\">\n        <md-tab *ngFor=\"let tab of event.tabs\">\n          <ng-template md-tab-label class=\"tab-label\">\n            {{tab.tabname}}\n          </ng-template>\n          <h4>{{tab.title}}</h4>\n          <img *ngIf=\"tab.image\" class=\"card-image\" src=\"{{tab.image}}\">\n          <div [innerHTML]=\"tab.content\">\n            \n          </div>\n        </md-tab>\n      </md-tab-group>\n    </md-card-content>\n  </md-card>\n</md-card>\n\n<!-- new above -->\n<!-- <md-card>\n  <div class=\"event-container\">\n    <h2>House Music Conference</h2>\n    <p>\n      The Chicago Department of Cultural Affairs and Special Events will host a House Music Conference on Thursday, May 25 and Friday, May 26 at the Chicago Cultural Center for musicians, DJs and industry participants. Admission to the conference is free, and registration is not required. Full schedule available <a href=\"https://www.cityofchicago.org/city/en/depts/dca/supp_info/house_music.html\" target=\"_blank\">here</a> \n    </p>\n  </div>\n  <md-card class=\"genre1-full\">\n    <md-card-header>\n      <div md-card-avatar class=\"event1image\"></div>\n      <md-card-title>Panel Discussion: Cultivating The Next Generation Of Practitioners</md-card-title>\n      <md-card-subtitle>Chicago Cultural Center, Claudia Cassidy Theater (2nd Floor North)<br>\n      Thursday, May 25 6:00PM</md-card-subtitle>\n    </md-card-header>\n    <img class=\"card-image\" src=\"../assets/mdm.jpg\">\n    <md-card-content>\n      <p>\n        This panel, moderated by Lauren Lowery, will look back at the history of the scene, ongoing gender inequality, evolving technologies, and industry trends to inform the possible future of House Music as a cultural practice. How are new generations accessing historical knowledge? What are the pioneers of the past, as well as present House Music successors doing to support and cultivate a new generation of practitioner today? It is presented in collaboration with Old Town School of Folk Music’s Soundtrack of the City. \n      </p>\n      <p>\n        View the <a href=\"https://www.cityofchicago.org/city/en/depts/dca/supp_info/house_music.html\" target=\"_blank\">full schedule</a> of panels and workshops for House Music Conference on Thursday, May 25 and Friday, May 26\n      </p>\n    </md-card-content>\n  </md-card>\n</md-card>\n\n\n<md-card>\n  <div class=\"event-container\">\n    <h2>Chicago House Legacy Project</h2>\n    <p>\n      Throughout the day, DJs and live performances will showcase the various sounds and styles of house music, the musical form born in Chicago that has gone on to revolutionize dance music internationally. \n    </p>\n  </div>\n  <md-card class=\"genre1\">\n    <md-card-header>\n      <div md-card-avatar class=\"event2image\"></div>\n      <md-card-title>House Dance Workshop with Boogie McClarin</md-card-title>\n      <md-card-subtitle>Millennium Park - North Chase Promenade Tent<br>\n      Saturday, May 27 2pm - 2:45pm </md-card-subtitle>\n    </md-card-header>\n    <img class=\"card-image\" src=\"http://placehold.it/700x200/000000/ffffff?text=HOUSE DANCE\">\n    <md-card-content>\n      <p>\n        Boogie McClarin guides an exploration of movement history, concepts, approaches and social dance practices that accompany the global phenomenon born of Chicago's rich heritage - House Music and Dance Culture.\n      </p>\n    </md-card-content>\n  </md-card>\n  <md-card class=\"genre1\">\n    <md-card-header>\n      <div md-card-avatar class=\"event2image\"></div>\n      <md-card-title>Chicago House Legacy Project</md-card-title>\n      <md-card-subtitle>Millennium Park - Jay Pritzker Pavilion<br>\n      Saturday, May 27 6:45pm - 8pm</md-card-subtitle>\n    </md-card-header>\n    <img class=\"card-image\" src=\"../../assets/Jerry C. King2.jpg\">\n    <md-card-content>\n      <md-tab-group dynamicHeight>\n        <md-tab>\n          <ng-template md-tab-label>\n            Description\n          </ng-template>\n          <h3>Chicago House Legacy Project (featuring special guests) - With Introduction from Old Town School’s Kim Davis</h3>\n          <p>\n            Chicago House Legacy Project is a DCASE commissioned band led by musical director Jerry C. King. The project performs classic Chicago House Music hits live using new arrangements and often including the original singers and musicians of those seminal songs. Apart from the classics, the project also looks to develop new emerging talent and write new music to release and debut live at the Chicago House Party event.  \n          </p>\n          <p>\n            The ensemble consists of: Jerry C. King (Musical Director/Keys), Steve “Miggedy” Maestro (DJ/ 106.3/Assistant Musical Director), Day Rock (Bass), Chuck Lacy (drums), Duane \"Rude\" Jones (guitar), Gus Lacy (keys), Phillip Glover (2nd drum), Sam Eli Glover (2nd bass).\n          </p>\n          <p>\n            Featured artists lineup: Billy Monroe, Faith Howard with dancers Faith Rebecca &amp; Sarah Lloyd, Jameisha Trice, Andrea Love, Dawn Williams, Gus Lacy, Carla Prather, Lorenzo Owens, Kennedy Simone, with special guest performance by Curtis Mcclain and Ivelisse Diaz.\n          </p>\n          <p>\n            Background Vocalists include: Melody Cowan, K'mar, Bernetta Donalson, and Robert Townsend, with special background vocalists modifier Tommy Thumbs \"E.S.P.\"\n          </p>\n          <p>\n            Hosted by: Dana Devine, Kim Jay, and Lady Laronda Maestro\n          </p>\n          <p>\n            <a href=\"https://www.cityofchicago.org/city/en/depts/dca/supp_info/hlp.html\" target=\"_blank\">Full schedule &amp; lineup</a> \n          </p>\n        </md-tab>\n        <md-tab>\n          <ng-template md-tab-label>\n            More Info\n          </ng-template>\n          <span class=\"lead\">Lauren Lowery</span>\n          <span class=\"lead\">Co-Founder and Chief Archivist, Dance Music Archive</span>\n          <span class=\"lead\"><a href=\"\" target=\"_blank\">housemusicarchive.org</a></span>\n          <iframe style=\"width: 100%; height: 250px;\" src=\"https://docs.google.com/a/oldtownschool.org/document/d/1otlu-PleyfbpSU28Fp0NyXWinJDLf95wOvem82-PpWU/pub?embedded=true\"></iframe>\n        </md-tab>\n      </md-tab-group>\n    </md-card-content>\n  </md-card>\n</md-card> -->\n\n\n\n"

/***/ }),

/***/ 282:
/***/ (function(module, exports) {

module.exports = "<!-- <md-card>\n\t<div class=\"placeholder\">\n\t\t<img src=\"/assets/SOTC_HomepagePlaceholder_050317.png\"/>\n\t</div>\n</md-card>\n -->\n<div class=\"genre-list\">\n  <md-card *ngFor=\"let genre of genres; index as i;\" class=\"{{genre.name}}\" routerLink=\"{{genre.link}}\" routerLinkActive=\"active\">\n    <md-card-header>\n      <md-card-title>{{genre.name}}</md-card-title>\n      <md-card-subtitle>{{genre.description}}</md-card-subtitle>\n    </md-card-header>\n    <img class=\"card-image\" src=\"{{genre.image}}\">\n  </md-card>\n</div>\n\n\n\n<!--  <md-grid-list cols=\"8\" rowHeight=\"100px\">\n  <md-grid-tile\n      *ngFor=\"let row1tile of row1\"\n      [colspan]=\"row1tile.cols\"\n      [rowspan]=\"row1tile.rows\"\n      [style.background]=\"row1tile.color\">\n    {{row1tile.text}}\n  </md-grid-tile>\n</md-grid-list>\n\n <md-grid-list cols=\"3\" rowHeight=\"100px\" gutterSize = \"10px\">\n  <md-grid-tile\n      *ngFor=\"let row2tile of row2\"\n      [colspan]=\"row2tile.cols\"\n      [rowspan]=\"row2tile.rows\"\n      [style.background]=\"row2tile.color\"\n      [style.border]=\"row2tile.border\"\n      >\n    {{row2tile.text}}\n  </md-grid-tile>\n</md-grid-list> -->"

/***/ }),

/***/ 283:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container>\n\t<div class=\"mat-sidenav-backdrop\"></div>\n\t<md-sidenav #sidenav class=\"app-sidenav mat-sidenav\">\n\t\t<nav>\n\t\t\t<ul>\n\t\t\t\t<li><a href=\"genre1\" routerLink=\"genre1\" routerLinkActive=\"active\" (click)=\"sidenav.close()\">House</a></li>\n\t\t\t\t<li><a href=\"/genre2\" routerLink=\"genre2\" routerLinkActive=\"active\" (click)=\"sidenav.close()\">Blues</a></li>\n\t\t\t\t<li><a href=\"/genre3\" routerLink=\"genre3\" routerLinkActive=\"active\" (click)=\"sidenav.close()\">Jazz</a></li>\n\t\t\t\t<li><a href=\"/genre4\" routerLink=\"genre4\" routerLinkActive=\"active\" (click)=\"sidenav.close()\">Folk</a></li>\n\t\t\t\t<li><a href=\"/genre5\" routerLink=\"genre5\" routerLinkActive=\"active\" (click)=\"sidenav.close()\">Gospel</a></li>\n\t\t\t\t<li><a href=\"/genre6\" routerLink=\"genre6\" routerLinkActive=\"active\" (click)=\"sidenav.close()\">Duranguense</a></li>\n\t\t\t\t<li><a href=\"/genre6\" routerLink=\"genre7\" routerLinkActive=\"active\" (click)=\"sidenav.close()\">Country</a></li>\n\t\t\t</ul>\n\t\t</nav>\n\t</md-sidenav>\n\t<nav class=\"mat-elevation-z6\">\n\t\t<md-toolbar color=\"primary\">\n\t\t    <button class=\"sidenav-toggle mat-button\" md-button=\"\" (click)=\"sidenav.open()\">\n\t\t    \t<span class=\"mat-button-wrapper\">\n\t\t\t    \t<md-icon role=\"img\" class=\"material-icons mat-icon\" aria-label=\"menu\">menu</md-icon>\n\t\t\t  \t</span>\n\t\t\t\t<div class=\"mat-button-ripple mat-ripple\" md-ripple=\"\"></div>\n\t\t\t\t<div class=\"mat-button-focus-overlay\"></div>\n\t\t\t</button>\n\t\t    {{ RoutesTitles }}\n\t\t    <span class=\"app-toolbar-filler\"></span>\n\n\t\t\t<md-menu #appMenu=\"mdMenu\" [overlapTrigger]=\"false\" >\n\t\t\t\t<button md-menu-item> More stuff </button>\n\t\t\t\t<button md-menu-item> More stuff </button>\n\t\t\t</md-menu>\n\n\t\t\t<button md-icon-button [mdMenuTriggerFor]=\"appMenu\" >\n\t\t\t\t<md-icon>more_vert</md-icon>\n\t\t\t</button>\n\t\t</md-toolbar>\n\t</nav>\n\t<div class=\"main-content\">\n\t  \t<div class=\"app-content\">\n\t\t    <!-- <md-card>\n\t\t    \t<md-spinner></md-spinner>\n\t\t    \t<md-list class=\"app-list\">\n\t\t    \t<md-list-item *ngFor=\"let food of foods\">\n\t\t        \t<h3 md-line>{{food.name}}</h3>\n\t\t        \t<p md-line class=\"demo-secondary-text\">{{food.rating}}</p>\n\t\t    \t</md-list-item>\n\t\t    \t</md-list> \n\t\t    </md-card> -->\n\t\t    \n\t    \t<router-outlet>\n\t    \t</router-outlet>\n\t    </div>\n    </div>\n    <app-footer>\n    \tLoading...\n    </app-footer>\n</md-sidenav-container>"

/***/ }),

/***/ 284:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  \t<div class=\"app-content\">\n\t    <md-card>\n\t    \t<h3>\n\t\t\t  Sponsors\n\t\t\t</h3>\n\t\t\t<p>Retro readymade fingerstache truffaut. Skateboard gentrify crucifix, taxidermy paleo kitsch drinking vinegar dreamcatcher selfies 8-bit. Pork belly gluten-free jean shorts hella, artisan direct trade marfa aesthetic irony chia plaid. Tacos kitsch master cleanse, yr cray tattooed ennui snackwave edison bulb tote bag. Semiotics cornhole brooklyn put a bird on it. Cold-pressed chartreuse 8-bit stumptown whatever, godard blue bottle affogato.</p>\n\t\t\t<p>Ennui sartorial aesthetic, succulents vaporware XOXO la croix viral roof party flexitarian keffiyeh gentrify fingerstache fam. PBR&B squid vegan, marfa 90's microdosing single-origin coffee edison bulb tote bag jianbing literally street art cornhole portland. Polaroid health goth everyday carry banjo mixtape cronut. Jianbing leggings swag, pitchfork crucifix church-key cardigan tousled bushwick bitters fashion axe slow-carb kickstarter next level messenger bag. Portland vegan venmo photo booth gluten-free. Vice chillwave cray, keffiyeh intelligentsia kinfolk hell of hoodie meditation edison bulb. Tattooed fanny pack sartorial vegan chillwave.</p>\n\t    </md-card>\n\n\t    <!-- <router-outlet>\n\t    </router-outlet> -->\n    </div>\n</div>\n\n<app-footer>\n\tLoading...\n</app-footer>"

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

module.exports = "<md-card *ngFor=\"let event of events; index as i;\" class=\"{{event.genre}}\">\n  <md-card-header>\n    <div md-card-avatar class=\"event{{i +1}}image\"></div>\n    <md-card-title>{{event.title}}<br>{{event.lead}}<br><em>{{event.admission}}</em></md-card-title>\n    <md-card-subtitle>{{event.location}}<br>\n    {{event.date}} {{event.time}}</md-card-subtitle>\n  </md-card-header>\n  <img class=\"card-image\" src=\"{{event.image}}\">\n  <md-card-content>\n    <p>\n      {{event.description}}\n    </p>\n    <p *ngIf=\"event.link\">\n      <a href=\"{{event.link}}\" target=\"_blank\">{{event.link}}</a>\n    </p>\n    <md-tab-group dynamicHeight *ngIf=\"event.tabs\">\n      <md-tab *ngFor=\"let tab of event.tabs\">\n        <ng-template md-tab-label class=\"tab-label\">\n          {{tab.tabname}}\n        </ng-template>\n        <h4>{{tab.title}}</h4>\n        <img *ngIf=\"tab.image\" class=\"card-image\" src=\"{{tab.image}}\">\n        <div [innerHTML]=\"tab.content\">\n          \n        </div>\n      </md-tab>\n    </md-tab-group>\n  </md-card-content>\n</md-card>\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(191);


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceholderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlaceholderComponent = (function () {
    function PlaceholderComponent() {
        this.genres = [
            {
                name: 'House',
                description: 'House Music Conference, Chicago House Legacy Project',
                image: '',
                link: 'genre1'
            },
            {
                name: 'Blues',
                description: 'Blues’n In Bronzeville, We Bring You Bronzeville',
                image: '',
                link: 'genre2'
            },
            {
                name: 'Jazz',
                description: 'Reginald Robinson, Dee Alexander Quartet',
                image: '',
                link: 'genre3'
            },
            {
                name: 'Folk',
                description: 'Folk Music - Chicago’s Legacy',
                image: '',
                link: 'genre4'
            },
            {
                name: 'Gospel',
                description: 'Gospel & The Freedom Trail',
                image: '',
                link: 'genre5'
            },
            {
                name: 'Duranguense',
                description: 'Title TBD, Rise Of Duranguense Music At Harrison Park',
                image: '',
                link: 'genre6'
            },
            {
                name: 'Country',
                description: 'Title TBD',
                image: '',
                link: 'genre7'
            },
        ];
    }
    PlaceholderComponent.prototype.ngOnInit = function () {
    };
    return PlaceholderComponent;
}());
PlaceholderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'placeholder',
        template: __webpack_require__(282),
        styles: [
            "\n  .genre-list {\n    padding: 20px;\n  }\n   md-card {\n    margin: 20px;\n    width: 260px;\n    display: inline-grid;\n    cursor: pointer;\n  }\n  .card-image {\n    max-width: 100%;\n    margin-bottom: 16px;\n  }\n\t"
        ]
    }),
    __metadata("design:paramtypes", [])
], PlaceholderComponent);

//# sourceMappingURL=placeholder.component.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routes_app_routes_titles_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidenavComponent = (function () {
    function SidenavComponent(_RoutesTitles) {
        var _this = this;
        this._RoutesTitles = _RoutesTitles;
        this.RoutesTitles = "Soundtrack of Chicago";
        this._RoutesTitles.name.subscribe(function (n) { return _this.RoutesTitles = n; });
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    return SidenavComponent;
}());
SidenavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-sidenav',
        template: __webpack_require__(283),
        styles: [__webpack_require__(272)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_routes_app_routes_titles_service__["a" /* RoutesTitles */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_routes_app_routes_titles_service__["a" /* RoutesTitles */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_routes_app_routes_titles_service__["a" /* RoutesTitles */]) === "function" && _a || Object])
], SidenavComponent);

var _a;
//# sourceMappingURL=sidenav.component.js.map

/***/ })

},[534]);
//# sourceMappingURL=main.bundle.js.map