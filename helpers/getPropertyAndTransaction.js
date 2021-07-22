
export const getPropertyAndTransaction = (id) => {
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