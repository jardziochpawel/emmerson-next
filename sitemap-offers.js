const slugify = require('slugify')

const fs = require("fs");
const fetch = require("node-fetch");
const prettier = require("prettier");
const BACKEND_URL = 'https://backend.emmerson.pl:1443';
const getDate = new Date().toISOString();

const fetchUrl = BACKEND_URL+"/find";
const YOUR_AWESOME_DOMAIN = "https://frontend.emmerson.pl";

const formatted = sitemap => prettier.format(sitemap, { parser: "html" });

function variationByCases(number, singular, plural, pluralGenitive) {
    number = Math.abs(number);
    if (number === 1) return singular;
    let mod10 = number % 10;
    let mod100 = number % 100;
    if (mod10 > 4 || mod10 < 2 || (mod100 < 15 && mod100 > 11))
        return pluralGenitive;
    return plural;
}

function capitalizeFirstLetter(string = '') {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const getPropertyAndTransaction = (id) => {
    let property;
    let transaction;
    const firstLetter = id.charAt(0);
    const secondLetter = id.charAt(1);
    switch (firstLetter) {
        case "M":
            property = 'mieszkanie';
            break;
        case "B":
            property = 'biuro';
            break;
        case "K":
            property = 'kamienica';
            break;
        case "P":
            property = 'pokoj';
            break;
        case "H":
            property = 'hala-magazyn';
            break;
        case "G":
            property = 'dzialka';
            break;
        case "D":
            property = 'dom';
            break;
        case "L":
            property = 'lokal-uzytkowy';
            break;
        default:
            break;
    }

    switch (secondLetter) {
        case "S":
            transaction = 'sprzedaz';
            break;
        case "W":
            transaction = 'wynajem';
            break;
        default:
            break;
    }

    return { transaction, property }
}

const switchPropertyType = (property) => {
    let result = '';

    switch (property){
        case 'Flat':
            result = 'Mieszkanie';
            break;
        case 'House':
            result = 'Dom';
            break;
        case 'Room':
            result = 'Pokój';
            break;
        case 'CommercialProperty':
            result = 'Lokal użytkowy';
            break;
        case 'Terrain':
            result = 'Działka';
            break;
        case 'Hall':
            result = 'Hala/Magazyn';
            break;
        case 'Garage':
            result = 'Garaż';
            break;
        default:
            return;
    }

    return result;
}

(async () => {
    const fetchOffers = await fetch(fetchUrl)
        .then(res => res.json())
        .catch(err => console.log(err));

    const offerList = [];
    fetchOffers.data.map(offer => {

        const title = offer.title ?  offer.title.replace(/\s/g, '') : '';

        if(title.length === 0){
            const obj = getPropertyAndTransaction(offer.id)
            offer.title = `${ capitalizeFirstLetter(obj.property) } ${ Math.floor(offer.area) }m2, ${offer.rooms ? offer.rooms : ''} ${offer.rooms ? variationByCases(offer.rooms, 'pokój', 'pokoje', 'pokoi'): '' } na ${offer.offerType}`
        }

        const url = `${slugify(switchPropertyType(offer.objectName)).toLowerCase()}/${slugify(offer.offerType).toLowerCase()}/${slugify(offer.title).toLowerCase()}/${offer.id}`;
        offerList.push({ url })
    });

    const postListSitemap = `
    ${offerList
        .map(url => {
            return `
          <url>
            <loc>${YOUR_AWESOME_DOMAIN}/${url.url}</loc>
            <lastmod>${getDate}</lastmod>
          </url>`;
        })
        .join("")}
  `;

    const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${postListSitemap}
    </urlset>
  `;
    const formattedSitemap = formatted(generatedSitemap);

     fs.writeFileSync("./public/sitemap/sitemap-offers.xml", formattedSitemap, "utf8");
})();