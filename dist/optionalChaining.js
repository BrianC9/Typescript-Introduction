"use strict";
var _a;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customerFounded = getCustomer(1);
console.log((_a = customerFounded === null || customerFounded === void 0 ? void 0 : customerFounded.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear);
let numbers = [1, 2, 3];
console.log(numbers === null || numbers === void 0 ? void 0 : numbers[6]);
let log = null;
log === null || log === void 0 ? void 0 : log("Mensaje importante");
//# sourceMappingURL=optionalChaining.js.map