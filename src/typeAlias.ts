type Employee = {

    id:number,
    nameE:string,
    role?:string,
    retire?: (age: number)=> boolean;
}
let employee2: Employee= {
    id:1  ,
    nameE:"Bryan",
    retire: (age:number)=>{
        if(age > 65) return true;
        return false
    }
}
let employee3: Employee = {
    id:1,
    nameE:"Julian"
    
}