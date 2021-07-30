
export default function variationByCases(number, singular, plural, pluralGenitive) {
    number = Math.abs(number);
    if (number === 1) return singular;
    let mod10 = number % 10;
    let mod100 = number % 100;
    if (mod10 > 4 || mod10 < 2 || (mod100 < 15 && mod100 > 11))
        return pluralGenitive;
    return plural;
}