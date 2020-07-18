

let articles = [
    {
        releaseid: 'CSMD108',
        title : 'DJ MAG ESP Reviews Lolla Tek, Mikel Gil - Ghost Protocol',
        shortInfo : 'DJ MAG ESP Reviews the latest collaboration from Lolla Tek & Mikel Gil called "Ghost Protocol" including a remix from Alpha Particle Assembly',
        coverUrl : 'https://www.consumed-music.com/media/images/Screen_Shot_2019-01-19_at_21.59.47.png',
        articleUrl : 'https://djmag.es/mikel-gil-y-lolla-tek-firman-ghost-protocol-ep/',
    },
    {
        releaseid: 'CSMD108',
        title : 'Vicious Magazine reviews Lolla Tek, Mikel Gil - Ghost Protocol',
        shortInfo : 'Vicious Magazine reviews the latest collaboration between Lolla Tek & Mikel Gil called "Ghost Protocol" including a remix from Alpha Particle Assembly',
        coverUrl : 'https://www.consumed-music.com/media/images/Screen_Shot_2019-01-19_at_22.01.45.png',
        articleUrl : 'https://viciousmagazine.com/mikel-gil-se-estrena-en-consumed/',
    },
    {
        releaseid: 'CSMD108',
        title : 'Orbita Magazine reviews Lolla Tek, Mikel Gil - Ghost Protocol',
        shortInfo : 'Orbita Magazine reviews latest collaboration between Lolla Tek & Mikel Gil called "Ghost Protocol" including a remix from Alpha Particle Assembly',
        coverUrl : 'https://www.consumed-music.com/media/images/Screen_Shot_2019-01-19_at_22.11.12.png',
        articleUrl : 'http://www.orbitamagazine.com/mikel-gil-lolla-tek-firman-ghost-protocol-ep-consumed/',
    },
    {
        releaseid: 'CSMD105',
        title : 'The YellowHeads chart on Faze Magazine including APA - ISO II',
        shortInfo : 'The YellowHeads charting on Faze Magazine CSMD105 from Alpha Particle Assembly called "ISO II"',
        coverUrl : 'https://www.consumed-music.com/media/images/Screen_Shot_2019-01-19_at_22.20.30.png',
        articleUrl : 'http://www.fazemag.de/the-yellowheads-reload-black-label-dj-charts-juli-2018/',
    },
    {
        releaseid: 'CSMD101',
        title : 'DJ MAG NL Reviews Felix Krocher - You Don\'t Know But',
        shortInfo : 'Thanks to DJ Mag NL for including Felix Kröcher\'s ep called "You Don\'t Know But" in the latest article The massive ep includes remixes from Aplusplus & Lolla Tek , Dj Richie Santana , Tony Dee',
        coverUrl : 'https://www.consumed-music.com/media/images/12208638_454216684780072_3232724527517883416_n.png',
        articleUrl : 'https://consumed-music.com/94',
    },
    /* THIS IS A TEMPLATE - PLEASE COPY PASTE FROM { TO }, 
    {
        releaseid: '',
        title : '',
        shortInfo : '',
        coverUrl : '',
        articleUrl : '',
    },*/
]

articles.sort((a, b) => (a.releaseid < b.releaseid) ? 1 : -1);


export default articles;