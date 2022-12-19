let employee: {
    id:number,
    nameE:string,
    role?:string,
    retire: (age: number)=> boolean;
} = {
    id:1  ,
    nameE:"Bryan",
    retire: (age:number)=>{
        if(age > 65) return true;
        return false
    }
}