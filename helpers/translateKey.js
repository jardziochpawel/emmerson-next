
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
            result = 'Garaż:';
            break;
        case 'roofType':
            result = 'Dach:';
            break;
        default:
            result = key;
    }

    return result;
}