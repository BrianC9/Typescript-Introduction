type Customer ={
    birthday: Date
}

function getCustomer(id:number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()};
}
// optional property access operator
let customerFounded = getCustomer(1);
console.log(customerFounded?.birthday?.getFullYear);
//optional element access operator
let numbers: number[]  = [1,2,3]
console.log(numbers?.[6]);
//option call

// let log: any = (message:string) => console.log(message)
let log:any = null;
log?.("Mensaje importante")