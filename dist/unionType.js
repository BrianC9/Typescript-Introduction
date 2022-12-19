"use strict";
function kgsToLbs(weight) {
    const diff = 2.2046;
    if (typeof weight === 'string') {
        let weightParsed = parseInt(weight);
        return weightParsed * diff;
    }
    else {
        return weight * diff;
    }
}
console.log(kgsToLbs(80));
console.log(kgsToLbs("80kg"));
//# sourceMappingURL=unionType.js.map