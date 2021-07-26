
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
        default:
            result = key;
    }

    return result;
}