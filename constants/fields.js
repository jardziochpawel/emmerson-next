export const FIELDS = {
    estates: [
        {label: 'Mieszkania', value: 0},
        {label: 'Domy', value: 1},
        {label: 'Pokoje', value: 3},
        {label: 'Lokale użytkowe', value: 4},
        {label: 'Grunty', value: 2},
        {label: 'Hale i magazyny', value: 5},
        {label: 'Garaże', value: 6}
    ],
    typeOfTransaction: [
        {label: 'Na sprzedaż', value: 0},
        {label: 'Na wynajem', value: 1},
    ],
    market:[
        {label: 'Rynek Pierwotny', value: 0},
        {label: 'Rynek Wtórny', value: 1}
    ]

}


export const SEARCH = {
    estate: {label: "", value: ""},
    localisation: "",
    market: {label: "", value: ""},
    offerNumber: "",
    priceFrom: "",
    priceTo: "",
    roomsFrom: "",
    roomsTo: "",
    surfaceFrom: "",
    surfaceTo: "",
    textFromDescription: "",
    typeOfTransaction: {label: "", value: ""}
}