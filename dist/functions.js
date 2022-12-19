"use strict";
function calculateTax(income, taxYear) {
    if ((taxYear || 2020) < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
function calculateTaxV2(income, taxYear = 2020) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(50400, 2020);
//# sourceMappingURL=functions.js.map