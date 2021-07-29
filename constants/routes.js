const AboutUs = [
    {link: '#', name: 'Misja i historia firmy'},
    {link: '#', name: 'Referencje'},
    {link: '#', name: 'Partnerzy'},
    {link: '#', name: 'RODO'}
];

export const ROUTES = {
    home: {
        link: '/',
        name: 'Strona Główna',
        children: []
    },
    mainMenu: [
        {link: '/o-nas', name: 'O Nas', children: AboutUs},
        {link: 'https://blog.emmerson.pl', name: 'Blog', children: []},
        {link: '/lista-ofert', name: 'Znajdz nieruchomość', children: []},
        {link: '/uslugi-dodatkowe', name: 'Usługi dodatkowe', children: []},
        {link: '#', name: 'Kariera', children: []},
        {link: '/kontakt', name: 'Kontakt', children: []}
    ],
    offerList: {
        link: '/lista-ofert',
        name: 'Lista Ofert',
        children: []
    },
    offer: {
        link: '/:estateType(hala-magazyn|mieszkanie|dom|lokal-uzytkowy|pokoj|dzialka|garaz)/:transaction(sprzedaz|wynajem)/:slug/:id',
        name: 'Oferta',
        children: []
    }
}