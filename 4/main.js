//task1 
function doubleValues(arr) { 
    return arr.map(num => num * 2); 
} 
 
console.log(doubleValues([1, 2, 3])); // [2, 4, 6] 
console.log(doubleValues([4, 1, 1, 1, 4])); // [8, 2, 2, 2, 8] 
console.log(doubleValues([2, 2, 2, 2, 2, 2])); // [4, 4, 4, 4, 4, 4] 
 
 
//task2 
 
function removeEverySecond(arr) { 
    return arr.filter((_, index) => index % 2 === 0); 
} 
 
console.log(removeEverySecond(['Привет', 'Пока', 'Снова привет'])); // ['Привет', 'Снова привет'] 
console.log(removeEverySecond([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 3, 5, 7, 9] 
console.log(removeEverySecond(['Пока', {'Цвет': 'Синий'}])); // ['Пока'] 
 
 
//task3 
function switchSigns(arr) { 
    return arr.map(num => (num >= 0) ? -num : Math.abs(num)); 
} 
 
console.log(switchSigns([1, 2, 3, 4, 5])); // [-1, -2, -3, -4, -5] 
console.log(switchSigns([1, -2, 3, -4, 5])); // [-1, 2, -3, 4, -5] 
console.log(switchSigns([])); // [] 
console.log(switchSigns([0])); // [0] 
 
//task4 
function getFirstNElements(arr, n) { 
    return arr.slice(0, n); 
} 
 
console.log(getFirstNElements([0, 1, 2, 3, 5, 8, 13], 3)); // [0, 1, 2] 
console.log(getFirstNElements([0, 1, 2, 3, 5, 8, 13], 5)); // [0, 1, 2, 3, 5] 
 
 
//task5 
function filterElementsByIndex(arr) { 
    return arr.filter((num, index) => num % index === 0); 
} 
 
console.log(filterElementsByIndex([22, -6, 32, 82, 9, 25])); // [-6, 32, 25] 
console.log(filterElementsByIndex([68, -1, 1, -7, 10, 10])); // [-1, 10] 
console.log(filterElementsByIndex([11, -11])); // [-11] 
 
 
//task6 
function replaceStringsWithNull(arr) { 
    return arr.map(item => typeof item === 'string' ? null : item); 
} 
 
console.log(replaceStringsWithNull([4, 6, 'Ivan', 5, 'Denis'])); // [4, 6, null, 5,
