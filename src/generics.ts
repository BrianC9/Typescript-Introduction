// Wrong Typescript function to get an Array an array

function getArray(items: any): any []{
    return new Array().concat(items);
}

let numArray = getArray([1,2,3,4])
let strArray = getArray(["Bryan", "Julian", "Raquel"])

numArray.push("Hello")

// Correct Typescript funciont to get an Array

function getArrayV2<TGeneric>(items: TGeneric[]): TGeneric[]{
    return new Array().concat(items);
}

let numArrayV2 = getArrayV2([1,2,3,4])
let strArrayV2 = getArrayV2(["Bryan", "Julian", "Raquel"])

numArrayV2.push("hello")