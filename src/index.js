/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */


module.exports = function getLoveTrianglesCount(preferences = []) {
    let result = preferences.reduce(((previousValue, currentValue, currentIndex, array) => {
        if (array[array[currentValue - 1] - 1] === currentIndex + 1) previousValue++;
        return previousValue;
    }), 0) / 3;
    return Math.floor(result);
};

