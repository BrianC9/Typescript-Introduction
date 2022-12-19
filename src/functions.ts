function calculateTax(income: number, taxYear?:number):number{
    
    if ( (taxYear||2020) < 2022){
        return income*1.2;
    }
    return income*1.3;
}
function calculateTaxV2(income: number, taxYear=2020):number{
    
    if ( taxYear < 2022){
        return income*1.2;
    }
    return income*1.3;
}
calculateTax(50_400,2020)