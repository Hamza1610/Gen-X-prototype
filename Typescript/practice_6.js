var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Generics
// type: string, size: number, description:
var foodPackage = function (spec, info) {
    return __assign(__assign({}, spec), { info: info });
};
var item_1 = foodPackage({ type: 'Flask', size: 4, color: 'red' }, 'Water rwsistance, 10hrs of use');
var item_2 = foodPackage({ type: 'Plasric cooler', size: 2, color: 'blue' }, 'Thick surface, 3hrs of use');
// trying to access the values of T
console.log(item_1.info);
console.log(item_2.info);
console.log(item_1.type);
console.log(item_2.type);
