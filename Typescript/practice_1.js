var names = 'Hamza';
var age = 30;
var programmer = true;
console.log(names, age, programmer);
var circonference = function (diameter) {
    return diameter * Math.PI;
};
var parameters = function (sides) {
    var count = 1;
    var sum = 0;
    for (var i in sides) {
        sum += sides[i];
    }
    return sum;
};
var quad = function (a, b, c) {
    var numerator = Math.pow((Math.pow(b, 2) - 4 * a * c), 0.5);
    var denomenator = 2 * a;
    var x1 = -(b - numerator) / denomenator;
    var x2 = -(b + numerator) / denomenator;
    return [x1, x2];
};
// console.log(circonference(60));
// console.log(parameters([2, -1, 99]));
console.log(quad(1, 2, 0));
// object and array
var info = {
    names: 'Hamza Muhammad',
    level: '200L',
    age: 14,
    experience: true,
    hubbies: { 1: 'reading', 2: 'coding', 3: 'making research' }
};
info.hubbies = { 1: 's3', 2: 'ds', 3: 'e' };
console.log(info);
var series = [12, 23, 43, 34, 54, 66];
series[2] = 223;
var combinedTypes = [21, 'sd', true, 'sd0', 23.2];
combinedTypes[0] = 'Hello';
combinedTypes.push('Radio');
console.log(series);
console.log(combinedTypes);
