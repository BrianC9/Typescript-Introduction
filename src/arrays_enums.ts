let user : [number,String] = [1, "Bryan"]

// Enums -> PascalCase


//Javascript

const small =  's';
const medium = 'm';
const large =  'l';

// With Typecript Enums

//enum Size {Small = 1,Medium , Large }
const enum Size {Small = 's',Medium = 'm', Large = 'l'}

const mySize:Size = Size.Medium;
console.log(mySize); 
