"use strict";
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customerFounded = getCustomer(1);
console.log(customerFounded === null || customerFounded === void 0 ? void 0 : customerFounded.birthday);
//# sourceMappingURL=optionalChaining.js.map