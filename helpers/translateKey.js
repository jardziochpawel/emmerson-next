
export const translateKey = (key) => {
    let result;

    switch (key){
        case 'buildingType':
            result = 'Rodzaj zabudowy:';
            break;
        case 'buildingMaterial':
            result = 'Materiał budynku:';
            break;
        case 'buildingOwnership':
            result = 'Forma własności:';
            break;
        case 'floorNo':
            result = 'Piętro:';
            break;
        case 'constructionStatus':
            result = 'Stan wykończenia:';
            break;
        case 'heating':
            result = 'Ogrzewanie:';
            break;
        case 'floorsNum':
            result = 'Liczba pięter:';
            break;
        case 'type':
            result = 'Typ:';
            break;
        case 'floor':
            result = 'Piętro:';
            break;
        case 'propertyUseMask':
            result = 'Przeznaczenie Lokalu:';
            break;
        case 'extrasMask':
            result = 'Informacje dodatkowe:';
            break;
        case 'securityMask':
            result = 'Zabezpieczenia:';
            break;
        case 'mediaMask':
            result = 'Media:';
            break;
        case 'accessMask':
            result = 'Dojazd:';
            break;
        case 'fenceMask':
            result = 'Ogrodzenie:';
            break;
        case 'heatingMask':
            result = 'Ogrzewanie:';
            break;
        case 'windowsType':
            result = 'Okna:';
            break;
        case 'garretType':
            result = 'Poddasze:';
            break;
        case 'roofType':
            result = 'Dach:';
            break;
        case 'vicinityMask':
            result = 'Okolica:';
            break;
        case 'location':
            result = 'Położenie:';
            break;
        case 'terrainArea':
            result = 'Powierzchnia działki:';
            break;
        case 'roofing':
            result = 'Rodzaj dachu:';
            break;
        case 'furnished':
            result = 'Umeblowane:';
            break;
        case 'rent':
            result = 'Wysokość czynszu:';
            break;
        case 'priceIncludeRent':
            result = 'Cena zawiera czynsz:';
            break;
        case 'roomsNum':
            result = 'Ilość pokoi:';
            break;
        case 'buildYear':
            result = 'Rok budowy:';
            break;
        case 'buildingFloorsNum':
            result = 'Liczba pięter:';
            break;
        case 'freeFrom':
            result = 'Wolne od:';
            break;
        case 'socialFacilities':
            result = 'Pomieszczenia socjalne:';
            break;
        case 'officeSpace':
            result = 'Przestrzeń biurowa:';
            break;
        case 'fence':
            result = 'Ogrodzone:';
            break;
        case 'ramp':
            result = 'Rampa:';
            break;
        case 'height':
            result = 'Wysokość:';
            break;
        default:
            result = key;
    }

    return result;
}