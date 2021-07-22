
export const switchPropertyType = (property) => {
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