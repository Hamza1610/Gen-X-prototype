// Function
var car;
car = function (spec, model) {
    if (model === void 0) { model = 'Unknown'; }
    return { info: model, spec: spec };
};
console.log(car({ name: 'Lexus', color: 'Silver' }));
