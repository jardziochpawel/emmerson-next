
export const getPaginationArray = (array, perPage, page) => {

    const result = [];
    const firstKey = (perPage * page) - perPage;

    array.map((index, key) => {
        if (key > firstKey && key <= perPage * page) {
            result.push(index);
        }
        return null;
    });

    return result;
}