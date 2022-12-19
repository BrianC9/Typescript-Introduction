function kgsToLbs(weight: number | string ): number{
    const diff:number = 2.2046;
    if (typeof weight === 'string'){
        let weightParsed = parseInt(weight);
        return weightParsed * diff;
    }else{
        return weight * diff;
    }
}

console.log(kgsToLbs(80));
console.log(kgsToLbs("80kg"));