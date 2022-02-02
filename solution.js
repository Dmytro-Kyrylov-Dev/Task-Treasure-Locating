let locationArray = [];
let num = 1;

while(num <= 100000) {
    locationArray.push(num);
    num += 1;
}

function getMultidimensionalArray(arr, result = [], size = 1) {
    if (arr.length === 0) return result;
    return getMultidimensionalArray(
        arr.slice(size),
        [...result, arr.slice(0, size)],
        size + 1
    );
}

let treasureArray = getMultidimensionalArray(locationArray);
let triangularMap = [];

function getMap(treasureArray, result = []) {
    for (let i = 0; i < treasureArray.length; i++) {
        if(treasureArray[i][0]) result.push(treasureArray[i].shift());
    }
    return result;
}

for (let q = 0; q < treasureArray.length; q++) {
    triangularMap.push(getMap(treasureArray))
}

function solution(x, y) {
    return triangularMap[y - 1][x - 1];
}

console.log(solution(2, 3));
console.log(solution(10, 5));