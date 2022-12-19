interface EmployeeI  {

    readonly id:number,
    nameE:string,
    role?:string,
    retire?: (age: number)=> boolean;
}

let employee4: Employee= {
    id:1  ,
    nameE:"Bryan",
    retire: (age:number)=>{
        if(age > 65) return true;
        return false
    }
}
let employee5: Employee = {
    id:1,
    nameE:"Julian"
    
}
type Point =  string | number;
const p1: Point = 1;
// Error: Interface Point =  string | number 

// Function Interfaces

interface MathFuncI {
    (x:number, y:number): number;
}
const sum: MathFuncI = (x:number, y:number): number => x + y;

console.log(sum(2,3));
const subs: MathFuncI = (x:number, y:number): number => x - y;
subs(6,1)

type MathType = ( x:number, y:number) => number;

const sumV2: MathType = (x:number,y:number):number => x +y;
console.log(sumV2(2,3));